import { createContext, useState } from "react";
import {
  addNewDocument,
  fetchData,
  removeDocument,
  updateDocument,
} from "../firebase/firebase";

export const ToDosContext = createContext({
  items: [],
  addToDo: () => {},
  removeToDo: () => {},
  updateToDo: () => {},
  fetchToDoItems: () => {},
});

const ToDosContextProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);

  const addToDoHandler = async (data) => {
    try {
      const docRef = await addNewDocument(data);
      data.id = docRef.id;
      setToDos((prevToDoData) => [...prevToDoData, data]);
      return docRef;
    } catch (error) {
      console.error(error);
    }
  };
  const removeToDoHandler = async (id) => {
    console.log(id);
    const docRef = await removeDocument(id);
    setToDos((prevToDoData) =>
      prevToDoData.filter((toDoItem) => toDoItem.id !== id)
    );
    return docRef;
  };

  const updateToDoHandler = async (data) => {
    const docRef = await updateDocument(data);
    setToDos((prevToDoData) =>
      prevToDoData.map((item) =>
        item.id === data.id ? { ...item, ...data } : item
      )
    );
    return docRef;
  };

  const fetchToDoHandler = async () => {
    const toDoData = await fetchData();
    toDoData.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      status: item.status,
      creation_date: item.creation_date,
    }));

    setToDos(toDoData);
  };

  const contextValue = {
    items: toDos,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
    updateToDo: updateToDoHandler,
    fetchToDoItems: fetchToDoHandler,
  };

  return (
    <ToDosContext.Provider value={contextValue}>
      {children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
