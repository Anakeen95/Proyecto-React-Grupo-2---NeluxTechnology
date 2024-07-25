// Imports the necessary modules and components
import 'bootstrap/dist/css/bootstrap.min.css';

// App component is the top-level component for all pages
// It receives the Component to be rendered and its props as arguments
function App({ Component, pageProps }) {
  return (
    // Renders the Component with the provided pageProps
    // This allows the application to use the Component and its associated props on each page
    <Component {...pageProps} />
  );
}

export default App;

