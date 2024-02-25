import prisma from '$lib/prisma';

import type { Actions } from './$types';

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();

    const teamName = cookies.get('teamName')
    const answer = formData.get('answer');
    console.log(teamName);
    console.log(answer);

    await prisma.response.create({
      data: {
        tid: teamName || '',
        qid: 0,
      }
    });
    console.log(request.headers.get('host'));

    return { success: true };
  },
} satisfies Actions;
