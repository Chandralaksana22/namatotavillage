import axios from 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const BASE_URL = "https://apinamatota.tisiel.my.id/api/v1/";
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "cache-control": "public, max-age=3600",
    "Access-Control-Allow-Origin": "*",
    "Accept-Encoding": "gzip, compress, br"
  }
});
async function getInformation() {
  try {
    const resp = await apiClient.get(
      `/information`
    );
    return resp.data?.data;
  } catch (error) {
    console.log(error);
  }
}
async function getPackage() {
  try {
    const resp = await apiClient.get(
      `/paket`
    );
    return resp.data?.data;
  } catch (error) {
    console.log(error);
  }
}
const load = async ({ url }) => {
  try {
    const [information, packages] = await Promise.all([
      getInformation(),
      getPackage()
    ]);
    return {
      maxage: 120,
      information,
      packages
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4NBmhiu6.js')).default;
const universal_id = "src/routes/+page.ts";
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.CptZ_f2L.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/chunks/index.yZEH951e.js"];
const stylesheets = ["_app/immutable/assets/2.D7wrQ6zr.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-BaqiI3KL.js.map
