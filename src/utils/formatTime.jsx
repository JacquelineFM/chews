import { format } from "date-fns";

// ----------------------------------------------------------------------

/**
 * It takes a date in the format of "2019-01-01T00:00:00.000Z" and returns a date in the format of "01
 * January 2019, 12:00 am"
 */
export const fDateTimeSuffix = (date) =>
  format(new Date(date), "DD MMMM YYYY, HH:MM a");
