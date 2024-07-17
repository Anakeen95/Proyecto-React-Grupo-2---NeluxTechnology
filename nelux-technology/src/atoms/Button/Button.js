import React from 'react';

const Button = ({ quantity, addToCart }) => {
  const handleClick = () => {
    if (quantity > 0) {
      addToCart();
    }
  };

  return (
    <button className="button" onClick={handleClick} disabled={quantity <= 0} >
      {quantity > 0 ? 'Agregar al carrito' : 'Sin Stock'}
      
      <style jsx>{`
        .button {
          color: white;
          background-color: ${quantity > 0 ? '#007bff' : '#6c757d'};
          padding: 6px 8px;
          border: none;
          border-radius: .5rem;
          font-size: .9rem;
          cursor: ${quantity > 0 ? 'pointer' : 'not-allowed'};
          text-transform: uppercase;
          box-shadow: 0px 1px 1px 0.5px black;
          padding-top: 5px;
        }

        .button:hover {
          background-color: ${quantity > 0 ? '#3D3C41' : '#6c757d'};
        }
      `}</style>
    </button>
  );
};

export default Button;