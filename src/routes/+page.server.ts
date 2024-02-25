import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async () => {
  const response = await prisma.team.findMany();

    return {
      teams: response
    }
  }) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get('teamName');

    console.log(request.headers.get('host'));

    return { success: true };
  },
} satisfies Actions;
