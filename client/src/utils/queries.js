import { gql } from '@apollo/client';

export let GET_ME = gql`
{
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
}`;
