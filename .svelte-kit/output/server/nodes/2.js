import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CAV6gJxk.js","_app/immutable/chunks/disclose-version.Cho4bfoX.js","_app/immutable/chunks/runtime.4cnYjytP.js","_app/immutable/chunks/legacy.BLh6OhlB.js"];
export const stylesheets = [];
export const fonts = [];
