import React from "react";
// import RenderPropsPattern from "./components/RenderPropsPattern";
import Comp1 from "./components/Comp1";
import { UserProvider } from "./context/userContext";
// import ChildComp from "./components/ChildComp";
// import ErrorBoundery from "./components/ErrorBoundery";
// import ClickCounter from "./components/ClickCounter";
// import HoverCount from "./components/HoverCount";

const App = () => {
  const user = {
    name: "Sami",
    birthYear: 2003,
  };

  return (
    <div>
      {/* <ErrorBoundery>
        <ChildComp firstName="Luffy" age="20" />
      </ErrorBoundery>
      <ErrorBoundery>
        <ChildComp firstName="Zoro" age="21" />
      </ErrorBoundery>
      <ErrorBoundery>
        <ChildComp firstName="Sanji" age="21" />
      </ErrorBoundery>
      <ErrorBoundery>
        <ChildComp age="21" />
      </ErrorBoundery> */}

      {/* <ClickCounter />
      <HoverCount /> */}

      {/* <RenderPropsPattern
        render={(isLogedIn) => (isLogedIn ? "Sami" : "Visitor")}
      /> */}

      <UserProvider value={user}>
        <Comp1 />
      </UserProvider>
    </div>
  );
};

export default App;
