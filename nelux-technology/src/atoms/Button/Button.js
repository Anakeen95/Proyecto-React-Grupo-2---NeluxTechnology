// Imports the necessary modules and components
import React, { useState } from 'react';

// Button component receives `quantity` and `addToCart` as props
const Button = ({ quantity, addToCart }) => {
  // Local state to keep track of the button's quantity
  const [localQuantity, setLocalQuantity] = useState(quantity); 

  // Function to handle button clicks
  const handleClick = () => {
    // Checks if the quantity is greater than 0 before proceeding
    if (localQuantity > 0) {
      // Calls the `addToCart` function passed as a prop
      addToCart();
      // Decreases the local quantity by 1
      setLocalQuantity(localQuantity - 1);
    }
  };

  return (
    <div className="button-container">
      /* Renders the button */
      // Disables the button if quantity is 0 or less
      <button className="button" onClick={handleClick} disabled={localQuantity <= 0}> 
        /* Shows button text based on the quantity */
        {localQuantity > 0 ? 'Agregar al carrito' : 'Sin Stock'}
      </button>

      /* Scoped CSS styles for the button */
      <style jsx>{`
        .button-container {
          display: flex;
<<<<<<< HEAD
          justify-content: space-between; // Distribute space between buttons
          gap: 10px; // Space between buttons
          margin-top: 10px; // Top margin for container
=======
          justify-content: center;
          gap: 10px;
          align-items:center;
          padding:0px 40px;
          margin-bottom:5px;
        
           
>>>>>>> origin/main
        }
        .button {
          flex: 1; // Make button fill available space
          color: #00FDFB; // Text color
          background-color: ${localQuantity > 0 ? '#1D1D1B' : '#6c757d'}; // Background color based on quantity
          padding: 6px 8px; // Padding inside button
          border: none; // Remove default border
          border-radius: 0.5rem; // Rounded corners
          font-size: 0.9rem; // Font size
          cursor: ${localQuantity > 0 ? 'pointer' : 'not-allowed'}; // Pointer cursor if clickable, else not-allowed
          text-transform: uppercase; // Uppercase text
          box-shadow: 0px 1px 1px 0.5px ${localQuantity > 0 ? '#00FDFB' : 'gray'}; // Shadow based on quantity
          padding-top: 5px; // Additional top padding
        }
        .button:hover {
          font-weight: bold; // Bold text on hover
          box-shadow: ${localQuantity > 0 ? '0px 1px 1px 1px #00FDFB' : 'none'}; // Shadow effect on hover
          opacity: ${localQuantity > 0 ? '0.70' : '1'}; // Change opacity on hover
        }
        .button:active {
          background-color: ${localQuantity > 0 ? '#4d4b55' : '#6c757d'}; // Darker background color on click
          transform: ${localQuantity > 0 ? 'scale(0.95)' : 'none'}; // Slightly shrink button on click
        }
      `}</style>
    </div>
  );
};

export default Button;
