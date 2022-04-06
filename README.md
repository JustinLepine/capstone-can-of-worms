# Can of Worms

This is my react Capstone project for BrainStation a fishing guide to help new fishermen learn basic essentials to help fish efficiently. In this app users will be able to manage their fishing lures by type and keep track of which lures are in their tackle box. The Can of Worms app was created using React, React-Router, Sass and the Framer-Motion library. Phase one now complete here is a preview of what this app has to offer.

# Installation

Complete the following steps to get the app running on your local computer.

## Frontend

1. Make sure you have a code editor on your computer.

2. Download or clone this repository.

3. Install the dependencies by running `npm install` in the file directory

    ```bash
    $ cd capstone-can-of-worms
    $ npm install
    ```

## Backend

1. Go to https://github.com/JustinLepine/capstone-can-of-worms-api and clone or download the repository

2. Make sure you have node, npm and SQL on your computer and create a new database called `inventory`.

3. Install server dependencies:  
   
   Run `npm install` from inside the server directory.
   ```bash    
   $ cd server
   $ npm install
   ```
4. Run migrations
   ```bash
   $ npm run migrate
   ```

## Start the App

Run `npm start` on the server first then the same command on the client side.