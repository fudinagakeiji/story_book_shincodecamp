import React from "react";

import Task from "./Task";
// 親コンポーネント
export default {
  component: Task,
  title: "Task",
};

// const Template = args => <Task {...args} />;

// objectを名前付きエクスポートでカタログに登録できる
export const Default =
  // Template.bind({});
  // Default.args = {
  {
    args: {
      task: {
        id: "1",
        title: "Test Task",
        state: "TASK_INBOX",
        // updatedAt: new Date(2021, 0, 1, 9, 0),
      },
    },
  };

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
