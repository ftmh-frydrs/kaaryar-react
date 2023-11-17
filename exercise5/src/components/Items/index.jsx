import Item from "../Item";

const Items = ({ works }) => {
    return (
      <div>
        {works.map((work) => (
          <Item key={work.id} title={work.body} />
        ))}
      </div>
    );
  };

export default Items;