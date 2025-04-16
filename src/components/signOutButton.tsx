"use client";

import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { useTransition } from "react";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const signOutHandler = async () => {
    startTransition(async () => {
      try {
        await signOut();

        redirect("/sign-in");
      } catch (error) {
      }
    });
  };

  return <Button onClick={signOutHandler} className="border border-white bg-transparent text-white hover:bg-white hover:text-black cursor-pointer">Sign Out</Button>;
}
export default SignOutButton;
