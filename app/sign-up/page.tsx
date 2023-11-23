// import React from "react";
// import { signUpUser } from "../lib/actions";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const SignUpPage = () => {
//   return (
//     <div className="flex h-screen flex-col justify-center items-center ">
//       <form
//         action={signUpUser}
//         className="flex flex-col gap-5 bg-slate-300 p-24 rounded-lg"
//       >
//         <h1 className="text-3xl font-bold">Sign Up</h1>
//         <Input type="text" name="username" placeholder="User Name" />
//         <Input type="text" name="email" placeholder="Email" />
//         <Input type="text" name="password" placeholder="Password" />
//         <Button type="submit">Sign Up</Button>
//         <Link href={"/sign-in"}>
//           <Button variant={"link"}>Sign In?</Button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signUpUser } from "../lib/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string(),
});

function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    signUpUser(formData);
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-slate-300 p-24 rounded-lg"
        >
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="User Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Link href={"/sign-in"}>
            <Button variant={"link"}>Sign In?</Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}

export default SignUpPage;
