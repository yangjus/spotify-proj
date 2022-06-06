# Musely

<details open>
<summary>Table of Contents</summary>
  <ol>
    <li>Project Description</li>
    <li>Technologies Used</li>
    <li>Getting Started</li>
    <li>Contact</li>
    <li>Acknowledgments</li>
  </ol>
</details>
  

## Project Description
The Spotify application does an amazing job of intuitively connecting users to artists across the globe. Building on this structure, our team has developed Musely, an experience that doesn’t just connect people to music but brings music enthusiasts to each other. Utilizing the Spotify API, user Spotify data such as liked songs and artists are used to then build global profiles where each person can then hop onto forums to discuss with those that share similar interests in music. Some features include:
- Top Liked Songs
- Most Listened to Artists
- Forum Page
- Home Page

## Technologies Used
This section lists all of our frameworks, libraries, and tools used.
- JavaScript
- React.js
- HTML
- CSS
- Firebase
- Material UI
- Express
- Git

## Getting Started
Firstly, go to the both the `backend` and `frontend` folders and install the required npm packages by running the following command in each directory:
`npm install`

Next, create a Google Firebase project, follow the instructions for setting up a web app and Firebase, and paste the given account JSON in the file `permissions.json` inside the `backend` folder. You will have to add permissions.json in your .gitignore file if you do not want to publish your account JSON in public.

**Note:** This file does not exist in the repository, so you will have to create it yourself.
**Note:** Change “project-id” to “projectId” in permissions.json.

Finally, start both the `backend` and `frontend` servers in development mode. This can be done by navigating to the  `backend` and `frontend` folders in the terminal and running the `npm start` command in both. When making changes to the `backend` folder during testing, control+C and `npm start` the `backend` folder again to run updated changes.

## License
Distributed under the GNU General Public License v3.0.

## Contact
<ul>
  <li>Justin Yang - @yangjus@umich.edu</li>
  <li>Glendon Chin - @gjc2df@virginia.edu</li>
  <li>Edward Chen - @ec7nm@virginia.edu</li> 
  <li>Julian Donald - @juliand@email.virginia.edu</li> 
</ul>
Project Link: https://github.com/yangjus/spotify-proj

## Acknowledgments
Here are resources that were important in the development of our project:
- [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [Spotify API Docs](https://developer.spotify.com/documentation/)
- [MUI Docs](https://mui.com/)
- [Color Hex Docs](https://www.computerhope.com/)
- [Firebase Docs](https://firebase.google.com/docs)
- [Git Docs](https://docs.github.com/en)
