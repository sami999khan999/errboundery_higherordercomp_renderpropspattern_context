// Error Boundery -

// Higher Order Component -

// Render props pattern -

// User context -

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Error Boundery

// // An error boundary in React is a higher-order component (HOC) that allows you to catch and handle errors that occur during rendering, in lifecycle methods, and in constructors of a React component. Error boundaries are used to prevent unhandled errors from crashing the entire application and to provide a fallback UI or error message when an error occurs within a specific component tree. //

//============================================================================================================================================//

// // more details in ./components/ChildComp.js and ./compoonents/ErrorBoundery.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Higher Order Component

// // A Higher-Order Component (HOC) is an advanced pattern in React that allows you to reuse component logic by wrapping one or more components with a higher-order component. HOCs are not components themselves; instead, they are functions that take one or more components as arguments and return a new, enhanced component. HOCs are often used for tasks like code reusability, state management, and prop manipulation. //

//============================================================================================================================================//

// // more detaild in ./utls/higherOrderComp.js and ./component/ClickComp.js and ./component/HoverComp.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Render props pattern

// // The "render props" pattern is a design pattern used in JavaScript and React to share code and functionality between components. It involves passing a function (often called a "render prop") as a prop to a component, which allows the component to render some content using the provided function. This pattern is especially useful for creating reusable and flexible components. //

//============================================================================================================================================//

// // more details in ./component/RenderPropsPattern.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // User context

// // In React, the "context" is a feature that allows you to pass data through the component tree without having to pass props manually at every level of the tree. It's primarily used for sharing data that is considered global or shared among multiple components, such as themes, user authentication, and localization settings. //

//============================================================================================================================================//

// // more details in ./context/userContext.js and ./component/Comp1-4

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
