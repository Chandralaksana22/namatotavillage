
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t<link rel=\"alternate\" hreflang=\"en\" href=\"https://namatota.my.id/\" />\n\t<link rel=\"alternate\" hreflang=\"id\" href=\"https://namatota.my.id/\" />\n\t<link rel=\"canonical\" href=\"https://namatota.my.id/\" />\n\t<link rel=\"shortlink\" href=\"https://namatota.my.id/\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + assets + "/apple-icon-57x57.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + assets + "/apple-icon-60x60.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + assets + "/apple-icon-72x72.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + assets + "/apple-icon-76x76.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + assets + "/apple-icon-114x114.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + assets + "/apple-icon-120x120.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + assets + "/apple-icon-144x144.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + assets + "/apple-icon-152x152.png\" />\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/apple-icon-180x180.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" + assets + "/android-icon-192x192.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/favicon-32x32.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + assets + "/favicon-96x96.png\" />\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/favicon-16x16.png\" />\n\t<link rel=\"manifest\" href=\"/manifest.json\" />\n\t<meta name=\"description\"\n\t\tcontent=\"Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal sebagai “Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal yang autentik, dan pesona alam yang memukau.\">\n\t<meta name=\"google-site-verification\" content=\"OIHFcbwoEAU89_3MouzqOrkhbG10Q2G3gzdVWoUO8Fg\" />\n\t<meta name=\"published\" content=\"2024-12-12\">\n\t<meta name=\"modified\" content=\"2024-12-12\">\n\t<meta name=\"msapplication-TileColor\" content=\"#ffffff\" />\n\t<meta name=\"msapplication-TileImage\" content=\"/ms-icon-144x144.png\" />\n\t<meta name=\"theme-color\" content=\"#ffffff\" />\n\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t<meta property=\"og:title\" content=\"Namatota\">\n\t<meta property=\"og:site_name\" content=\"Namatota.my.id\">\n\t<meta property=\"og:url\" content=\"https://Namatota.my.id\" />\n\t<meta property=\"og:description\"\n\t\tcontent=\"Munio is an online platform to help communities managing their members with engaging features.\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta name=\"MobileOptimized\" content=\"width\" />\n\t<meta name=\"HandheldFriendly\" content=\"true\" />\n\t<meta http-equiv=\"Cache-Control\" content=\"max-age=3600, public\">\n\t" + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "6ydreb"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
