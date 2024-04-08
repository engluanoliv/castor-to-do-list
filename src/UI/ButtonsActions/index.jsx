import { CheckBox, Close, Delete, Edit, Save } from "@mui/icons-material";

export const SaveButton = ({ onSaveHandler, ...props }) => {
  return (
    <Save
      sx={{
        padding: 0,
        maxWidth: "20px",
        margin: "0 5px",
        color: "#004e59",
        ":hover": { cursor: "pointer", color: "#363636" },
      }}
      onClick={onSaveHandler}
      {...props}
    />
  );
};

export const CloseButton = ({ onCloseHandler, ...props }) => {
  return (
    <Close
      sx={{
        padding: 0,
        maxWidth: "20px",
        margin: "0 5px",
        color: "#004e59",
        ":hover": { cursor: "pointer", color: "#d66a6a" },
      }}
      onClick={onCloseHandler}
      {...props}
    />
  );
};

export const EditButton = ({ onEditHandler, ...props }) => {
  return (
    <Edit
      sx={{
        padding: 0,
        maxWidth: "20px",
        margin: "0 5px",
        color: "#004e59",
        ":hover": { cursor: "pointer", color: "#1a0059" },
      }}
      onClick={onEditHandler}
      {...props}
    />
  );
};

export const DeleteButton = ({ onDeleteHandler, ...props }) => {
  return (
    <Delete
      sx={{
        padding: 0,
        maxWidth: "20px",
        margin: "0 5px",
        color: "#004e59",
        ":hover": { cursor: "pointer", color: "#d32f2f" },
      }}
      onClick={onDeleteHandler}
      {...props}
    />
  );
};

export const CheckBoxButton = ({ onCheckboxHandler, ...props }) => {
  return (
    <CheckBox
      sx={{
        padding: 0,
        maxWidth: "20px",
        margin: "0 5px",
        color: "#004e59",
        ":hover": { cursor: "pointer", color: "#009607" },
      }}
      onClick={onCheckboxHandler}
      {...props}
    />
  );
};
