export interface PostProps {
  slug: string;
  title: string;
  date: string;
  computerDate: string;
  excerpt: string;
  tags: Array<string>;
  body: string;
}

export interface PostQuery {
  node: PostProps;
}
