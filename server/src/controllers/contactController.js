import Contact from "../models/Contact.js";

export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email and message are required." });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return res.status(400).json({ success: false, message: "Please provide a valid email." });
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, message: "Message received.", id: contact._id });
  } catch (error) {
    next(error);
  }
}
