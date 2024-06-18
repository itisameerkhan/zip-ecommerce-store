import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Store", storeSchema);
