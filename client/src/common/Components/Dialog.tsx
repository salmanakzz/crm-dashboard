import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Typography } from "@mui/material";
import { UserType } from "../../utils/constants";
import { addUser, deleteUser, editUser } from "../../services/services";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface CustomizedDialogsProps {
  title: string;
  action: "Add" | "Edit" | "Delete";
  currentUser?: UserType;
  setCurrentUserIndex?: React.Dispatch<React.SetStateAction<number>>;
  handleCurrentUser?: (action: string, user?: UserType) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultProduct = {
  name: "",
  age: "",
  mobile: "",
  role: "",
};

export default function CustomizedDialogs({
  title,
  action,
  currentUser,
  setCurrentUserIndex,
  handleCurrentUser,
  open,
  setOpen,
}: CustomizedDialogsProps) {
  const [user, setUser] = React.useState<UserType>();
  React.useEffect(() => {
    setUser(currentUser ? currentUser : defaultProduct);
  }, [currentUser]);

  const handleClose = () => {
    setOpen(false);

    setUser(currentUser ? currentUser : defaultProduct);
    setCurrentUserIndex && setCurrentUserIndex(-1);
  };

  const handleSaveProduct = async () => {
    let promise;
    if (user && action) {
      switch (action) {
        case "Add":
          promise = addUser;
          break;
        case "Edit":
          user._id = currentUser?._id;
          promise = editUser;
          break;
        case "Delete":
          user._id = currentUser?._id;
          promise = deleteUser;
          break;

        default:
          break;
      }
      if (promise) {
        try {
          const data = await promise(user);

          handleClose();

          if (handleCurrentUser) {
            if (action === "Delete") {
              handleCurrentUser(action);
            } else {
              if (data._id) {
                user._id = data._id;
              }
              handleCurrentUser(action, user);
            }
          }
        } catch (error) {
          console.error(error);
          alert("Error!");
        }
      }
    }
  };

  return (
    <React.Fragment>
      {user && (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            {action !== "Delete" ? (
              <>
                <TextField
                  required
                  fullWidth
                  id="filled-required"
                  label="Name"
                  defaultValue={user.name}
                  variant="filled"
                  InputLabelProps={{
                    style: { color: "#0e0e0e" },
                  }}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      name: e.target.value,
                    });
                  }}
                />
                <TextField
                  id="filled-multiline-static"
                  label="Age"
                  multiline
                  fullWidth
                  required
                  rows={4}
                  defaultValue={user.age}
                  variant="filled"
                  sx={{ mt: 1 }}
                  InputLabelProps={{
                    style: { color: "#0e0e0e" },
                  }}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      age: e.target.value,
                    });
                  }}
                />
                <TextField
                  required
                  fullWidth
                  id="filled-required"
                  label="Mobile"
                  defaultValue={user.mobile}
                  variant="filled"
                  InputLabelProps={{
                    style: { color: "#0e0e0e" },
                  }}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      mobile: e.target.value,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <Typography
                  gutterBottom
                  variant="caption"
                  component="p"
                  sx={{ fontWeight: 400, fontSize: "15px" }}
                >
                  Are you sure?, You can't able to revert!
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleSaveProduct}
              sx={{ color: action === "Delete" ? "#f54545" : "#0e0e0e" }}
            >
              {action === "Add" ? "Add" : action === "Edit" ? "Save" : "Delete"}
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )}
    </React.Fragment>
  );
}
