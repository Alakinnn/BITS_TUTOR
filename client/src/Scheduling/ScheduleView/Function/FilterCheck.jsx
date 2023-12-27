export const handleCheck = ({ event, setFilterCriteria }) => {
  if (!event.target.checked) {
    if (event.target.getAttribute("data-label") === "upcoming") {
      setFilterCriteria((prev) =>
        prev.filter((item) => item !== "active" && item !== "inactive")
      );
      return;
    }
    setFilterCriteria((prev) =>
      prev.filter((item) => item !== event.target.getAttribute("data-label"))
    );
    return;
  }
  switch (event.target.getAttribute("data-label")) {
    case "completed":
      setFilterCriteria((prev) => [...prev, "completed"]);
      break;
    case "cancelled":
      setFilterCriteria((prev) => [...prev, "cancelled"]);
      break;
    case "upcoming":
      setFilterCriteria((prev) => [...prev, "active", "inactive"]);
      break;
    default:
      break;
  }
};
