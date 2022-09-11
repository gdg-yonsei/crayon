import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Health check
 */
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Healthy API!' });
}
