

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DRSp_mdo.js","_app/immutable/chunks/disclose-version.BdDgpHGA.js","_app/immutable/chunks/runtime.fSoBZ0iZ.js","_app/immutable/chunks/index-client.DOmZjwTE.js"];
export const stylesheets = ["_app/immutable/assets/0.BfAsBirE.css"];
export const fonts = [];
