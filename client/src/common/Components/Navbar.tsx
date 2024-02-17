import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SmsIcon from "@mui/icons-material/Sms";
import SearchIcon from "@mui/icons-material/Search";
import AdjustIcon from "@mui/icons-material/Adjust";

const Navbar = ({
  isClosing,
  mobileOpen,
  setMobileOpen,
  drawerWidth,
}: {
  isClosing: boolean;
  mobileOpen: boolean;
  drawerWidth: number;
  setMobileOpen: (val: boolean) => void;
}) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "transparent",
        boxShadow: "0",
        color: "black",
        borderBottom: "1px",
      }}
    >
      <Toolbar
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
              border: "solid #7c2929",
            }}
          >
            <PersonIcon />
          </IconButton>

          <Box px={2} pb={1} sx={{ color: "#fff" }}>
            <Typography variant="h6" component="div">
              Welcome back, John Doe!
            </Typography>
            <Typography variant="subtitle1" component="div">
              johndoe@gamail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" } }} gap="10px">
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <AdjustIcon />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <SmsIcon />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
