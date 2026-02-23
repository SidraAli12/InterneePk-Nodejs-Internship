const Intern = require('../models/Intern');

// CREATE Intern
exports.createIntern = async (req, res) => {
  try {
    const intern = await Intern.create(req.body);
    res.status(201).json(intern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET All Interns
exports.getAllInterns = async (req, res) => {
  try {
    const interns = await Intern.find();
    res.json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Single Intern
exports.getInternById = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Intern
exports.updateIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(intern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE Intern
exports.deleteIntern = async (req, res) => {
  try {
    await Intern.findByIdAndDelete(req.params.id);
    res.json({ message: 'Intern deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD TASK to an intern
exports.addTask = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }

    // Add task from request body
    intern.tasks.push(req.body); // req.body = { title, description }
    await intern.save();

    res.status(201).json(intern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// UPDATE a task for an intern
exports.updateTask = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) return res.status(404).json({ message: 'Intern not found' });

    // Find task by its ID
    const task = intern.tasks.id(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Update task details
    Object.assign(task, req.body); // e.g., { completed: true, feedback: "Good work" }
    await intern.save();

    res.json(intern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// DELETE a task from an intern
exports.deleteTask = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) return res.status(404).json({ message: 'Intern not found' });

    // Remove task by its ID
    const task = intern.tasks.id(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.remove(); // remove the task
    await intern.save();

    res.json({ message: 'Task deleted successfully', intern });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

