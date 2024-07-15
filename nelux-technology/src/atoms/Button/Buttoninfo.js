const Buttoninfo = () => {
    return (
      <>
      <button className="button">ver mas</button>
  
      <style jsx>{`
      button{
        color:white;
        background-color:#007bff;
        padding: 6px 8px;
        border: none;
        border-radius:.5rem;
        fontSize:.9rem;
        cursor:pointer;
        text-transform: uppercase;
        box-shadow: 0px 1px 1px 0.5px black;
        padding-top:5px; 
        
      }
      
      .button:hover {
        background-color: #3D3C41;
    }       
        `}</style>
      </>
    )
  }
  
  export default Buttoninfo