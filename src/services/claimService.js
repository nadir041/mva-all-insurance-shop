/**
 * Claim (lead) submission.
 *
 * Mirrors the original site: the <form>'s FormData (all visible fields)
 * is POSTed as multipart/form-data to a same-origin endpoint, `/mva.aspx` by default.
 *
 * Override the endpoint with VITE_CLAIM_ENDPOINT (see .env.example). No credentials
 * belong here — anything in VITE_* is public. If the backend needs a secret, put a
 * server-side proxy in front of it.
 */
export const CLAIM_ENDPOINT = import.meta.env.VITE_CLAIM_ENDPOINT || '/mva.aspx';

const TIMEOUT_MS = 20000;

export class ClaimSubmissionError extends Error {}

/**
 * @param {FormData} formData
 * @returns {Promise<void>} resolves only when the server accepted the submission
 */
export async function submitClaim(formData) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response;
  try {
    response = await fetch(CLAIM_ENDPOINT, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });
  } catch (err) {
    throw new ClaimSubmissionError(err?.name === 'AbortError' ? 'Request timed out' : 'Network error');
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    throw new ClaimSubmissionError(`Server responded with ${response.status}`);
  }

  // Guard against a false success: static hosts often answer unknown paths with the
  // SPA's index.html (HTTP 200). That means no backend received the lead.
  const type = response.headers.get('content-type') || '';
  if (type.includes('text/html')) {
    const body = await response.text();
    if (body.includes('id="root"')) {
      throw new ClaimSubmissionError('Endpoint returned the app shell — no backend is connected');
    }
  }
}
