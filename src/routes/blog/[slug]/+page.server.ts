import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getBlogDetail } from '$lib/config/api/Post';
export const load: PageServerLoad = async ({ params, url }) => {
    try {
        const [information, detail] = await Promise.all([
            getInformation(),
            getBlogDetail(params?.slug)
        ]);

        return {
           
            information,
            detail
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
