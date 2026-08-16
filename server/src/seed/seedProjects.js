import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import { projects } from "../data/portfolioData.js";
import { connectDatabase } from "../config/database.js";

await connectDatabase();
await Project.deleteMany({});
await Project.insertMany(projects);
console.log(`Seeded ${projects.length} projects`);
await mongoose.connection.close();
