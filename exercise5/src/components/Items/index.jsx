import Item from "../Item";
import './style.css';

const Items = ({ works }) => {
    return (
      <div className="items">
        {works.map((work) => (
          <Item key={work.id} title={work.body} />
        ))}
      </div>
    );
  };

export default Items;