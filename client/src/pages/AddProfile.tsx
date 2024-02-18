import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import { getAllUsers, upload } from "../services/services";
import { useEffect, useState } from "react";
import { UserType } from "../utils/constants";
import CustomizedDialogs from "../common/Components/Dialog";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "../store/userSlice";

const AddProfile = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [currentUserId, setUurrentUserId] = useState<number>(-1);
  const [showRoleModal, setShowDRoleModal] = useState<boolean>(false);

  const user = useSelector((state: { user: UserType }) => state.user);

  const [image, setImage] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async () => {
    console.log(user.imgUrl);

    if (image && user._id) {
      const formData = new FormData();
      formData.append("image", image);

      const response = await upload(formData, user._id);
      if (response.imgUrl) {
        dispatch(updateProfilePicture(response.imgUrl));
        setShowToast(true);
        setImage(null);
      }
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

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#fff",
      },
      primary: {
        main: "#0e0e0e",
      },
    },
  });

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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box display={"grid"} py={2}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 500, fontSize: "25px" }}
        >
          Add Profile Picture
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
              Select a picture
            </Typography>
            <Box display="grid">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleChange} />
              </Button>

              {image && (
                <Button autoFocus sx={{ pt: 4 }} onClick={handleSubmit}>
                  Save
                </Button>
              )}
            </Box>
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
            {`Picture Added Successfully!`}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default AddProfile;
