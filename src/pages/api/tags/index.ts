import { Post } from '@interfaces/post';
import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * 전체 태그 목록을 가져옵니다.
 */
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const rawPostList = await local('/configs/_post.json', 'utf8');
    const postList: Post[] = JSON.parse(rawPostList as string);

    const tags: string[] = [
      ...new Set(
        postList
          .filter((post): post is Required<Post> => !!post.tags)
          .map((post) => post.tags)
          .flat(),
      ),
    ].sort();

    res.status(200).json(tags);
  } catch (error) {
    res.status(500).send(error);
  }
}
