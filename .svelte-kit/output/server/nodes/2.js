import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BCq9Pejz.js","_app/immutable/chunks/disclose-version.BdDgpHGA.js","_app/immutable/chunks/runtime.fSoBZ0iZ.js","_app/immutable/chunks/legacy.l3JCjtHF.js"];
export const stylesheets = [];
export const fonts = [];
