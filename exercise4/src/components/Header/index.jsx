import './style.css';

const Header = () => {
    return (
        <div className="header">
          <div className="header-item">
          <h1>Sell</h1>
          <h1>Buy</h1>
          </div>
          <div className="header-item">
          <p>Total(SAT)</p>
          <p>Amount(SAT)</p>
          <p>PRICE(RIAL)</p>
          <p>Amount(SAT)</p>
          <p>Total(SAT)</p>
          </div>
        </div>
      );
}

export default Header;