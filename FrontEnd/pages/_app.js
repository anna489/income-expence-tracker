import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import { StepProvider } from "@/context/stepContext";
import TransactionProvider from "../context/TransactionContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <TransactionProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </TransactionProvider>
      </StepProvider>
    </UserProvider>
  );
}
