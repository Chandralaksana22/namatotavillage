import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getPost } from '$lib/config/api/Post';
export const load: PageServerLoad = async ({ url }) => {
    try {
        const [information, blog] = await Promise.all([
            getInformation(),
            getPost(),


        ]);

        return {
           
            information,
            blog,
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
