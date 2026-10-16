import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Local-only mock of the claim endpoint, enabled with `npm run dev:mock`.
 * It lets you exercise the form's success state without a backend.
 * It is never included in a production build.
 */
function mockClaimApi() {
  return {
    name: 'mock-claim-api',
    configureServer(server) {
      server.middlewares.use('/mva.aspx', (req, res, next) => {
        if (req.method !== 'POST') return next();
        req.resume();
        req.on('end', () => {
          setTimeout(() => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true, mock: true }));
          }, 900);
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === 'mock' && mockClaimApi()].filter(Boolean),
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
}));
