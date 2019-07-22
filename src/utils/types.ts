export interface PostProps {
  path: string;
  title: string;
  date: string;
  computerDate: string;
  excerpt: string;
  tags?: Array<string>;
  timeToRead: number;
}

export interface PostQuery {
  node: PostProps;
}
