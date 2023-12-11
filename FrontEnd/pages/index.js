import Currency from "./Currency";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

export default function Home() {
  const { name } = useContext(UserContext);
  return (
    <main>
      <Currency />
      User-{name}
    </main>
  );
}
