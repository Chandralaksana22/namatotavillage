import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import { a as afterUpdate } from "./ssr2.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	<link rel="alternate" hreflang="en" href="https://namatota.my.id/" />\n	<link rel="alternate" hreflang="id" href="https://namatota.my.id/" />\n	<link rel="canonical" href="https://namatota.my.id/" />\n	<link rel="shortlink" href="https://namatota.my.id/" />\n	<link rel="apple-touch-icon" sizes="57x57" href="' + assets2 + '/apple-icon-57x57.png" />\n	<link rel="apple-touch-icon" sizes="60x60" href="' + assets2 + '/apple-icon-60x60.png" />\n	<link rel="apple-touch-icon" sizes="72x72" href="' + assets2 + '/apple-icon-72x72.png" />\n	<link rel="apple-touch-icon" sizes="76x76" href="' + assets2 + '/apple-icon-76x76.png" />\n	<link rel="apple-touch-icon" sizes="114x114" href="' + assets2 + '/apple-icon-114x114.png" />\n	<link rel="apple-touch-icon" sizes="120x120" href="' + assets2 + '/apple-icon-120x120.png" />\n	<link rel="apple-touch-icon" sizes="144x144" href="' + assets2 + '/apple-icon-144x144.png" />\n	<link rel="apple-touch-icon" sizes="152x152" href="' + assets2 + '/apple-icon-152x152.png" />\n	<link rel="apple-touch-icon" sizes="180x180" href="' + assets2 + '/apple-icon-180x180.png" />\n	<link rel="icon" type="image/png" sizes="192x192" href="' + assets2 + '/android-icon-192x192.png" />\n	<link rel="icon" type="image/png" sizes="32x32" href="' + assets2 + '/favicon-32x32.png" />\n	<link rel="icon" type="image/png" sizes="96x96" href="' + assets2 + '/favicon-96x96.png" />\n	<link rel="icon" type="image/png" sizes="16x16" href="' + assets2 + '/favicon-16x16.png" />\n	<link rel="manifest" href="/manifest.json" />\n	<meta name="description"\n		content="Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal sebagai “Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal yang autentik, dan pesona alam yang memukau.">\n	<meta name="google-site-verification" content="OIHFcbwoEAU89_3MouzqOrkhbG10Q2G3gzdVWoUO8Fg" />\n	<meta name="published" content="2024-12-12">\n	<meta name="modified" content="2024-12-12">\n	<meta name="msapplication-TileColor" content="#ffffff" />\n	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />\n	<meta name="theme-color" content="#ffffff" />\n	<meta name="viewport" content="width=device-width" />\n	<meta property="og:title" content="Namatota">\n	<meta property="og:site_name" content="Namatota.my.id">\n	<meta property="og:url" content="https://Namatota.my.id" />\n	<meta property="og:description"\n		content="Munio is an online platform to help communities managing their members with engaging features.">\n	<meta property="og:type" content="website">\n	<meta name="MobileOptimized" content="width" />\n	<meta name="HandheldFriendly" content="true" />\n	<meta http-equiv="Cache-Control" content="max-age=3600, public">\n	' + head + '\n</head>\n\n<body data-sveltekit-preload-data="hover">\n	<div style="display: contents">' + body + "</div>\n</body>\n\n</html>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "6ydreb"
};
async function get_hooks() {
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
export {
  assets as a,
  base as b,
  read_implementation as c,
  options as d,
  set_private_env as e,
  prerendering as f,
  set_public_env as g,
  get_hooks as h,
  set_safe_public_env as i,
  set_read_implementation as j,
  set_assets as k,
  set_building as l,
  set_manifest as m,
  set_prerendering as n,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
