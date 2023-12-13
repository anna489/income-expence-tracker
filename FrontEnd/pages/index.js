import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import LogIn from "./login";

export default function Home() {
  const { LogIn } = useContext(UserContext);
  return <main></main>;
}
