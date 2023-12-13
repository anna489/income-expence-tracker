import "@/styles/globals.css";
import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </UserProvider>
  );
}
