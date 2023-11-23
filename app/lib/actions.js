"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    formData;
  try {
    await connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone: phone,
      address,
      isAdmin: JSON.parse(isAdmin.toLowerCase()),
      isActive: JSON.parse(isActive.toLowerCase()),
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
  console.log("update Fileds before", {
    id,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  });
  const updateFields = {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  };
  console.log("update Fields after", updateFields);
  Object.keys(updateFields).forEach((key) => {
    if (updateFields[key] === "" || undefined) {
      delete updateFields[key];
    }
  });
  console.log("update Fields after eliminating", updateFields);

  try {
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log("Failed to update User");
    throw new Error("Failed to update User");
  }
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, category, price, stock, size, color, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      category,
      price: parseInt(price),
      stock: parseInt(stock),
      size,
      color,
      description,
    });
    await newProduct.save();
  } catch (error) {
    console.log("Failed to add products", error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log("Failed to delete product", error);
  }
  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, color, size, category, description } =
    Object.fromEntries(formData);
  const updatedFields = {
    title,
    price,
    stock,
    color,
    size,
    category,
    description,
  };

  Object.keys(updatedFields).forEach((key) => {
    if (updatedFields[key] === "" || undefined) {
      delete updatedFields[key];
    }
  });

  try {
    connectToDB();
    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log("Failed to update product", error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = formData;
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    console.log("ErrorMsg", error.message);
    if (error.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw error;
  }
};

export const signUpUser = (formData) => {
  const { username, email, password } = Object.fromEntries(formData);
  try {
    const user = new User({ username, email, password });
    user.save();
  } catch (error) {
    console.log("Failed to create User", error);
  }
};
