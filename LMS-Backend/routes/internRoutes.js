const express = require('express');
const router = express.Router();

const {
  createIntern,
  getAllInterns,
  getInternById,
  updateIntern,
  deleteIntern,
  addTask,
  updateTask,
  deleteTask
} = require('../controllers/internController');
 

router.post('/', createIntern);
router.get('/', getAllInterns);
router.get('/:id', getInternById);
router.put('/:id', updateIntern);
router.delete('/:id', deleteIntern);
// ADD a task
router.post('/:id/tasks', addTask);

// UPDATE a task
router.put('/:id/tasks/:taskId', updateTask);
// DELETE a task
router.delete('/:id/tasks/:taskId', deleteTask);


module.exports = router; 
