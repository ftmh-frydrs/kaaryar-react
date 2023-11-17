import './style.css'

const Button = ({name}) => {
    return(
        <div>
            <button type="submit" className="btn">
          {name}
             </button>
        </div>
    )
};

export default Button;