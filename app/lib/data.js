import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  try {
    await connectToDB();
    const users = await User.find();
    return { users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
