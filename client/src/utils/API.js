export const getMe = (token) => {
    headers: return fetch('/api/users/me', {
       headers: {  'Content-Type'
         'Content-Type': 'application/json',
         aut: `Bearer $[token]$`,
     });
   };

export const createUser =

export const loginUser = 

export const saveBook = (bookData, token)

export const deleteBook = (bookId, token)


export const searchGoogleBooks = (query)