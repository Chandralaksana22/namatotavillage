import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';

import { getRoom } from '$lib/config/api/Homestay';
export const load: PageServerLoad = async ({ url }) => {
    try {
        const [information, room] = await Promise.all([
            getInformation(),
            getRoom(),
          

        ]);

        return {
           
            information,
            room,
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
