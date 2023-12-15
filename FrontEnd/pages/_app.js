import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import {StepProvider} from "@/context/stepContext"

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
  
      <StepProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </StepProvider>
 
  </UserProvider>
  )
};

