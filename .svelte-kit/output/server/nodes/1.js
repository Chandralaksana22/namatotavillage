

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.MoCw-3Ge.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/chunks/index.yZEH951e.js","_app/immutable/chunks/entry.Bvnb9_Po.js"];
export const stylesheets = [];
export const fonts = [];
