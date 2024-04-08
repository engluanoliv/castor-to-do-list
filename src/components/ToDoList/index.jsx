import { useContext, useEffect } from "react";
import { ToDosContext } from "../../store/to-do-context";
import { List } from "@mui/material";
import ToDoItem from "../ToDoItem";
// import { onSnapshot } from "firebase/firestore";

export default function ToDoList() {
  const todoCtx = useContext(ToDosContext);
  useEffect(() => {
    todoCtx.fetchToDoItems();
    // const unsubscribe = onSnapshot(toDosItemsQuery, (querySnapshot) => {
    //   const data = querySnapshot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data()
    //     };
    //   });
    // });
    // return unsubscribe;
  }, []);

  const toDoItems = todoCtx.items;
  return (
    <>
      <List
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        {toDoItems.map((toDoItem) => (
          <ToDoItem key={toDoItem.id} item={toDoItem} />
        ))}
      </List>
    </>
  );
}
