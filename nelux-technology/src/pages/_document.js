// Imports the necessary components from Next.js for customizing the HTML document structure
import { Html, Head, Main, NextScript } from "next/document";

// Defines and exports a custom Document component
export default function Document() {
  return (
    // Define the root HTML element
    <Html lang="en">
      <Head>
        {/* Adds Quicksand Font */}
        {/* Link to Google Fonts to include the Quicksand font in the project */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"/>
      </Head>
      <body>
        {/* Renders the main content of the page */}
        <Main />
        {/* Includes Next.js script tags for client-side functionality */}
        <NextScript />
      </body>
    </Html>
  );
}
