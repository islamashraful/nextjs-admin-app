import { User } from "./models";
import { connectToDB } from "./utils";
import { ITEM_PER_PAGE } from "./constants";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
