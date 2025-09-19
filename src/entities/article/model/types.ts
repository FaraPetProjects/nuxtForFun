export interface Article {
  id: string;
  slug: string;
  title: string;
  url: string;
  description?: string;
  tags: string[];
  image?: string;
  createdAt: string;
}
