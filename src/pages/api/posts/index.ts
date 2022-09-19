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
    const rawPostList = await local('/configs/_post.json', 'utf8');
    let postList: Post[] = JSON.parse(rawPostList as string);

    postList = postList.sort((prev, next) => {
      return new Date(next.date).getTime() - new Date(prev.date).getTime();
    });

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
