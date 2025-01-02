import apiClient from "$lib/config/api"

export async function getPost() {
	try {
		const resp = await apiClient.get(
			`/blog`
		);
		return resp.data?.data;
	} catch (error) {
		console.log(error);
	}
}
