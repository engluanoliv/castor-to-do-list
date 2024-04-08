import { Link } from "react-router-dom";
import { login } from "../../firebase/firebase";
import { useRef } from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Box,
  Grid,
  Avatar,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  CssBaseline,
  FormControlLabel,
} from "@mui/material";

export default function SignInPage() {
  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: emailLoginRef.current.value,
      password: passwordLoginRef.current.value,
    };
    const loggedIn = await login(userData);
    console.log(loggedIn);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailLoginRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordLoginRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup">Don&apos;t have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
