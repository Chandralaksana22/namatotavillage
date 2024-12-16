// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getInformation } from '$lib/config/api/General';
import { getPackage } from '$lib/config/api/Package';
export const load = async ({ url }: Parameters<PageServerLoad>[0]) => {
    try {
        const [information, packages] = await Promise.all([
            getInformation(),
            getPackage()

        ]);

        return {
            maxage: 120,
            information,
            packages
        };
    } catch (error) {
        console.error('Error loading data:', error);
        throw new Error("Failed to load data");
    }
};
