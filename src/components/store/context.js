import React from "react";

const initialState = {
  selectedTab: 1,
  visibleTab: 1
};

const reducer = (state, action) => {
  switch (action.type) {
    case "selectTab":
      return {
        ...state,
        selectedTab: action.selectedTab
      };
    case "showTab":
      return {
        ...state,
        visibleTab: action.visibleTab
      };
    default:
      return state;
  }
};

const TabContext = React.createContext(undefined);

export const TabProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabReducer = () => {
  const context = React.useContext(TabContext);
  if (context === undefined) {
    throw new Error("you have to wrap you component with TabProvider");
  }
  return context;
};
