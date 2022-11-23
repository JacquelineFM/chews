// @mui
import { FormControl, Tabs, Tab } from "@mui/material";
// hooks
import useNews from "../../hooks/useNews";

// ----------------------------------------------------------------------

const CATEGORIES = [
  { value: "general", label: "# General" },
  { value: "business", label: "# Negocios" },
  { value: "entertainment", label: "# Entretenimiento" },
  { value: "health", label: "# Salud" },
  { value: "science", label: "# Ciencia" },
  { value: "sports", label: "# Deportes" },
  { value: "technology", label: "# Tecnología" },
];

// ----------------------------------------------------------------------

const Form = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <Tabs
          value={category}
          onChange={handleChangeCategory}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          {CATEGORIES.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              value={category.value}
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
