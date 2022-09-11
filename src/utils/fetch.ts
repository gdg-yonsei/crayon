import site from 'data/configs/site.json';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * Server-side fetch
 */

const API_DOMAIN = `http://localhost:${site.port}/api`;

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

export const local = async (filePath: string): Promise<string> => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const endpoint = dataDirectory + filePath;

  const content = await fs.readFile(endpoint, 'utf8');

  return content;
};
