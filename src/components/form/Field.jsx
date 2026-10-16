import { ChevronDown } from 'lucide-react';

/**
 * Floating-label text input or select. The label sits inside the control and
 * floats up when the field is focused or filled; errors render in the reserved
 * space below the control so nothing shifts when they appear.
 */
export default function Field({ field, value, error, onChange, onBlur }) {
  const id = field.id || field.name;
  const errorId = `${id}-error`;
  const filled = value !== '';
  const isSelect = field.type === 'select';

  const shared = {
    id,
    name: field.name,
    value,
    required: true,
    autoComplete: field.autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    onChange,
    onBlur,
  };

  return (
    <div
      className={`field${isSelect ? ' field--select' : ''}${field.span === 2 ? ' field--full' : ''}`}
      data-filled={filled}
      data-invalid={Boolean(error)}
    >
      {isSelect ? (
        <>
          <select className="field__control" {...shared}>
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options.map((opt) => {
              const [val, text] = Array.isArray(opt) ? opt : [opt, opt];
              return (
                <option key={val} value={val}>
                  {text}
                </option>
              );
            })}
          </select>
          <ChevronDown className="field__chevron" size={18} strokeWidth={2} aria-hidden="true" />
        </>
      ) : (
        <input
          className="field__control"
          type={field.type || 'text'}
          inputMode={field.inputMode}
          maxLength={field.maxLength}
          placeholder={field.hint || ' '}
          {...shared}
        />
      )}
      <label className="field__label" htmlFor={id}>
        {field.label}
      </label>
      <p className="field__error" id={errorId} aria-live="polite">
        {error}
      </p>
    </div>
  );
}
