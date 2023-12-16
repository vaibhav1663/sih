# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#All routes in server folder
structure index.js->routes->controllers
pre defined schemas are present in model folder
/books
/getBooks gives all the details related to books in the database
/addPublicReview (POST)
expected request : \_id is the book id for which the review is to be written
{
"\_id":"657ce2dd8a6b0ab4e0d8331d",
"user_id":"263636",
"content":3.5,
"overall":3.5,
"appearance":5,
"comment":"hello world"
}

/author
/addRecommendation (POST) add the recommendation form
expected request body
{ recomendedBy (author \_id), name, desc, imageLink, buyLink, previewLink }
/getBooks gets all the books in the recommended DB
/getAuthorBooks (POST) (to be developed) to get personalised data regarding status of uploaded books

/reviewer
/getBooks (POST) input { id } returns the books to be reviewed (can be optimised further)
/addResponse
{
"\_id": (book id)
"657cf00bd9bdf80e31f4a575",
(user id of reviewer)
"reviewerid":"657c65973b9829e08742db3d",
"H": [
true,
true,
true
],
"A": [8, 5, 3, 10, 15],
"B": 20,
"C": [3, 2, 1, 3],
"D": [5, 5, 10, 5, 5, 5, 10, 10, 10, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
"E": [5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
"G": [10, 5, 5, 3]

}

/user
/login
/signup

/admin
/allocate allocates reviewers and puts books into the platform
{
"\_id":"657b359e2873a44162fa3260",
"name":"Sample Book trial",
"desc":"A brief description of the sample book",
"imageLink":"https://example.com/sample-image.jpg",
"buyLink":"https://example.com/buy-sample-book",
"previewLink":"https://example.com/preview-sample-book",
"reviewer1":"657b3fc02873a44162fa3263",
"reviewer2":"657b3fc02873a44162fa3265",
"reviewer3":"657c65973b9829e08742db3d",
"underReview":true
}

/publish for final score calculation
{
"\_id":"657ce2dd8a6b0ab4e0d8331d"
}
/getReviewers gets all the available users
/getRecommendations gets all the recommended books
