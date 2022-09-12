export interface Post {
  id: string;
  title: string;
  date: string;
  category?: string;
  tags?: string[];
}

export interface PostWithContent extends Post {
  content: string;
}

export type PostMetadata = Omit<Post, 'id'>;
