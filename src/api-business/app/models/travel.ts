import mongoose from "mongoose";

const travelSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: false,
    },
    start_location: {
      type: String,
      required: false,
    },
    end_location: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    detour_allowed: {
      type: Boolean,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "travel",
  }
);

const Travel = mongoose.model("Travel", travelSchema);

export default Travel;
