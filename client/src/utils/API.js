export const getMe = (token) => {
    return fetch('/api/users/me', {
       headers: {
         'Content-Type': 'application/json',
         aut: `Bearer ${token}$`,
       }
        });
   };

export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',

export const loginUser = 

export const saveBook = (bookData, token)

export const deleteBook = (bookId, token)


export const searchGoogleBooks = (query)