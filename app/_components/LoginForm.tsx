"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "../lib/actions";
//import { useState } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  //const [errorMsg, setErrorMsg] = useState("");
  //   const handleLogin = async (formData) => {
  //     const data = await authenticate(formData);
  //     if (data?.error) {
  //       setErrorMsg(data.error);
  //     }
  //   };
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        action={formAction}
        className="flex flex-col gap-3 items-center bg-slate-300 p-24 rounded-lg"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </div>
        <Button className="w-full">Login</Button>
        {/* <div className="text-red-500">{errorMsg ? errorMsg : null}</div> */}
        <div className="text-red-500">{state ? state : null}</div>
      </form>
    </div>
  );
};

export default LoginForm;
