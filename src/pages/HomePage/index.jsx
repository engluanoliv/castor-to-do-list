import NewItem from "../../components/NewItem";
import ToDoList from "../../components/ToDoList";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        backgroundColor: "#8888883d",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <NewItem />
      <ToDoList />
    </Box>
  );
}

// export async function action({ request, params }) {}
