import { Post } from '@interfaces/post';
import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * 전체 Post 목록을 가져옵니다.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category, tag } = req.query as Record<string, string>;

  try {
    const rawPostList = await local('/configs/post.json');
    let postList: Post[] = JSON.parse(rawPostList);

    if (category) {
      postList = postList.filter((post) => post.category === category);
    }

    if (tag) {
      postList = postList.filter((post) => post.tags?.includes(tag));
    }

    res.status(200).json(postList);
  } catch (error) {
    res.status(500).send(error);
  }
}
