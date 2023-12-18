import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserProvider";
import Dashboard from "./dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
}
