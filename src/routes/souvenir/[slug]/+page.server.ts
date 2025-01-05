import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getSouvenirDetail } from '$lib/config/api/Souvenir';
export const load: PageServerLoad = async ({ params, url }) => {
    try {
        const [information, detail] = await Promise.all([
            getInformation(),
            getSouvenirDetail(params?.slug)
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
