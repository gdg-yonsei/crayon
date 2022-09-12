import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * 로컬 이미지를 가져옵니다.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { postId, source } = req.query as Record<string, string>;

  try {
    const rawImage = await local(`/posts/${postId}/${source}`);

    res.status(200).send(rawImage);
  } catch (error) {
    res.status(404).send(error);
  }
}
