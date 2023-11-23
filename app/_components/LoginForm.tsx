"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "../lib/actions";
//import { useState } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export type loginFormFields = z.infer<typeof loginFormSchema>;
const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormFields>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit(formAction)}
        className="flex flex-col gap-3 items-center bg-slate-300 p-24 rounded-lg"
      >
        <h1 className="text-3xl font-bold">Sign In</h1>
        <div>
          <Label>Email</Label>
          <Input {...register("email")} />
        </div>
        <div>
          {errors.email && (
            <p className="text-red-500 mt-2 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
        </div>
        <div>
          {errors.password && (
            <p className="text-red-500 mt-2 text-xs">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button className="w-full">Sign In</Button>
        {/* <div className="text-red-500">{errorMsg ? errorMsg : null}</div> */}
        <div className="text-red-500">{state ? state : null}</div>
        <Link href={"/sign-up"}>
          <Button variant={"link"}>Sign Up?</Button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
