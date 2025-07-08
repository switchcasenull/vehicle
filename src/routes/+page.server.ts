import { db } from '$lib/db/prisma';

export const load = async () => {
	const users = await db.user.findMany({});

	return {
		users
	};
};
