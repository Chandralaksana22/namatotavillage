import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getPackageDetail } from '$lib/config/api/Package';
export const load: PageServerLoad = async ({ params, url }) => {
    try {
        const [information, detail] = await Promise.all([
            getInformation(),
            getPackageDetail(params?.slug)
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
