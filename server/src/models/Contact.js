import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true, maxlength: 3000 },
  status: { type: String, enum: ["new", "read", "replied"], default: "new" }
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);
