import { API_DOMAIN } from '@data/constants';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Server-side fetch
 */

export const get = async <T>(
  url: string,
  query?: Record<string, string>,
): Promise<T> => {
  const params = new URLSearchParams(query).toString();
  const endpoint = API_DOMAIN + url + (query ? `?${params}` : '');

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const statusCode = response.status;
    const statusText = response.statusText;
    const errorMessage = await response.text();

    throw new Error(`${statusText} (${statusCode})\n${errorMessage}`);
  }

  return response.json();
};

export const local = async (
  filePath: string,
  encoding?: BufferEncoding,
): Promise<string | Buffer> => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const endpoint = dataDirectory + filePath;

  const content = await fs.readFile(endpoint, encoding);

  return content;
};
