export interface Post {
  id: number;
  title: string;
  body: string;
  userdId: number;
  tags: string[];
  active: boolean;
}
