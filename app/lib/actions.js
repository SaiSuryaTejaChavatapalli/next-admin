"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log("Failed to delete Data");
  }
  revalidatePath("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  const updateFields = {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  };
  console.log("updateFieldsBefore", updateFields);
  Object.keys(updateFields).forEach((key) => {
    if (updateFields[key] === "" || undefined) {
      delete updateFields[key];
    }
  });
  try {
    console.log({ id, updateFields });
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Failed to update User");
    throw new Error("Failed to update User");
  }
  revalidatePath("/dashboard/users");
};
