// Imports the necessary modules and components
import React from 'react';

// Buttoninfo component renders a button with specific styles and behavior
const Buttoninfo = () => {
  return (
    <div className="button-container">
      {/* Renders the button with text 'Ver Más' */}
      <button className="button">Ver Más</button>

      {/* Scoped CSS styles for the button */}
      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items:center;
          padding:0px 40px;
        }   
        .button {
          flex: 1; // Make button fill available space
          color: #00FDFB; // Text color
          background-color: #1D1D1B; // Background color
          padding: 6px 8px; // Padding inside button
          border: none; // Remove default border
          border-radius: 0.5rem; // Rounded corners
          font-size: 0.9rem; // Font size
          cursor: pointer; // Pointer cursor to indicate clickability
          text-transform: uppercase; // Uppercase text
          box-shadow: 0px 1px 1px 0.5px black; // Shadow for button
          padding-top: 5px; // Additional top padding
        }
        .button:hover {
          font-weight: bold; // Bold text on hover
          box-shadow: 0px 1px 1px 1px #00FDFB; // Shadow effect on hover
          opacity: 0.70; // Slightly transparent on hover
        }
        .button:active {
          background-color: #4d4b55; // Darker background color on click
          transform: scale(0.95); // Slightly shrink button on click
        }
      `}</style>
    </div>
  );
};

export default Buttoninfo;