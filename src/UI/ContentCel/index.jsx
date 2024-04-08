import TextFieldStyledComponent from "../TextField";
import { ListItemText } from "@mui/material";

export default function ContentCelItem({ item, isEditing, onUpdate }) {
  function handleChangeInputData(event) {
    const editedFieldData = event.target?.value;
    // setEditedItem((prevItem) => ({
    //   ...prevItem,
    //   [fieldKey]: editedFieldData,
    // }));
    onUpdate(editedFieldData);
    console.log(editedFieldData);
  }

  return (
    <ListItemText
      primary={
        isEditing ? (
          <TextFieldStyledComponent
            inputProps={{
              style: {
                padding: "0px",
                color: "#004e59",
                fontWeight: 200,
                width: "100%",
                display: "flex",
              },
            }}
            onChange={handleChangeInputData}
            defaultValue={item}
          />
        ) : (
          item
        )
      }
      primaryTypographyProps={{
        variant: "h8",
        color: "#004e59",
        fontWeight: 200,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: item === "status" ? "center" : "flex-start",
      }}
    />
  );
}
