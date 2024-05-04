import Category from "@/models/category.model";
import { ConnectDB } from "@/utils/connect";

export default async function handler(req, res) {
  try {
    await ConnectDB();
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
}
