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
      method: 'POST'

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST'

export const saveBook = (bookData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,

export const deleteBook = (bookId, token)=>  {
    return fetch(`/api/users/books/${bookId}` {
      method: 'DELETE'


export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
