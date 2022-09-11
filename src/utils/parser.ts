import { Post } from '@interfaces/post';
import matter from 'gray-matter';

export const parsePost = (post: string) => {
  const { data, content } = matter(post);

  return { ...(data as Post), content };
};

export const parseContent = (content: string) => {
  const post = matter(content);

  return post.content;
};
