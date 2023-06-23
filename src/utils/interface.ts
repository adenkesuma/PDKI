export interface VideoProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  thumnailUrl: string;
  isPrivate: boolean;
  harga: number;
  publishedDate: string;
  categories: string;
  tags: string;
  view: number;
  instructor: string;
}

export interface NewsProps {
  id: number;
  title: string;
  content: string;
  description: string;
  publishedDate: string;
  image: string;
  video: string;
  tags: string;
  categories: string;
  published: boolean;
}