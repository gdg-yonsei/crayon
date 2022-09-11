import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = string | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  try {
    const content = await local(`/data/posts/_about/content.md`);

    res.status(200).json(content);
  } catch {
    res.status(404).json({ message: 'Post not found' });
  }
}
