// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, username } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      name,
      username,
    },
  });

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.',
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  });

  setCookie({ res }, '@schedule-organizer:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/', // all routes can access this cookie
  });

  // status 201 to inform 'creation'
  return res.status(201).json(user);
}
