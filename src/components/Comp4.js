import React from "react";
import { UserConsumer } from "../context/userContext";

const Comp4 = () => {
  return (
    <div>
      <UserConsumer>
        {(user) => {
          return (
            <div>
              <h1>User: {user.name}</h1>
              <h1>Age: {user.age}</h1>
            </div>
          );
        }}
      </UserConsumer>
    </div>
  );
};

export default Comp4;
