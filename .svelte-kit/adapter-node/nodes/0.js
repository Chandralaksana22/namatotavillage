

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CYQ6D3um.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/chunks/index.yZEH951e.js"];
export const stylesheets = ["_app/immutable/assets/0.c4K-U5lB.css"];
export const fonts = [];
