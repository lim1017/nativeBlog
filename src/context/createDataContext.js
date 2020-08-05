import React, { useReducer } from "react";

export default (reducer, actions, initalState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState);

    // actions === {addBlog, editBlog etc}
    const boundActions = {};
    for (let key in actions){
      console.log(key,'key')
      console.log(actions, 'action')
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider }
};
