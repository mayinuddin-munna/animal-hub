import mongoose from "mongoose";

const CategoryModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("category", CategoryModel);

export default Category;
