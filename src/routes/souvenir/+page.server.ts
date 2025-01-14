import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getSouvenir } from '$lib/config/api/Souvenir';
import { getRoom } from '$lib/config/api/Homestay';
export const load: PageServerLoad = async ({ url }) => {
    try {
        const [information, souvenir] = await Promise.all([
            getInformation(),
            getSouvenir(),
          

        ]);

        return {
           
            information,
            souvenir,
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
