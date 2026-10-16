import { useEffect, useRef, useState } from 'react';
import { CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react';
import Field from './Field';
import { CONSENT, FIELDS, claimFormCopy as copy } from '../../data/claimForm';
import { submitClaim } from '../../services/claimService';
import { formatDate, validateField } from '../../utils/validation';
import './ClaimForm.css';

const initialValues = Object.fromEntries(FIELDS.map((f) => [f.name, '']));

export default function ClaimForm({ id = 'contact' }) {
  const formRef = useRef(null);
  const successRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [consentExpanded, setConsentExpanded] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const [summary, setSummary] = useState('');
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  // Fetch the visitor's public IP and store it in React state.
  useEffect(() => {
    let cancelled = false;

    async function fetchUserIP() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) throw new Error('IP lookup failed');

        const data = await response.json();
        if (!cancelled && data.ip) {
          setUserIP(data.ip);
          window.mvaUserIP = data.ip;
        }
      } catch (error) {
        console.warn('Could not fetch user IP:', error);
      }
    }

    fetchUserIP();
    return () => {
      cancelled = true;
    };
  }, []);

  // Preserve a LeadID token if its callback ran before React rendered the form.
  useEffect(() => {
    const field = formRef.current?.querySelector('#leadid_token');
    if (field && window.mvaLeadIdToken) {
      field.value = window.mvaLeadIdToken;
    }
  }, []);

  const fieldByName = (name) => FIELDS.find((f) => f.name === name);

  const handleChange = (e) => {
    const { name } = e.target;
    const field = fieldByName(name);
    const value = field.format === 'date' ? formatDate(e.target.value) : e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    // Re-validate live only once a field is already showing an error.
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validateField(field, value) }));
    if (status === 'failed') setStatus('idle');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) return; // don't nag on empty fields while tabbing through
    setErrors((er) => ({ ...er, [name]: validateField(fieldByName(name), value) }));
  };

  const handleConsent = (e) => {
    setConsent(e.target.checked);
    if (e.target.checked) setErrors((er) => ({ ...er, [CONSENT.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const nextErrors = {};
    for (const f of FIELDS) {
      const msg = validateField(f, values[f.name]);
      if (msg) nextErrors[f.name] = msg;
    }
    if (!consent) nextErrors[CONSENT.name] = CONSENT.error;
    setErrors(nextErrors);

    const invalid = Object.keys(nextErrors);
    if (invalid.length) {
      setSummary(`Please correct ${invalid.length} highlighted ${invalid.length === 1 ? 'field' : 'fields'}.`);
      const first = FIELDS.find((f) => nextErrors[f.name]);
      const targetId = first ? first.id || first.name : CONSENT.name;
      document.getElementById(targetId)?.focus();
      return;
    }

    setSummary('');
    setStatus('sending');
    try {
      const formData = new FormData(formRef.current);
      formData.set('user_ip', userIP || window.mvaUserIP || '');
      formData.set(
        'leadid_token',
        formRef.current?.querySelector('#leadid_token')?.value || window.mvaLeadIdToken || ''
      );

      await submitClaim(formData);
      setStatus('sent');
    } catch (error) {
      console.error('Claim submission failed:', error);
      setStatus('failed');
    }
  };

  return (
    <div className="claim-card" id={id} tabIndex={-1} aria-labelledby="claim-title">
      <div className="claim-card__head">
        <h2 id="claim-title" className="claim-card__title">
          {copy.title}
        </h2>
        <p className="claim-card__intro">{copy.intro}</p>
      </div>

      {status === 'sent' ? (
        <div className="claim-success" role="status" tabIndex={-1} ref={successRef}>
          <span className="claim-success__icon">
            <CircleCheck size={28} strokeWidth={2} aria-hidden="true" />
          </span>
          <p>{copy.success}</p>
        </div>
      ) : (
        <form
          ref={formRef}
          id="contact_form"
          className="claim-form"
          noValidate
          onSubmit={handleSubmit}
          aria-describedby={summary ? 'claim-summary' : undefined}
        >
          <div className="claim-form__grid">
            {FIELDS.map((field) => (
              <Field
                key={field.name}
                field={field}
                value={values[field.name]}
                error={errors[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>

          <div className="consent" data-invalid={Boolean(errors[CONSENT.name])}>
            <label htmlFor={CONSENT.name} className="consent__label">
              <input
                className="consent__box"
                type="checkbox"
                name={CONSENT.name}
                id={CONSENT.name}
                required
                checked={consent}
                onChange={handleConsent}
                aria-invalid={errors[CONSENT.name] ? true : undefined}
                aria-describedby={errors[CONSENT.name] ? `${CONSENT.name}-error` : undefined}
              />
              <span id="tcpa-text" className="consent__text" data-expanded={consentExpanded}>
                By clicking &quot;Submit,&quot; you expressly authorize to speak to an attorney for Legal Help, and
                its affiliates,{' '}
                <a href={copy.partnersUrl} target="_blank" rel="noopener noreferrer">
                  marketing partners
                </a>
                , and multiple law firms to contact you regarding motor vehicle accident claims. You consent to be
                contacted via telephone call, text message (SMS), email, automated dialing systems, pre-recorded voice
                messages, and/or artificial (AI-generated) voice technologies, including the use of an Automatic
                Telephone Dialing System (ATDS), at the phone number(s) you provided, even if your number is on any
                federal, state, or corporate Do Not Call (DNC) list. Your consent is not required as a condition of
                receiving any services. You may revoke your consent at any time. Message and data rates may apply.
                Message frequency may vary. Text &quot;HELP&quot; for help or &quot;STOP&quot; to opt out.
              </span>
            </label>
            <button
              type="button"
              className="consent__toggle"
              aria-expanded={consentExpanded}
              aria-controls="tcpa-text"
              onClick={() => setConsentExpanded((v) => !v)}
            >
              {consentExpanded ? 'Show less' : 'Read more'}
            </button>
            <p className="field__error consent__error" id={`${CONSENT.name}-error`} aria-live="polite">
              {errors[CONSENT.name]}
            </p>
          </div>

          <input type="hidden" id="user_ip" name="user_ip" value={userIP} readOnly />
          <input type="hidden" id="leadid_token" name="leadid_token" defaultValue="" />

          {status === 'failed' && (
            <div className="claim-alert" role="alert">
              <CircleAlert size={18} strokeWidth={2} aria-hidden="true" />
              <span>{copy.failure}</span>
            </div>
          )}

          <p id="claim-summary" className="visually-hidden" aria-live="assertive">
            {summary}
          </p>

          <button
            type="submit"
            name="btnSubmit"
            id="btnSubmit"
            className="btn btn--primary btn--lg btn--block claim-form__submit"
            disabled={status === 'sending'}
            aria-busy={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <LoaderCircle className="spin" size={18} strokeWidth={2.25} aria-hidden="true" />
                {copy.sending}
              </>
            ) : (
              copy.submit
            )}
          </button>
        </form>
      )}
    </div>
  );
}
