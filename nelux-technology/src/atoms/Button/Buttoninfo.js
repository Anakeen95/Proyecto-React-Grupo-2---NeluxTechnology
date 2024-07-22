import React from 'react';

const Buttoninfo = () => {
  return (
    <div className="button-container">
      <button className="button">Ver Más</button>

      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: space-between; 
          gap: 10px;
          margin-top: 10px;
        }   
        .button {
          flex: 1; 
          color: #00FDFB;
          background-color: #1D1D1B;
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
          font-weight: bold;
          box-shadow: 0px 1px 1px 1px #00FDFB;
          opacity: 0.70;
        }
        .button:active {
          background-color: #4d4b55;
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default Buttoninfo;
