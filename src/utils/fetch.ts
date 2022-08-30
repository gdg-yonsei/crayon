import { promises as fs } from 'fs';
import path from 'path';

const apiDomain = 'http://localhost:3000/api';

export const get = async <T>(
  url: string,
  query?: Record<string, string>,
): Promise<T> => {
  const params = new URLSearchParams(query).toString();

  const response = await fetch(apiDomain + url + params, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};

export const post = async <T>(
  url: string,
  body: Record<string, string>,
): Promise<T> => {
  const response = await fetch(apiDomain + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return response.json();
};

export const local = async (location: string) => {
  const directory = path.join(process.cwd());
  const content = await fs.readFile(directory + `/${location}`, 'utf8');

  return content;
};
