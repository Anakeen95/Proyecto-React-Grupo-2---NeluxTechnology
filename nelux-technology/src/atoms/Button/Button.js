import React from 'react';

const Button = ({ quantity, onClick }) => {
  // `quantity` es una prop y no un estado local
  return (
    <div className="button-container">
      <button 
        className="button" 
        onClick={onClick} 
        disabled={quantity <= 0}
      >
        {quantity > 0 ? 'Agregar al carrito' : 'Sin Stock'}
      </button>

      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          padding: 0px 40px;
          margin-bottom: 5px;
        }
        .button {
          flex: 1; 
          color: #00FDFB;
          background-color: ${quantity > 0 ? '#1D1D1B' : '#6c757d'};
          padding: 6px 8px;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          cursor: ${quantity > 0 ? 'pointer' : 'not-allowed'};
          text-transform: uppercase;
          box-shadow: 0px 1px 1px 0.5px ${quantity > 0 ? '#00FDFB' : 'gray'};
          padding-top: 5px;
        }
        .button:hover {
          font-weight: bold;
          box-shadow: ${quantity > 0 ? '0px 1px 1px 1px #00FDFB' : 'none'};
          opacity: ${quantity > 0 ? '0.70' : '1'};
        }
        .button:active {
          background-color: ${quantity > 0 ? '#4d4b55' : '#6c757d'};
          transform: ${quantity > 0 ? 'scale(0.95)' : 'none'};
        }
      `}</style>
    </div>
  );
};

export default Button;