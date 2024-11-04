// AppContext.js
import { createContext } from "react";

// Create AppContext with a default value containing an empty appDispatch function
// The appDispatch function will be replaced by the dispatch function from the App component
const AppContext = createContext({
  appDispatch: () => {
    // Default implementation to avoid errors when context is not provided
    console.warn("appDispatch is not yet provided in AppContext");
  },
});

export default AppContext;
