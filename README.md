# AllNotes - Readable Project

This is the second project from udacity nanodegree react. The project aims to add posts and comments on shelves. Separating them by Cateogory, and organizing by 'vote' and 'timestamp'. 


# Installation

    1. git clone https://github.com/azurabeck/Udacit_MyReads
    2. cd udacity-react-myread
    3. npm install
    4. npm start
        This will open a browser with port 3000 or you can go to the localhost:3000 on your browser yourself.


## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Usage

    1. http://localhost:3000/   =>     (Propose, and sidemenu)
         This is the main page, where user can see all posts categorized by newest. User also can click on the icons button 
         to change their category. This option should change immediatily the posts from the shelf. As was determinated by the project.

    2. http://localhost:3000/   =>     (Content)
         Here we have a bunch of things to do. So I'll list trying to simplify.
         > User have a previus description of the site. He can close or open as he wish.
         > User can sort by category, clicking on logos on the dark menu. Infinity logo = "all" > React > Redux > Udacity.
         > User can sort by newest, or popularity, by selecting a option on the sort field. Top-Right;
         > A list of the post right above the field, is displayed. Where user can delete, edit, vote, or click on the title to enter os details page
         > User can add a new post by click on the plus at the bottom of the page

    3. http://localhost:3000/posts/new
         To get on this page, user should click on the "plus" button. Inside this component user will be able to add a new post, to do that, user should complete the form, including the category.     

    4. http://localhost:3000/posts/id/edit
         To get on this page, user should click on the "edit" button, on the current post. Inside this component user will be able to edit the post selected, to do that, user should change the form, and submit.

    5. http://localhost:3000/posts/id
         To get on this page, user should click on the title of the post. Inside this component user will be able to add read details from post, and comments. Also the user can add a new comments and vote for users comments.

    6. Improviments on http://localhost:3000/
         To have a cleaner code, some external library was added. As react-bootstrap, material-icons, moment, and others. You can find everthing on package.json


## Important
The backend server is from Udacity Original Project and give an initial post and comments.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
