import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const items = {
  name: "Components",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
};

const Dashboard = () => {
  const itemsArray = Array.from({ length: 9 }, (_, index) => ({
    ...items,
    id: index,
  }));

  return (
    <>
      {" "}
      <Typography variant="h6" pt={2} color={"white"}>
        Dashboard
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        sx={{ overflowY: "auto" }}
        pb={3}
      >
        {itemsArray.map((item, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            py={6}
            key={index}
            maxHeight={"200px"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6" pt={2} color={"white"}>
                {item.name}
              </Typography>
              <QuestionAnswerIcon color="primary" />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontSize: "14px",
              }}
              pt={2}
              color={"white"}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
