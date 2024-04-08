import { useContext, useRef } from "react";
import { ToDosContext } from "../../store/to-do-context";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/base";
import { Timestamp } from "firebase/firestore";

export default function NewItem() {
  const todoCtx = useContext(ToDosContext);
  const toDoTitleRef = useRef();
  const toDoDescriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const title = toDoTitleRef.current?.value;
    const description = toDoDescriptionRef.current?.value;

    if (!title.trim() || !description.trim()) {
      alert("Complete all inputs");
      return;
    }

    const toDoItemData = {
      title,
      description,
      status: "Pending",
      creation_date: Timestamp.now(),
    };
    todoCtx.addToDo(toDoItemData);

    toDoTitleRef.current.value = "";
    toDoDescriptionRef.current.value = "";
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "flex-start",
          padding: "30px 10px",
        }}
      >
        <TextField
          label="Title"
          inputRef={toDoTitleRef}
          size="small"
          sx={{ paddingRight: "10px" }}
        />
        <TextField
          label="Description"
          inputRef={toDoDescriptionRef}
          size="small"
          sx={{ margin: "0px 20px", width: "400px" }}
        />
        <Button onClick={submitHandler} variant="contained" type="submit">
          Add
        </Button>
      </Box>
    </>
  );
}
