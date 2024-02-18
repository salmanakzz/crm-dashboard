import {
  Alert,
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { getAllUsers } from "../services/services";
import { useEffect, useState } from "react";
import { UserType } from "../utils/constants";
import CustomizedDialogs from "../common/Components/Dialog";

const CreateRoles = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [currentUserId, setUurrentUserId] = useState<number>(-1);
  const [showRoleModal, setShowDRoleModal] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const { data } = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    if (e.target.value) {
      setUurrentUserId(e.target.value);
      setShowDRoleModal(true);
    }
  };

  const [showToast, setShowToast] = useState(false);

  const handleCloseToast = (
    _?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowToast(false);
  };

  const handleCurrentUser = (_: string, user?: UserType) => {
    if (user?.role) {
      setShowToast(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box display={"grid"} py={2}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: 500, fontSize: "25px" }}
      >
        Create Role
      </Typography>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            pl={1}
            fontWeight={500}
            component="div"
          >
            Select a user
          </Typography>
          <FormControl variant="filled" sx={{ m: 1, pr: 2, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-filled-label">Users</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={currentUserId !== -1 ? currentUserId : ""}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users.map((user, index) => (
                <MenuItem key={user._id} value={index}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      {currentUserId >= 0 && (
        <CustomizedDialogs
          open={showRoleModal}
          setOpen={setShowDRoleModal}
          title={"Add Role"}
          action={"Role"}
          currentUser={users[currentUserId]}
          handleCurrentUser={handleCurrentUser}
          setCurrentUserIndex={setUurrentUserId}
        />
      )}
      <Snackbar
        open={showToast}
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
          {`Role Added Successfully!`}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateRoles;
