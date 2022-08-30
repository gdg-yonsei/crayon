import { PostWithContent } from '@interfaces/post';
import { local } from '@utils/fetch';
import posts from 'data/configs/post.json';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = PostWithContent | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const { id } = req.query;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  try {
    const content = await local(`/data/posts/${post.id}/content.md`);

    res.status(200).json({ ...post, content });
  } catch {
    res.status(404).json({ message: 'Post not found' });
  }
}
