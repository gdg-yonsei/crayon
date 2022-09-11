import { Post } from '@interfaces/post';
import posts from 'data/configs/post.json';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = Post[];

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  res.status(200).json(posts);
}
