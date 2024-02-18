import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SmsIcon from "@mui/icons-material/Sms";
import SearchIcon from "@mui/icons-material/Search";
import AdjustIcon from "@mui/icons-material/Adjust";
import { UserType } from "../../utils/constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
  const user = useSelector((state: { user: UserType }) => state.user);

  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    user.imgUrl &&
      import(`../../assets/${user.imgUrl}`).then((src) =>
        setImageSrc(src.default)
      );
  }, [user.imgUrl]);

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
            {imageSrc ? (
              <Avatar src={imageSrc} alt={`${user?.name}`} />
            ) : (
              <PersonIcon />
            )}
          </IconButton>

          <Box px={2} pb={1} sx={{ color: "#fff" }}>
            <Typography variant="h6" component="div">
              Welcome back, {user.name}!
            </Typography>
            <Typography variant="subtitle1" component="div">
              {user.email}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" } }} gap="15px">
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <AdjustIcon sx={{ height: ".6em", width: ".6em" }} />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <SearchIcon sx={{ height: ".6em", width: ".6em" }} />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <SmsIcon sx={{ height: ".6em", width: ".6em" }} />
          </IconButton>
          <IconButton
            sx={{
              p: 1,
              backgroundColor: "#0e0e0e",
              ":hover": { backgroundColor: "#474747" },
              color: "#fff",
            }}
          >
            <NotificationsNoneIcon sx={{ height: ".6em", width: ".6em" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
