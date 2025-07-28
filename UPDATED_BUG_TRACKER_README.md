# Bug Tracker Web App

In-house development agency tool to keep track of website issues from client feedback.

## Table of contents

- [General info](#general-info)
- [Live Site](#project-demo)
- [Technologies](#technologies)
- [Features](#features)
- [Testing & Debugging](#testing--debugging)
- [Code Examples](#code-examples)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

This bug tracker is an easy-to-use web application useful in order to capture and track public feedback concerning problems encountered on websites. It provides a way to manage bugs for any medium or small-scale team managing multiple websites. This is a unique site that also integrates data charts to better visualize team and tech stack performances.

## Project Demo

[Click to view live site](https://bug-tracker-frontend-2yef.onrender.com)

## Technologies

### Backend Development

- Node.js - version 14.17.5
- Express - version 4.18.1
- JWT - version 8.5.1
- Mongoose - version 6.3.3

### Frontend Development

- JavaScript (ES6)
- HTML5
- CSS3
- React.js - version 18.1.0
- React-DOM - version 18.1.0
- Redux-Toolkit - version 1.8.1
- Reactstrap - version 9.0.2
- Syncfusion ej2 React-Charts - version 20.2.36
- **Vite** - version 4.1 (for faster development build)

## Features

- Full stack web application utilizing MongoDB, Express.js, React, and Node.js with state management using Redux Toolkit.
- A Public Form to link into any website to provide clients with an option to report a problem they encountered.
- Authorization and authentication implemented with JWT and bcrypt.
- Frontend protected routes using custom hooks and route guards.
- Chart components built with Syncfusion.
- View and analyze bug data with visual dashboards.
- Users can sign up, submit bugs, mark them complete, and view assigned bugs.
- Admins can manage all bugs, edit/delete and assign them to users.

## Testing & Debugging

### Testing Approach

- Unit testing for backend using **Jest** and **supertest**
- Frontend unit and component testing with **Vitest** and **React Testing Library**
- Coverage includes: API endpoints, Redux slices, core utility functions, and form validations

### Steps to Run Tests

#### Backend (Express)
```bash
cd backend
pnpm install
pnpm test
```

#### Frontend (React with Vite)
```bash
cd frontend
pnpm install
pnpm run test
```

### Debugging Techniques Used

- Used `console.log`, `debug` package, and `middleware` logging (Morgan) for request tracing.
- Manual inspection of React components with React Developer Tools.
- Redux state debugging using Redux DevTools Extension.
- Used Vitest's watch mode to run instant feedback tests during development.
- Node.js uncaught error handling and use of try/catch blocks around async routes.

## Code Examples

### Node.js/Express.js

```js
export const signUp = async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  try {
    const isUser = await User.findOne({ userName });

    if (isUser) {
      return res.status(400).json({ message: "User name already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: result._id,
      userName: result.userName,
      firstName: result.firstName,
      lastName: result.lastName,
      role: result.role,
      token: generateToken(result._id),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};
```

### JavaScript/React.js

```js
export default function Dashboard() {
  const dispatch = useDispatch();
  const bugs = useSelector(selectAllBugs);
  const bugStatus = useSelector(getBugsStatus);
  const error = useSelector(getBugsError);

  let content;
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;

  if (bugStatus === "loading") {
    content = <p className="m-5 text-center"> Loading........</p>;
  } else if (bugStatus === "succeeded") {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
    content = (
      <div style={{ height: "inherit" }}>
        <Row>
          <Col className="mt-5" md="4"><DashboardItem priority="1" count={highCount.length} /></Col>
          <Col className="mt-5" md="4"><DashboardItem priority="2" count={midCount.length} /></Col>
          <Col className="mt-5" md="4"><DashboardItem priority="3" count={lowCount.length} /></Col>
        </Row>
        <Row>
          <Col className="mt-5" md="6"><Pie legendVisiblity height="full" /></Col>
          <Col className="mt-5" md="6"><LineChart /></Col>
        </Row>
        <Row><Col className="mt-5" md="12"><Bar /></Col></Row>
      </div>
    );
  } else if (bugStatus === "failed") {
    content = <p>{error}</p>;
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => bug.priority === priority && bug.complete === false);
  }

  useEffect(() => {
    if (bugStatus === "idle") {
      dispatch(fetchBugs());
    }
  }, [bugStatus, dispatch]);

  return (
    <div className="container-sm">
      <Navigation />
      {content}
    </div>
  );
}
```

## Status

The project is deployed and in use by the creator. Public may use the repo as needed.

## Inspiration

Through building other projects, problems from user feedback were communicated by word of mouth and difficult to keep track of. This app solves that problem and was also intended to improve development skills.

## Contact

Created by [Jesse Hall](https://www.linkedin.com/in/jessehall/)  
Feel free to contact me for any questions!