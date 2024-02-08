import mongoose, { Schema } from "mongoose";

const allTechSchema = new Schema(
  {
    name: String,
    author: String,
    photoTitle: String,
    category: String,
    description: String,
    comment: Number,
    likes: Number,
    views: Number,
  },
  { timestamps: true },
);
const AllTech = mongoose.models.AllTech || mongoose.model('AllTech', allTechSchema);

export default AllTech;
