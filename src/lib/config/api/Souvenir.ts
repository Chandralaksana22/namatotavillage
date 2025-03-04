import apiClient from "$lib/config/api"

export async function getSouvenir() {
	try {
		const resp = await apiClient.get(
			`/souvenir`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getSouvenirDetail(slug?: string) {
	try {
		const resp = await apiClient.get(
			`/souvenir/${slug}`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
