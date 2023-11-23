"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addUser } from "../../../lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
export const userAddFormSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  phone: z.string(),
  isAdmin: z.string(),
  isActive: z.string(),
  address: z.string(),
});

const AddUserPage = () => {
  const form = useForm<z.infer<typeof userAddFormSchema>>({
    resolver: zodResolver(userAddFormSchema),
  });

  const handleAddUserForm = (data: z.infer<typeof userAddFormSchema>) => {
    console.log("FormData", data);
    addUser(data);
  };
  return (
    // <div className="p-5 mt-5">
    //   <form
    //     onSubmit={handleSubmit(handleAddUserForm)}
    //     className="flex flex-wrap gap-3 justify-between"
    //   >
    //     <>
    //       <Input
    //         type="text"
    //         placeholder="Username"
    //         {...register("username")}
    //         className={widthItem}
    //       />
    //       <div>{errors.username ? errors.username.message : null}</div>
    //     </>
    //     <>
    //       <Input
    //         type="text"
    //         placeholder="Email"
    //         {...register("email")}
    //         className={widthItem}
    //       />
    //       <div>{errors.email ? errors.email.message : null}</div>
    //     </>
    //     <>
    //       <Input
    //         type="text"
    //         placeholder="Password"
    //         {...register("password")}
    //         className={widthItem}
    //       />
    //       <div>{errors.password ? errors.password.message : null}</div>
    //     </>

    //     <>
    //       <Input
    //         type="text"
    //         placeholder="Phone Number"
    //         {...register("phone")}
    //         className={widthItem}
    //       />
    //       <div>{errors.phone ? errors.phone.message : null}</div>
    //     </>

    //     <Select {...register("isAdmin")}>
    //       <SelectTrigger className={widthItem}>
    //         <SelectValue placeholder="Is Admin?" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectGroup>
    //           <SelectItem value={"true"}>Yes</SelectItem>
    //           <SelectItem value={"false"}>No</SelectItem>
    //         </SelectGroup>
    //       </SelectContent>
    //     </Select>
    //     <Select {...register("isActive")}>
    //       <SelectTrigger className={widthItem}>
    //         <SelectValue placeholder="Is Active?" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectGroup>
    //           <SelectItem value={"true"}>Yes</SelectItem>
    //           <SelectItem value={"false"}>No</SelectItem>
    //         </SelectGroup>
    //       </SelectContent>
    //     </Select>
    //     <>
    //       <Textarea
    //         {...register("address")}
    //         placeholder="Address"
    //         id="address"
    //         rows={10}
    //         className="w-full"
    //       />
    //       <div>{errors.address ? errors.address.message : null}</div>
    //     </>

    //     <Button type="submit" className="w-full p-7">
    //       Submit
    //     </Button>
    //   </form>
    // </div>
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleAddUserForm)}
          className="flex flex-wrap w-full gap-3 mx-4 my-2 p-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-2/5">
                <FormLabel>User Name</FormLabel>
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
              <FormItem className="w-2/5">
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
              <FormItem className="w-2/5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-2/5">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isAdmin"
            render={({ field }) => (
              <FormItem className="w-2/5">
                <FormLabel>Is Admin?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Admin or not" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={"true"}>Yes</SelectItem>
                    <SelectItem value={"false"}>No</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="w-2/5">
                <FormLabel>Is Active?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Active or not" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={"true"}>Yes</SelectItem>
                    <SelectItem value={"false"}>No</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-[82%]">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Address"
                    id="address"
                    rows={6}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="block w-[82%]">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddUserPage;
