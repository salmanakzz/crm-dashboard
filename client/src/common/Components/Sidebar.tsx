import { Box, Drawer, Toolbar } from "@mui/material";
import SidebarItems from "./SidebarItems";
import Logo from "../../assets/logo.svg";

const drawer = (
  <div className="h-full">
    <Toolbar
      sx={{ color: "#fff", display: "flex", p: 1, justifyContent: "flex-end" }}
    >
      <img src={Logo} width={150} />
    </Toolbar>

    <SidebarItems />
  </div>
);

const Sidebar = ({
  drawerWidth,
  mobileOpen,
  window,
  handleDrawerTransitionEnd,
  handleDrawerClose,
}: {
  drawerWidth: number;
  mobileOpen: boolean;
  window?: () => Window;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}) => {
  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#0e0e0e",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#0e0e0e",
            color: "#fff",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
