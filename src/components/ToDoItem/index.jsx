import { ListItem, Box } from "@mui/material";
import { useContext, useState } from "react";
import { ToDosContext } from "../../store/to-do-context";
import {
  CheckBoxButton,
  CloseButton,
  DeleteButton,
  EditButton,
  SaveButton,
} from "../../UI/ButtonsActions";
import ContentCelItem from "../../UI/ContentCel";

const order = ["title", "description", "status"];

export default function ToDoItem({ item }) {
  const todoCtx = useContext(ToDosContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);

  function handleSaveClick() {
    todoCtx.updateToDo(updatedItem);
    setIsEditing(!isEditing);
  }
  function handleDeleteClick() {
    todoCtx.removeToDo(item.id);
  }
  function handleUpdateStatus() {
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      status: "Done",
    }));
    todoCtx.updateToDo({
      ...updatedItem,
      status: "Done",
    });
  }
  function handleFieldChange(key, value) {
    // Update the `updatedItem` state with the changed field
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [key]: value,
    }));
  }

  let contentCel = Object.keys(item)
    .filter((key) => key !== "id" && key !== "creation_date")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .map((key) => (
      <ContentCelItem
        key={key}
        item={item[key]}
        isEditing={isEditing}
        onUpdate={(value) => handleFieldChange(key, value)}
      />
    ));

  return (
    <>
      <Box
        sx={{
          padding: "6px",
          margin: "10px",
          backgroundColor: `${
            item.status === "Done" ? "#71777463" : "#80b39bb0"
          }`,
          border: "1px",
          borderRadius: "8px",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {contentCel}
          {isEditing ? (
            <>
              <SaveButton onSaveHandler={handleSaveClick} />
              <CloseButton onCloseHandler={() => setIsEditing(!isEditing)} />
            </>
          ) : (
            <>
              <EditButton onEditHandler={() => setIsEditing(!isEditing)} />
              <DeleteButton onDeleteHandler={handleDeleteClick} />
              <CheckBoxButton onCheckboxHandler={handleUpdateStatus} />
            </>
          )}
        </ListItem>
      </Box>
    </>
  );
}
