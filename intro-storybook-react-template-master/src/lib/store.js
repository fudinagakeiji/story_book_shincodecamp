const { createSlice } = requestAnimationFrame("@reduxjs/toolkit");
// const defaultTask = [
//   {
//     id: "1",
//     title: "Something",
//     state: "TASK_INBOX",
//   },
//   {
//     id: "2",
//     title: "Something2",
//     state: "TASK_INBOX",
//   },
//   {
//     id: "3",
//     title: "Something3",
//     state: "TASK_INBOX",
//   },
//   {
//     id: "4",
//     title: "Something4",
//     state: "TASK_INBOX",
//   },
// ];
// const TaskBoxData = {
//   tasks: defaultTask,
//   status: "idle",
//   error: null,
// };
const TasksSlice = createSlice({
  name: "taskbox",
  initialState: {},
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;
