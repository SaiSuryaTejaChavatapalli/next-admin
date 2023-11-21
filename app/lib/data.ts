import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const users = await User.find({
      username: {
        $regex: regex,
      },
    });

    return users;
  } catch (error) {
    // throw new Error("Failed to fetch Users");
    console.log(error);
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Error while fetching user", error);
  }
};

export const fetchProducts = async () => {
  try {
    connectToDB();
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.log("Failed to fetch Products", error);
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log("Failed to fetch Product", error);
  }
};
