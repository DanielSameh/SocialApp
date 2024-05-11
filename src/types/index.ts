export interface PostItem {
  id: number;
  user: {
    name: string;
  };
  title: string;
  body: string;
}


export interface CommentItem {
  id: number;
  name: string;
  body: string;
}
