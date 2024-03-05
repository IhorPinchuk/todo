const numberToDoText = (tasks, type) => {
  switch (type) {
    case "active":
      return `${tasks.length} active tasks`;
    case "completed":
      return `${tasks.length} completed tasks`;
    default:
      return `${tasks.length} all tasks`;
  }
};

export default numberToDoText;
