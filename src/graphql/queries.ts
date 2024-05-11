import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        body
        user {
          name
        }
      }
    }
  }
`;

export const GET_POST_DETAILS = gql`
  query GetPostDetails($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        name
      }
      comments {
        nodes {
          id
          name
          body
        }
      }
    }
  }
`;
