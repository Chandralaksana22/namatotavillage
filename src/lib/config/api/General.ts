import apiClient from "$lib/config/api"

export async function getInformation() {
	try {
		const resp = await apiClient.get(
			`/information`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
