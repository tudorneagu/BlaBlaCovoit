import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    pickup_location: {
      type: String,
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      required: true,
    },
    nb_passengers: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    travel_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "travel",
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
