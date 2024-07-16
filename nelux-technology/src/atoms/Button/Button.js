import React from 'react';

const Button = ({ onClick }) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        Agregar al carrito
      </button>

      <style jsx>{`
        button {
          color: white;
          background-color: #007bff;
          padding: 6px 8px;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 0px 1px 1px 0.5px black;
          padding-top: 5px;
        }

        .button:hover {
          background-color: #3d3c41;
        }
      `}</style>
    </>
  );
};

export default Button;