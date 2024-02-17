import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@mui/icons-material/Home";
import SmsIcon from "@mui/icons-material/Sms";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AdjustIcon from "@mui/icons-material/Adjust";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

const NavItems = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          justifyContent: "space-between",
          height: "100%",
          paddingLeft: "6px !important",
        }}
      >
        <Grid>
          <ListSubheader
            sx={{
              backgroundColor: "#0e0e0e",
              color: "#fff6",
              fontSize: "10px",
            }}
            component="div"
          >
            MAIN
          </ListSubheader>
          <ListItemButton
            onClick={() => navigate("/dashboard")}
            sx={{ mb: { md: "8px", sm: "0px" } }}
          >
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Dashboard
                </Typography>
              }
            />
          </ListItemButton>
          <ListSubheader
            sx={{
              backgroundColor: "#0e0e0e",
              color: "#fff6",
              fontSize: "10px",
            }}
            component="div"
          >
            MANAGE
          </ListSubheader>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <SmsIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Inbox
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <DashboardIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Channels
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <BarChartIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Insights
                </Typography>
              }
            />
          </ListItemButton>
          <ListSubheader
            sx={{
              backgroundColor: "#0e0e0e",
              color: "#fff6",
              fontSize: "10px",
            }}
            component="div"
          >
            SETTINGS
          </ListSubheader>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <AdjustIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Create Roles
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/dashboard/user/new")}
            sx={{ mb: { md: "8px", sm: "0px" } }}
          >
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <PersonAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Create Users
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <SettingsIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Settings
                </Typography>
              }
            />
          </ListItemButton>
        </Grid>

        <Grid>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Profile
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton sx={{ mb: { md: "8px", sm: "0px" } }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ color: "#FFFFFF", fontSize: "13px" }}
                >
                  Logout
                </Typography>
              }
            />
          </ListItemButton>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default NavItems;
