import posts from 'data/configs/post.json';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = string[];

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  const categories = [...new Set(posts.map((post) => post.category))];

  res.status(200).json(categories);
}
