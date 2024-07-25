// Imports Bootstrap CSS for styling components using Bootstrap framework
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports global CSS styles for the application
import '../styles/globals.css';

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

