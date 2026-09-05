/**
 * Relais OAuth pour le CMS d'administration.
 *
 * Le CMS ouvre /api/auth dans une fenêtre pop-up, GitHub renvoie vers
 * /api/callback, et cette fenêtre transmet le jeton à la page qui l'a ouverte
 * par postMessage. Le jeton ne transite jamais par le site lui-même.
 */

/** Domaines autorisés à recevoir un jeton. */
export const TRUSTED_HOSTS = [
  'houleymatou-diallo.vercel.app',
  'portfolio-ia-xi.vercel.app',
  'localhost',
  '127.0.0.1',
];

/** Portées GitHub acceptées. Le dépôt est public, `public_repo` suffit. */
const ALLOWED_SCOPES = ['public_repo', 'repo', 'user', 'read:user', 'user:email'];
const DEFAULT_SCOPE = 'public_repo,user';

export function resolveScope(requested: string | null): string {
  const scopes = (requested ?? '').split(/[\s,]+/).filter(Boolean);
  if (!scopes.length) return DEFAULT_SCOPE;
  return scopes.every((s) => ALLOWED_SCOPES.includes(s)) ? scopes.join(',') : DEFAULT_SCOPE;
}

const CLEAR_CSRF = 'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure';

type Payload = { token?: string; error?: string; errorCode?: string };

/**
 * Page de fin de parcours : elle attend que le CMS se signale, puis lui répond.
 * Une erreur part vers n'importe quelle origine, un jeton seulement vers les nôtres.
 */
export function postMessagePage({ token, error, errorCode }: Payload): Response {
  const state = error ? 'error' : 'success';
  const content = error ? { provider: 'github', error, errorCode } : { provider: 'github', token };
  const json = JSON.stringify(content).replaceAll('<', '\\u003c');

  return new Response(
    `<!doctype html><html lang="fr"><body><script>
      (() => {
        const trusted = ${JSON.stringify(TRUSTED_HOSTS)};
        const hasToken = ${JSON.stringify(!!token)};
        const isTrusted = (origin) => {
          try { return trusted.includes(new URL(origin).hostname); } catch { return false; }
        };
        window.addEventListener('message', ({ data, origin }) => {
          if (data !== 'authorizing:github') return;
          if (hasToken && !isTrusted(origin)) return;
          window.opener?.postMessage('authorization:github:${state}:${json}', origin);
        });
        window.opener?.postMessage('authorizing:github', '*');
      })();
    </script></body></html>`,
    { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Set-Cookie': CLEAR_CSRF } }
  );
}
