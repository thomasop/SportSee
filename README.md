# Sportsee app (OpenClassrooms project)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](/make-react.svg)](https://forthebadge.com)

# Description 

SportSee is an application that allows the user to track the number of workout sessions completed as well as the number of calories burned. Here, we have several charts to display all of the user's data such as daily activities, average session durations, performance, and average score.\
Here, we use the [Recharts](https://recharts.org/en-US/) dependency to create the charts, which allows us to create many different styles of graphs.\
Currently, only the home page and dashboard are functional. The Profil, Réglages, and Communauté pages are currently under construction.

# Prerequisites

- Node - v20.0.0\
- NPM - v9.6.4 or YARN\
- git - v2.40.0

# Backend

## Dependencies

- `cors: ^2.8.5`\
- `express: ^4.17.1`\
- `idx: ^2.5.6`\
- `nodemon: ^2.0.4`

## Install

- For install backend you need to follow the steps in this repository :\
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Use

First you need to change in app/index.js, `const port = 3000` to `const port = 3001`\
For use backend you need to run :\
`npm run dev`\
And you can use postman for test many endpoints with two users :\
- http://localhost:3001/user/12 \
- http://localhost:3001/user/18 

# Frontend

## Dependencies

- `@testing-library/jest-dom: ^5.16.5`\
- `@testing-library/react: ^13.4.0`\
- `@testing-library/user-event: ^13.5.0`\
- `@types/jest: ^27.5.2`\
- `@types/node: ^16.18.23`\
- `@types/react: ^18.0.35`\
- `@types/react-dom: ^18.0.11`\
- `prop-types: ^15.8.1`\
- `react: ^18.2.0`\
- `react-dom: ^18.2.0`\
- `react-router-dom: ^6.10.0`\
- `react-scripts: 5.0.1`\
- `recharts: ^2.5.0`\
- `sass: ^1.62.0`\
- `typescript: ^4.9.5`\
- `web-vitals: ^2.1.4`

## Install

- For install frontend, you can clone this repository with this command :\
`git clone https://github.com/thomasop/sportsee.git`
- go to the project folder `cd sportsee`
- install the packages `npm install` or `yarn install`

## Use

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Use the app

## Use Mock data

- For use this app with Mock data, you need to put env variable in .env file : `REACT_APP_SOURCE = mock`\
- Frontend need to be start with :\
`npm run start`\
- You can open browser on :\
http://localhost:3000

## Use API data

- First you need to change in app/index.js in backend, `const port = 3000 to const port = 3001`
- For use this app with API data, Backend need to be start with :\
`npm run dev`\
- you need to put env variable in .env file : 
`REACT_APP_SOURCE = api`\
- Frontend need to be start with :\
`npm run start`\
- You can open browser on :\
http://localhost:3000

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).