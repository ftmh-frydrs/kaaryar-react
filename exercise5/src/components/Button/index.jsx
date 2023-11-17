const Button = ({name}) => {
    return(
        <div>
            <button type="submit" className="todo-btn">
          {name}
             </button>
        </div>
    )
};

export default Button;