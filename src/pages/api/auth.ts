import type { APIRoute } from 'astro';
import { postMessagePage, resolveScope } from '../../lib/cms-auth';

export const prerender = false;

// Première étape : on dépose un jeton anti-CSRF et on envoie vers GitHub.
export const GET: APIRoute = ({ url }) => {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return postMessagePage({
      error: "L'application GitHub n'est pas configurée sur ce site.",
      errorCode: 'MISCONFIGURED_CLIENT',
    });
  }

  const csrf = crypto.randomUUID().replaceAll('-', '');
  const params = new URLSearchParams({
    client_id: clientId,
    scope: resolveScope(url.searchParams.get('scope')),
    state: csrf,
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
      // 10 minutes suffisent pour se connecter ; Lax pour survivre au retour de GitHub.
      'Set-Cookie': `csrf-token=github_${csrf}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`,
    },
  });
};
