import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider() {
  const [value, setValue] = useState([39, 1500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300, paddingX: 6 }}>
      <Slider
        getAriaLabel={() => "Percentage range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={39}
        max={1500}
        sx={{
          color: "#46a358",
          "& .MuiSlider-thumb": {
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0px 0px 0px 8px rgba(70, 163, 88, 0.16)",
            },
          },
          "& .MuiSlider-valueLabel": {
            color: "#fff",
          },
          "& .MuiSlider-track": {
            height: 4,
          },
          "& .MuiSlider-rail": {
            height: 4,
          },
        }}
      />

      <h1>Price: $39 - </h1>
    </Box>
  );
}
