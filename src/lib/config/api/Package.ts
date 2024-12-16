import apiClient from "$lib/config/api"

export async function getPackage() {
	try {
		const resp = await apiClient.get(
			`/paket`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
