const Header = () => {
  return (
    <div>
      <form className="TodoForm">
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
        />
      </form>
    </div>
  );
};

export default Header;