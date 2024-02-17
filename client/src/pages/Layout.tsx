import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {
  Divider,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "../common/Components/Navbar";
import Sidebar from "../common/Components/Sidebar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 214;

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#0e0e0e",
    },
  },
});

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;

  children: React.ReactElement;
}

export default function Layout(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          isClosing={isClosing}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          drawerWidth={drawerWidth}
        />

        <Sidebar
          drawerWidth={drawerWidth}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          mobileOpen={mobileOpen}
          window={window}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ p: { xs: 7, sm: 3 } }}>
            <Divider sx={{ borderColor: "#00000017" }} />
            {children}
            <Box position={"sticky"} zIndex={"1"}>
              <Divider sx={{ borderColor: "#00000017" }} />
              <Copyright sx={{ pt: 4 }} color="primary" />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
