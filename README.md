# Sportsee app (OpenClassrooms project)

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDguNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDE0OC41IDM1Ij48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjguNiIgaGVpZ2h0PSIzNSIgZmlsbD0iIzMxQzRGMyIvPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjY2LjYiIHk9IjAiIHdpZHRoPSI4MS44OTk5OTk5OTk5OTk5OSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzM4OUFENSIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xNS42OSAyMkwxNC4yMiAyMkwxNC4yMiAxMy40N0wxNi4xNCAxMy40N0wxOC42MCAyMC4wMUwyMS4wNiAxMy40N0wyMi45NyAxMy40N0wyMi45NyAyMkwyMS40OSAyMkwyMS40OSAxOS4xOUwyMS42NCAxNS40M0wxOS4xMiAyMkwxOC4wNiAyMkwxNS41NSAxNS40M0wxNS42OSAxOS4xOUwxNS42OSAyMlpNMjguNDkgMjJMMjYuOTUgMjJMMzAuMTcgMTMuNDdMMzEuNTAgMTMuNDdMMzQuNzMgMjJMMzMuMTggMjJMMzIuNDkgMjAuMDFMMjkuMTggMjAuMDFMMjguNDkgMjJaTTMwLjgzIDE1LjI4TDI5LjYwIDE4LjgyTDMyLjA3IDE4LjgyTDMwLjgzIDE1LjI4Wk00MC4xNyAyMkwzOC42OSAyMkwzOC42OSAxMy40N0w0MC4xNyAxMy40N0w0MC4xNyAxNy40N0w0MC45OSAxNi40Nkw0My40OCAxMy40N0w0NS4yOCAxMy40N0w0Mi4xMSAxNy4yNUw0NS40NiAyMkw0My43MCAyMkw0MS4xNCAxOC4zMUw0MC4xNyAxOS4zNEw0MC4xNyAyMlpNNTQuODIgMjJMNDkuMjQgMjJMNDkuMjQgMTMuNDdMNTQuNzggMTMuNDdMNTQuNzggMTQuNjZMNTAuNzIgMTQuNjZMNTAuNzIgMTcuMDJMNTQuMjMgMTcuMDJMNTQuMjMgMTguMTlMNTAuNzIgMTguMTlMNTAuNzIgMjAuODJMNTQuODIgMjAuODJMNTQuODIgMjJaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTgzLjE3IDIyTDgwLjc5IDIyTDgwLjc5IDEzLjYwTDg0LjYzIDEzLjYwUTg1Ljc3IDEzLjYwIDg2LjYxIDEzLjk4UTg3LjQ1IDE0LjM1IDg3LjkxIDE1LjA2UTg4LjM2IDE1Ljc2IDg4LjM2IDE2LjcxTDg4LjM2IDE2LjcxUTg4LjM2IDE3LjYyIDg3Ljk0IDE4LjMwUTg3LjUxIDE4Ljk4IDg2LjcyIDE5LjM2TDg2LjcyIDE5LjM2TDg4LjUzIDIyTDg1Ljk5IDIyTDg0LjQ2IDE5Ljc3TDgzLjE3IDE5Ljc3TDgzLjE3IDIyWk04My4xNyAxNS40N0w4My4xNyAxNy45M0w4NC40OSAxNy45M1E4NS4yMiAxNy45MyA4NS41OSAxNy42MVE4NS45NiAxNy4yOSA4NS45NiAxNi43MUw4NS45NiAxNi43MVE4NS45NiAxNi4xMiA4NS41OSAxNS43OVE4NS4yMiAxNS40NyA4NC40OSAxNS40N0w4NC40OSAxNS40N0w4My4xNyAxNS40N1pNOTkuOTAgMjJMOTMuMTUgMjJMOTMuMTUgMTMuNjBMOTkuNzQgMTMuNjBMOTkuNzQgMTUuNDRMOTUuNTEgMTUuNDRMOTUuNTEgMTYuODVMOTkuMjQgMTYuODVMOTkuMjQgMTguNjNMOTUuNTEgMTguNjNMOTUuNTEgMjAuMTdMOTkuOTAgMjAuMTdMOTkuOTAgMjJaTTEwNi4xMiAyMkwxMDMuNjkgMjJMMTA3LjQwIDEzLjYwTDEwOS43NCAxMy42MEwxMTMuNDYgMjJMMTEwLjk5IDIyTDExMC4zMyAyMC4zN0wxMDYuNzggMjAuMzdMMTA2LjEyIDIyWk0xMDguNTYgMTUuOTNMMTA3LjQ3IDE4LjYxTDEwOS42MyAxOC42MUwxMDguNTYgMTUuOTNaTTExNy4xOSAxNy44MEwxMTcuMTkgMTcuODBRMTE3LjE5IDE2LjU0IDExNy43OCAxNS41NFExMTguMzggMTQuNTUgMTE5LjQzIDEzLjk5UTEyMC40OSAxMy40MyAxMjEuODAgMTMuNDNMMTIxLjgwIDEzLjQzUTEyMi45NiAxMy40MyAxMjMuODggMTMuODRRMTI0LjgwIDE0LjI1IDEyNS40MiAxNS4wMkwxMjUuNDIgMTUuMDJMMTIzLjkxIDE2LjM5UTEyMy4wOSAxNS40MCAxMjEuOTMgMTUuNDBMMTIxLjkzIDE1LjQwUTEyMS4yNCAxNS40MCAxMjAuNzEgMTUuNzBRMTIwLjE3IDE2IDExOS44OCAxNi41NFExMTkuNTggMTcuMDkgMTE5LjU4IDE3LjgwTDExOS41OCAxNy44MFExMTkuNTggMTguNTEgMTE5Ljg4IDE5LjA1UTEyMC4xNyAxOS42MCAxMjAuNzEgMTkuOTBRMTIxLjI0IDIwLjIwIDEyMS45MyAyMC4yMEwxMjEuOTMgMjAuMjBRMTIzLjA5IDIwLjIwIDEyMy45MSAxOS4yMkwxMjMuOTEgMTkuMjJMMTI1LjQyIDIwLjU4UTEyNC44MSAyMS4zNSAxMjMuODggMjEuNzZRMTIyLjk2IDIyLjE3IDEyMS44MCAyMi4xN0wxMjEuODAgMjIuMTdRMTIwLjQ5IDIyLjE3IDExOS40MyAyMS42MVExMTguMzggMjEuMDUgMTE3Ljc4IDIwLjA1UTExNy4xOSAxOS4wNiAxMTcuMTkgMTcuODBaTTEzMS43NSAxNS40OEwxMjkuMTYgMTUuNDhMMTI5LjE2IDEzLjYwTDEzNi42OSAxMy42MEwxMzYuNjkgMTUuNDhMMTM0LjEyIDE1LjQ4TDEzNC4xMiAyMkwxMzEuNzUgMjJMMTMxLjc1IDE1LjQ4WiIgZmlsbD0iI0ZGRkZGRiIgeD0iNzkuNiIvPjwvc3ZnPg==)](https://forthebadge.com)

# Prerequisites

Node - v20.0.0\
NPM - v9.6.4 or YARN\
git - v2.40.0

# Backend

## Install

For install backend you need to follow the steps in this repository :\
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Use

First you need to change in app/index.js, `const port = 3000` to `const port = 3001`\
For use backend you need to run :\
`npm run dev`\
And you can use postman for test many endpoints with two users :\
-http://localhost:3001/user/12 \
-http://localhost:3001/user/18 

# Frontend

## Install

For install frontend, you can clone this repository with this command :\
git clone https://github.com/thomasop/sportsee.git

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Backend and frontend

## Use

-For use Frontend with Backend, Backend need to be start with :\
`npm run dev`\
-You can change in .env file in Frontend the source data (mock or api)\
-Frontend need to be start with :\
`npm run start`\
-You can open browser on :\
http://localhost:3000

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).