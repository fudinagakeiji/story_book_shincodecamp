import PropTypes from "prop-types";
// これは子コンポーネント
export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        className="checkbox"
        aria-label={`archiveTask-${id}`}
      >
        <input type="checkbox" name="checked" id={`archiveTask-${id}`} />
        <span className="checkbox-custom"></span>
      </label>
      <label htmlFor="title" className="title" aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          id={`pinTask-${id}`}
          aria-label={`archiveTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.string,
  }),
};
