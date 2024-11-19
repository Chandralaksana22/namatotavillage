

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DhO8DrFm.js","_app/immutable/chunks/disclose-version.Cho4bfoX.js","_app/immutable/chunks/runtime.4cnYjytP.js","_app/immutable/chunks/index-client.Cwab6Dlt.js"];
export const stylesheets = ["_app/immutable/assets/0.CB33M4qQ.css"];
export const fonts = [];
