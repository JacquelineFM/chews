import { format } from "date-fns";

// ----------------------------------------------------------------------

export const fDateTimeSuffix = (date) =>
  format(new Date(date), "DD MMMM YYYY, HH:MM a");
