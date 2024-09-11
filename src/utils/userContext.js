import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Hello guest, please login",
});

export default userContext;
