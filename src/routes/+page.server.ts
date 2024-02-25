import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load = (async () => {
  const response  = await prisma.team.findMany();

  return {
    teams: response
  }
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
    try {
      const formData =await request.formData();

      console.log(formData)
    }  catch (error) {
      console.error('Error submitting form:', error);
  }
  return { success: true };
	},
} satisfies Actions;