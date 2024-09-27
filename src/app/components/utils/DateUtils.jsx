import { addDays, addWeeks, addMonths, addYears } from "date-fns";
const calculateRecurring = (recurrency) => {
  let dates = [];
  let currentDate = new Date(recurrency.startDate);

  switch (recurrency.pattern) {
    case "daily":
      while (currentDate <= new Date(recurrency.endDate)) {
        dates.push(new Date(currentDate));
        currentDate = addDays(currentDate, recurrency.customization.every);
      }
      break;

    case "weekly":
      while (currentDate <= new Date(recurrency.endDate)) {
        if (
          recurrency.customization.specificDays.includes(currentDate.getDay())
        ) {
          dates.push(new Date(currentDate));
        }
        currentDate = addDays(currentDate, 1); // Increment day by day
      }
      break;

    case "monthly":
      while (currentDate <= new Date(recurrency.endDate)) {
        // Use the nthDay customization
        const dayOfWeek = recurrency.customization.nthDayOfWeek; // Get the selected day of the week
        const nthOccurrence = recurrency.customization.nthDay;

        if (dayOfWeek !== undefined && nthOccurrence) {
          let count = 0;
          const daysInMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
          ).getDate();

          for (let i = 1; i <= daysInMonth; i++) {
            const dayDate = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              i
            );
            if (dayDate.getDay() === dayOfWeek) {
              count++;
              if (count === nthOccurrence) {
                dates.push(new Date(dayDate));
                break; // Found the nth occurrence
              }
            }
          }
        }
        currentDate = addMonths(
          currentDate,
          recurrency.customization.every || 1
        );
      }
      break;

    case "yearly":
      while (currentDate <= new Date(recurrency.endDate)) {
        dates.push(new Date(currentDate)); // Just push the currentDate
        currentDate = addYears(
          currentDate,
          recurrency.customization.every || 1
        );
      }
      break;

    default:
      break;
  }

  return dates;
};

export default calculateRecurring;
