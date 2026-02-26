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

router.post('/:id/tasks', addTask);

router.put('/:id/tasks/:taskId', updateTask);
router.delete('/:id/tasks/:taskId', deleteTask);


module.exports = router; 
