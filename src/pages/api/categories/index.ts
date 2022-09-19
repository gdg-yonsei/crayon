import { Post } from '@interfaces/post';
import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * 전체 카테고리 목록을 가져옵니다.
 */
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const rawPostList = await local('/configs/_post.json', 'utf8');
    const postList: Post[] = JSON.parse(rawPostList as string);

    const categories: string[] = [
      ...new Set(
        postList
          .filter((post): post is Required<Post> => !!post.category)
          .map((post) => post.category),
      ),
    ].sort();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
}
