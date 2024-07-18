import React from 'react';

const Button = ({ quantity, addToCart }) => {
  const handleClick = () => {
    if (quantity > 0) {
      addToCart();
    }
  };

  return (
    <button className="button" onClick={handleClick} disabled={quantity <= 0}>
      {quantity > 0 ? 'Agregar al carrito' : 'Sin Stock'}

      <style jsx>{`
        .button {
          color: #00FDFB;
          background-color: ${quantity > 0 ? '#1D1D1B' : '#6c757d'};
          padding: 6px 8px;
          border: none;
          border-radius: .5rem;
          font-size: .9rem;
          cursor: ${quantity > 0 ? 'pointer' : 'not-allowed'};
          text-transform: uppercase;
          box-shadow: 0px 1px 1px 0.5px ${quantity > 0 ? '#00FDFB' : 'gray'};
          padding-top: 5px;
        }

        .button:hover {
          font-weight: bold;
          box-shadow: ${quantity > 0 ? '0px 1px 1px 1px #00FDFB' : 'none'};
          opacity: ${quantity > 0 ? '0.70' : '1'};
          -moz-opacity: ${quantity > 0 ? '.70' : '1'};
          filter: ${quantity > 0 ? 'alpha(opacity=20)' : 'none'};
        }

        .button:active {
          background-color: ${quantity > 0 ? '#4d4b55' : '#6c757d'};
          transform: ${quantity > 0 ? 'scale(0.95)' : 'none'};
        }
      `}</style>
    </button>
  );
};

export default Button;
