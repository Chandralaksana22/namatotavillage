import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getPackage } from '$lib/config/api/Package';
import { getRoom } from '$lib/config/api/Homestay';
import { getSouvenir } from '$lib/config/api/Souvenir';
import { getPost } from '$lib/config/api/Post';
export const load: PageServerLoad = async ({ url }) => {
    try {
        const [information, packages, room, souvenir, post] = await Promise.all([
            getInformation(),
            getPackage(),
            getRoom(),
            getSouvenir(),
            getPost(),

        ]);

        return {
            maxage: 120,
            information,
            packages,
            room,
            souvenir,
            post
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
