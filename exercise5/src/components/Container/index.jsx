import Header from "../Header";
import Action from "../Actions";
import Items from "../Items";
import works from '../../data/works.json';
import './style.css'

const Container = () => {
    return (
        <div className="container">
            <Header />
            <Items works={works} />
            <Action />
        </div>
    )
};

export default Container;