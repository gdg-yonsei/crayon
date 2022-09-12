import { PostWithContent } from '@interfaces/post';
import { local } from '@utils/fetch';
import { parsePost } from '@utils/parser';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * 특정 Post를 가져옵니다.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query as Record<string, string>;

  try {
    const rawPost = await local(`/posts/${id}/content.md`, 'utf8');
    const post: PostWithContent = { id, ...parsePost(rawPost as string) };

    res.status(200).json(post);
  } catch (error) {
    res.status(404).send(error);
  }
}
