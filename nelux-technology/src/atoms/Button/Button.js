import React, { useState } from 'react';

const Button = ({ quantity, addToCart }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity); 

  const handleClick = () => {
    if (localQuantity > 0) {
      addToCart();
      setLocalQuantity(localQuantity - 1);
    }
  };

  return (
    <div className="button-container">
      <button className="button" onClick={handleClick} disabled={localQuantity <= 0}> 
        {localQuantity > 0 ? 'Agregar al carrito' : 'Sin Stock'}
      </button>

      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 10px;
          margin-left: 40px;
          height: 30px;
          width: 180px; 
        }
        .button {
          flex: 1; 
          color: #00FDFB;
          background-color: ${localQuantity > 0 ? '#1D1D1B' : '#6c757d'};
          padding: 6px 8px;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          cursor: ${localQuantity > 0 ? 'pointer' : 'not-allowed'};
          text-transform: uppercase;
          box-shadow: 0px 1px 1px 0.5px ${localQuantity > 0 ? '#00FDFB' : 'gray'};
          padding-top: 5px;
        }
        .button:hover {
          font-weight: bold;
          box-shadow: ${localQuantity > 0 ? '0px 1px 1px 1px #00FDFB' : 'none'};
          opacity: ${localQuantity > 0 ? '0.70' : '1'};
        }
        .button:active {
          background-color: ${localQuantity > 0 ? '#4d4b55' : '#6c757d'};
          transform: ${localQuantity > 0 ? 'scale(0.95)' : 'none'};
        }
      `}</style>
    </div>
  );
};

export default Button;

