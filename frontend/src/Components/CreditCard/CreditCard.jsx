import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCard.css";

function CreditCard() {
  const data = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  const [cardDetails, setCardDetails] = React.useState(data);

  const handleInputFocus = (e) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <div>
      <div className='cardContainer'>
        <Cards
          cvc={cardDetails.cvc}
          expiry={cardDetails.expiry}
          focused={cardDetails.focus}
          name={cardDetails.name}
          number={cardDetails.number}
        />
        <div>
          <form className='cardForm'>
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.number}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.name}
            />
            <div className='bottom'>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.expiry}
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardDetails.cvc}
                maxLength={3}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;