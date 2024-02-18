import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { UserType } from "../utils/constants";
import { useEffect, useState } from "react";

const Profile = () => {
  const user = useSelector((state: { user: UserType }) => state.user);

  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    user.imgUrl &&
      import(`../assets/${user.imgUrl}`).then((src) =>
        setImageSrc(src.default)
      );
  }, [user.imgUrl]);

  return (
    <Box display={"grid"} py={2}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: 500, fontSize: "25px" }}
      >
        Profile
      </Typography>

      <Card
        sx={{
          background: `linear-gradient(
                    49deg,
                    rgba(232, 232, 232, 1) 40%,
                    rgba(228, 208, 189, 1) 54%,
                    rgba(227, 204, 181, 1) 65%,
                    rgba(161, 173, 181, 1) 81%,
                    rgba(150, 168, 181, 1) 87%,
                    rgba(153, 173, 189, 1) 90%,
                    rgba(169, 200, 231, 1) 100%,
                    rgba(0, 0, 0, 1) 100%
                  )`,
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="center">
            <IconButton
              sx={{
                p: 1,
                backgroundColor: "#474747",
                ":hover": { backgroundColor: "#0e0e0e" },
                color: "#fff",
              }}
            >
              {imageSrc ? (
                <Avatar
                  src={imageSrc}
                  alt={`${user?.name}`}
                  sx={{ height: "3em", width: "3em" }}
                />
              ) : (
                <PersonIcon sx={{ height: "2em", width: "2em" }} />
              )}
            </IconButton>
          </Box>

          <Box
            display="flex"
            justifyContent="space-around"
            p={5}
            border="1px #d6d6d6 solid"
            borderRadius="30px"
            mt={2}
            bgcolor={"#fff"}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  p: 2,
                  color: "#313131",
                }}
              >
                Name
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "13px",
                    pt: 2,
                  }}
                >
                  {user.name}
                </Typography>
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  p: 2,
                  color: "#313131",
                }}
              >
                Role
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "13px",
                    pt: 2,
                  }}
                >
                  {user.role || "None"}
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  p: 2,
                  color: "#313131",
                }}
              >
                Email
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "13px",
                    pt: 2,
                  }}
                >
                  {user.email}
                </Typography>
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  p: 2,
                  color: "#313131",
                }}
              >
                Mobile
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "13px",
                    pt: 2,
                  }}
                >
                  {user.mobile}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
