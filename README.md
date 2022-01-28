# **BSE**: BookSearchEngine

Please visit the deployed application by clicking the following link: [**BSE**](https://booksearchengine12-app.herokuapp.com/). 
BookSearchEngine-1 (Quoolfly™: Books on Books Island Search)


Click the code box in the upper left hand corner and clone it to your own repository. Once you open it up in the editor of your choice make sure to "NPM INSTALL" to install the npm modules used for this code. Also make sure that you CD Server and CD Client and NPM INSTALL as well.

### Application

![Screen Shot](https://user-images.githubusercontent.com/83429667/149606870-da3bd890-8856-4202-b390-43fa1753a0ac.png)


### Usage

To use this app go to: https://booksearchengine12-app.herokuapp.com/

### Table of Contents

-   [Description](#description)
-   [User Story](#user-story)
-   [Acceptance Criteria](#acceptance-criteria)
-   [Questions](#questions)

## Description

BookSearchEngine (**BSE**) is a MERN-Stack app powered by Apollo Server and GraphQL on the backend. BSE features authentication utilizing _bcrypt_, _jsonwebtoken_, and _jwt-decode_ dependencies in order to feature signup, log in, and log out functionality. Once logged in, user's have the ability to use the search bar that generates one or multiple cards. Each card repesents one book, a card also neatly holds data about the book: title, author, with brief description of the book, and an image of the front book cover. On the bottom of each card, which have generate based on the user's search words, is a button that reads, "Save This, maybe?". Clicking this button will save said book to the user's book list. Then same "Save This, maybe?" button text changes to "Book Sssaved!" allowing the user to feel confident in knowing the save was Sssuper Sssuccessful. Once the user's have saved a book (or multiple books) from a single search, these user's have then started creating their very own book list. Simply clicking `Your Saved Books` which is a link at the top of the navigation bar. A new page is presented, displaying all user's saved cards. At the bottom of these cards is a button that reads, "Delete This Book!" which quickly removes the book from their list of Saved Books.

## User Story

> AS AN avid reader  
> I WANT to search for new books to read  
> SO THAT I can keep a list of books to purchase

## Acceptance Criteria

> GIVEN a book search engine  
> WHEN I load the search engine  
> THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
> WHEN I click on the Search for Books menu option  
> THEN I am presented with an input field to search for books and a submit button  
> WHEN I am not logged in and enter a search term in the input field and click the submit button  
> THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site  
> WHEN I click on the Login/Signup menu option  
> THEN a modal appears on the screen with a toggle between the option to log in or sign up
> WHEN the toggle is set to Signup  
> THEN I am presented with three inputs for a username, an email address, and a password, and a signup button  
> WHEN the toggle is set to Login  
> THEN I am presented with two inputs for an email address and a password and login button  
> WHEN I enter a valid email address and create a password and click on the signup button  
> THEN my user account is created and I am logged in to the site  
> WHEN I enter my account’s email address and password and click on the login button  
> THEN I the modal closes and I am logged in to the site  
> WHEN I am logged in to the site  
> THEN the menu options change to Search for Books, an option to see my saved books, and Logout  
> WHEN I am logged in and enter a search term in the input field and click the submit button  
> THEN I am presented with several search results, each featuring a book’s title, author, description, image and a link to that book on the Google Books site and a button to save a book to my account  
> WHEN I click on the Save button on a book  
> THEN that book’s information is saved to my account  
> WHEN I click on the option to see my saved books  
> THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account  
> WHEN I click on the Remove button on a book  
> THEN that book is deleted from my saved books list  
> WHEN I click on the Logout button  
> THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Questions?

Thank you for your interest in helping out; if you wish to help out. Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.

-   [Contact me by email](mailto:quoolfly@yahoo.com)
-   [GitHub User pablodlc](https://github.com/crtijerina)
-   [**BSE** GitHub Repo](github.com/crtijerina/BookSearchEngine)

**BSE** made with ❤️ by C.Tijerina
