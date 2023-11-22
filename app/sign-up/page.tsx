import React from "react";
import { signUpUser } from "../lib/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center ">
      <form
        action={signUpUser}
        className="flex flex-col gap-5 bg-slate-300 p-24 rounded-lg"
      >
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <Input type="text" name="username" placeholder="User Name" />
        <Input type="text" name="email" placeholder="Email" />
        <Input type="text" name="password" placeholder="Password" />
        <Button type="submit">Sign Up</Button>
        <Link href={"/sign-in"}>
          <Button variant={"link"}>Sign In?</Button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
