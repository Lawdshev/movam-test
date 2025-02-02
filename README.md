### Frontend Technical Assessment - Documentation

#### Technology Stack

This task was implemented using **React.js** and **Tailwind CSS**.

#### Authentication and Validation

- User authentication is implemented by fetching data from `https://reqres.in/api/users` to verify if the user exists.
- After successful login, additional validation is performed to ensure that the user ID corresponds to the data from `https://reqres.in/api/users/:id`.
- If validation fails, the user is shown an alert indicating an **invalid session** and is automatically logged out.

#### Error Handling

- Proper error messages are displayed for invalid login attempts.
- If the user session becomes invalid, they are redirected to the login page with an appropriate notification.

#### Responsiveness

- The application is designed to be fully responsive, ensuring usability across various screen sizes, including mobile and desktop views.

#### Deployment

- The completed application has been hosted on vercel at [https://movam-test.vercel.app/](https://movam-test.vercel.app/).

