import apiClient from "$lib/config/api"

export async function getRoom() {
	try {
		const resp = await apiClient.get(
			`/room`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
