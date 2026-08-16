import Project from "../models/Project.js";

export async function getProjects(req, res, next) {
  try {
    const projects = await Project.find().sort({ featured: -1, order: 1, createdAt: -1 });
    res.json({ success: true, projects });
  } catch (error) {
    next(error);
  }
}
