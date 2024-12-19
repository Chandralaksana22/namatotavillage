import axios from "axios";
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
export {
  load
};
