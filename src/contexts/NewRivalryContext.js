import React, { createContext, useState, useContext } from "react";

export const NewRivalryContext = createContext();

const NewRivalryProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [rivals, setRivals] = useState([]);
  // const [refs, setRefs] = useState([]);

  const newRivalryObject = {
    tags: tags,
    setTags: (data) => setTags(data),
    rivals: rivals,
    setRivals: (rival, index) =>
      setRivals((prevRivals) => {
        let newRivals = prevRivals;
        newRivals[index] = rival;

        return newRivals;
      }),
  };

  return (
    <NewRivalryContext.Provider value={newRivalryObject}>
      {children}
    </NewRivalryContext.Provider>
  );
};

export default NewRivalryProvider;

export const useNewRivalry = () => {
  const context = useContext(NewRivalryContext);

  if (!context) {
    throw new Error("useCamera must be used within NewRivalryProvider");
  }

  return context;
};
