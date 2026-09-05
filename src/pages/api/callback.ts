import type { APIRoute } from 'astro';
import { postMessagePage } from '../../lib/cms-auth';

export const prerender = false;

// Deuxième étape : GitHub nous renvoie un code, on l'échange contre un jeton.
export const GET: APIRoute = async ({ url, request }) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return postMessagePage({
      error: "L'application GitHub n'est pas configurée sur ce site.",
      errorCode: 'MISCONFIGURED_CLIENT',
    });
  }

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const csrf = request.headers.get('Cookie')?.match(/\bcsrf-token=github_([0-9a-f]{32})\b/)?.[1];

  if (!code || !state) {
    return postMessagePage({
      error: 'GitHub n\'a pas renvoyé de code. Réessayez.',
      errorCode: 'AUTH_CODE_REQUEST_FAILED',
    });
  }

  if (!csrf || state !== csrf) {
    return postMessagePage({
      error: 'Connexion interrompue : le jeton de sécurité ne correspond pas.',
      errorCode: 'CSRF_DETECTED',
    });
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const data = (await response.json()) as { access_token?: string; error_description?: string };

  if (!response.ok || !data.access_token) {
    return postMessagePage({
      error: data.error_description ?? "GitHub n'a pas délivré de jeton.",
      errorCode: 'TOKEN_REQUEST_FAILED',
    });
  }

  return postMessagePage({ token: data.access_token, host: url.hostname });
};
