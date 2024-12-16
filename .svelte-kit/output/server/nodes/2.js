import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CptZ_f2L.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/chunks/index.yZEH951e.js"];
export const stylesheets = ["_app/immutable/assets/2.D7wrQ6zr.css"];
export const fonts = [];
