import { useState } from "react";
import { FormControl, Tabs, Tab } from "@mui/material";

const CATEGORIES = [
  { value: "general", label: "# General" },
  { value: "business", label: "# Business" },
  { value: "entertainment", label: "# Entertainment" },
  { value: "health", label: "# Health" },
  { value: "science", label: "# Science" },
  { value: "sports", label: "# Sports" },
  { value: "technology", label: "# Technology" },
];

const Form = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <form>
      <FormControl fullWidth>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          {CATEGORIES.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              sx={{
                flexGrow: 1,
              }}
            />
          ))}
        </Tabs>
      </FormControl>
    </form>
  );
};

export default Form;
