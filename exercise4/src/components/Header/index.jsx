import './style.css';

const Header = () => {
    return (
        <div className="header">
          <div className="header-item">
          <div>
            <h1>Sell</h1>
          </div>
          <div>
            <h1>
            Buy
            </h1>
          </div>
          </div>
          <div className="header-item">
          <p>Amount(SAT)</p>
          <p>Total(SAT)</p>
          <p>PRICE(RIAL)</p>

          <p>Total(SAT)</p>
          <p>Amount(SAT)</p>
          </div>
        </div>
      );
}

export default Header;