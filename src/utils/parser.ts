import { PostMetadata } from '@interfaces/post';
import matter from 'gray-matter';

export const parsePost = (post: string) => {
  const { data, content } = matter(post);

  return { ...(data as PostMetadata), content };
};

export const parseDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const formattedDate = date.toLocaleDateString();

  return formattedDate;
};
