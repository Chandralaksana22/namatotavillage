import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getRoomDetail } from '$lib/config/api/Homestay';
export const load: PageServerLoad = async ({ params, url }) => {
    try {
        const [information, detail] = await Promise.all([
            getInformation(),
            getRoomDetail(params?.slug)
        ]);

        return {
            maxage: 120,
            information,
            detail
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
