import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomizedDialogs from "../common/Components/Dialog";
import { useEffect, useState } from "react";
import { UserType } from "../utils/constants";
import { getAllUsers } from "../services/services";

const AddUser = () => {
  const headers: string[] = ["Name", "Age", "Mobile", "Role", "Action"];

  const [users, setUsers] = useState<Array<UserType>>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(-1);
  const [showAddProductModal, setShowAddProductModal] =
    useState<boolean>(false);
  const [showEditProductModal, setShowEditProductModal] =
    useState<boolean>(false);
  const [showDeleteProductModal, setShowDeleteProductModal] =
    useState<boolean>(false);

  const handleClickOpen = (action: string) => {
    switch (action) {
      case "Add":
        setShowAddProductModal(true);
        break;
      case "Edit":
        setShowEditProductModal(true);
        break;
      case "Delete":
        setShowDeleteProductModal(true);
        break;

      default:
        break;
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [showToast, setShowToast] = useState({ value: false, action: "" });

  const handleCloseToast = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast({ value: false, action: "" });
  };

  const handleCurrentUser = (action: string, updatedProduct?: UserType) => {
    console.log(action, updatedProduct, currentUserIndex);

    if (updatedProduct) {
      if (currentUserIndex >= 0) {
        users[currentUserIndex] = updatedProduct;
        setCurrentUserIndex(-1);
      } else {
        users.push(updatedProduct);
      }
    } else {
      delete users[currentUserIndex];
      setCurrentUserIndex(-1);
    }
    setShowToast({ value: true, action });
  };
  return (
    <Box sx={{ p: 10, pb: 10, minHeight: "500px" }}>
      <Container maxWidth="xl">
        <Box
          alignItems={"center"}
          justifyContent={"space-between"}
          display={"flex"}
          py={2}
          sx={{ display: { xs: "grid", md: "flex" } }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 500, fontSize: "25px" }}
          >
            Add User
          </Typography>
          <Button
            onClick={() => handleClickOpen("Add")}
            variant="contained"
            sx={{
              backgroundColor: "#0e0e0e",
              ":hover": {
                backgroundColor: "#fff !important",
                color: "#0e0e0e",
              },
              color: "white",
            }}
          >
            Add User
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                {headers.map((header, idx) => (
                  <TableCell align="left" key={idx}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.name}</TableCell>
                  <TableCell align="left">{user.age}</TableCell>
                  <TableCell align="left">{user.mobile}</TableCell>
                  <TableCell align="left">{user.role || "None"}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      color="info"
                      aria-label="upload picture"
                      component="span"
                      onClick={() => {
                        setCurrentUserIndex(idx);
                        handleClickOpen("Edit");
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="upload picture"
                      component="span"
                      onClick={() => {
                        setCurrentUserIndex(idx);
                        handleClickOpen("Delete");
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomizedDialogs
          open={showAddProductModal}
          setOpen={setShowAddProductModal}
          title={"Add User"}
          action={"Add"}
          handleCurrentUser={handleCurrentUser}
        />
        {currentUserIndex >= 0 && (
          <CustomizedDialogs
            open={showEditProductModal}
            setOpen={setShowEditProductModal}
            title={"Edit Product"}
            action={"Edit"}
            currentUser={users[currentUserIndex]}
            handleCurrentUser={handleCurrentUser}
            setCurrentUserIndex={setCurrentUserIndex}
          />
        )}
        {currentUserIndex >= 0 && (
          <CustomizedDialogs
            open={showDeleteProductModal}
            setOpen={setShowDeleteProductModal}
            title={"Delete User"}
            action={"Delete"}
            currentUser={users[currentUserIndex]}
            handleCurrentUser={handleCurrentUser}
            setCurrentUserIndex={setCurrentUserIndex}
          />
        )}
      </Container>

      <Snackbar
        open={showToast.value}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {`User ${showToast.action}${
            showToast.action !== "Delete" ? "e" : ""
          }d Successfully!`}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddUser;
