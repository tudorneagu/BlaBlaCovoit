import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: false,
    },
    comment: {
      type: String,
      required: false,
    },
    booking_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "travel",
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
