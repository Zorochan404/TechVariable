import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Define your custom theme or import the defaultTheme if available
const theme = createTheme();

export default function Signin() {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/authentication/signin", { uname, password });
      if (res.data) {
        console.log(res.data);
        navigate('/');
      } else {
        console.log('invalid credentials');
      }

    } catch (error) {
      console.log('error');

    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleUser} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="uname" // Use id attribute for correct labeling
              label="Username" // Use "Username" instead of "Email Address"
              name="uname"
              autoComplete="username" // Use "username" for autoComplete
              autoFocus
              value={uname} // Bind value to state
              onChange={(e) => setUname(e.target.value)} // Handle input change
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
              value={password} // Bind value to state
              onChange={(e) => setPassword(e.target.value)} // Handle input change
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
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          
          </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
