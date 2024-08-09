import Task from "./Task";

export default function TaskList({ loading, tasks }) {
  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">...Empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
