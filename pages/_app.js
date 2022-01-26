import "../styles/globals.js";
import "react-toastify/dist/ReactToastify.min.css";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <GlobalStyle />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp;
