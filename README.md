# MVA All Insurance Shop — React site

Rebuild of https://mvaclaims.allinsuranceshop.com/ in React + Vite, redesigned in Apple's visual
language (San Francisco system font, light surfaces, Apple-blue actions), with the lead form moved
into the hero.

## Requirements
- Node.js **20.19+** (tested on Node 24) and npm

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve dist/ at http://localhost:4173
npm run dev:mock   # dev server with a LOCAL fake claim endpoint, to see the form's success state
```

## Pages & routes
| Route | Page |
|---|---|
| `/` | Home: hero + lead form, How It Works, About (`/#about`), Why Choose Us, Services, Accident Types, FAQ, CTA |
| `/privacy-policy` | Privacy Policy (original text) |
| `/terms` | Terms & Conditions (original text) |
| `/#contact` | Scrolls to the lead form |

Legacy URLs from the original site redirect client-side: `/index.html`, `/mva-claims`, `/mva.aspx`,
`/MVA.aspx` → `/#contact`; `/privacy-policy.html`, `/terms.html` → their pages; unknown → `/`.

## Project structure
```
src/
  main.jsx, App.jsx          # entry + routes (legal pages are code-split)
  layouts/MainLayout.jsx     # header, main, footer, back-to-top, scroll manager
  components/                # Header, Footer, Reveal, LegalPage, BackToTop, ScrollManager
  components/form/           # ClaimForm (lead form) + Field (floating-label input/select)
  components/home/           # Home page sections + home.css
  pages/                     # HomePage, PrivacyPolicyPage, TermsPage
  data/site.js               # ALL page copy and business details (edit text here)
  data/claimForm.js          # form fields, options, messages
  services/claimService.js   # form submission (endpoint, error handling)
  styles/tokens.css          # design tokens (color, type, spacing, radius, shadow, motion)
  styles/base.css            # reset, typography, buttons, reveal animations
public/                      # favicons, robots.txt, sitemap.xml, og-image, site.webmanifest, _redirects
design-assets/original/      # untouched original images & logo (reference only, not bundled)
```

## Lead form — integration notes (please read)
- **Submission:** `POST` multipart `FormData` to `VITE_CLAIM_ENDPOINT` (default `/mva.aspx`, same as the
  original). Field names are identical to the original: `txtFN, txtLN, txtaddr, txtcity, txtState,
  ZipCode, DOB, txtPhone, txtEmail, ddlHaveAttorney, injuryT, ddlDoctorTreatment, ddlIncidentDate,
  leadid_tcpa_disclosure, user_ip, leadid_token` (the last two are empty hidden fields). No third-party consent tracking (TrustedForm/Jornaya) or IP lookup is used.
- **The backend was not accessible during this rebuild and has not been tested.** Without one, the form
  honestly shows "An error occurred. Please try again." Success is shown only for a 2xx response
  that is not the SPA's own `index.html` (a common false-positive on static hosts).
- If the backend is on another domain, either proxy `/mva.aspx` to it (see `public/_redirects` /
  `vercel.json`) or set `VITE_CLAIM_ENDPOINT` to its full URL (it must allow CORS). Never put
  secrets in `VITE_*` variables — they are public.
- **Validation added:** all fields required (as before), plus format checks for ZIP (5 digits),
  phone (10 digits), email, and DOB (`MM/DD/YYYY`, auto-formatted while typing).
- **TCPA disclosure:** shown as a 3-line preview with a "Read more" toggle (client request). The full
  text is always in the page (screen readers read all of it). If compliance
  requires the full text to be visible by default, set the initial `consentExpanded` state to `true`
  in `src/components/form/ClaimForm.jsx`.

## Environment variables (`.env.example`)
`VITE_CLAIM_ENDPOINT`, `VITE_SITE_URL`.

## Deploy
Any static host. Build command `npm run build`, output directory `dist`.
The host must serve `index.html` for unknown paths (SPA fallback) so `/terms` etc. load directly:
- `dist/` in the shared folder is a ready-made production build of the current version, but run
  `npm run build` yourself after setting any environment variables (they are baked in at build time).
- **Netlify:** handled by `public/_redirects`.
- **Vercel:** handled by `vercel.json`.
- **Apache / Nginx / IIS:** add a rewrite of non-file requests to `/index.html` — but keep `/mva.aspx`
  POSTs going to the backend.
Update `VITE_SITE_URL`, `public/robots.txt`, `public/sitemap.xml` and the canonical/OG URLs in
`index.html` if the domain changes.

## Content notes
- Core copy, legal text, business details and form are from the original site. "MVA" in body copy
  is written out as "Motor Vehicle Accident" (the business name "MVA All Insurance Shop" is unchanged).
- FAQ, "Common types of car accidents", the "Why Choose Us" intro and the four extra benefits are
  adapted from https://myaccidentclaims.com/ at the client's request — please confirm they are
  accurate for this business before launch.
- The original's full-screen preloader was removed (it delayed content); its tagline is kept in `site.js`.
- The phone shows as `+7274053157` (as on the original); the tap-to-call link dials `7274053157`,
  because `+7…` would be treated as an international number. Please confirm the intended format.
- The logo source is only 144×64 px; supply a larger PNG/SVG for sharper rendering.

## Verified
- `npm run build` succeeds; legal pages are split into separate chunks.
- Lighthouse (mobile, `npm run preview`, this machine): Performance 88–91, Accessibility 100,
  Best Practices 100, SEO 100; CLS 0.
- Tested: all routes + direct loads + legacy redirects, header/footer/hash navigation, mobile menu
  (open/close/Escape), form validation, DOB mask, loading state, error state (no backend), success
  state (`dev:mock`), no horizontal overflow at 375 px, reduced-motion rendering.
