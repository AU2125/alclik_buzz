import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response  = await prisma.team.findMany();
  return {
    teams: response
  }
}) satisfies PageServerLoad;
