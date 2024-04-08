import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const TextFieldStyled = styled(TextField)(() => ({
  "& label.Mui-focused": {
    display: "none",
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

export default function TextFieldStyledComponent(props) {
  return (
    <>
      <TextFieldStyled {...props} />
    </>
  );
}
