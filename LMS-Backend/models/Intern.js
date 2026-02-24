const mongoose = require('mongoose');

const internSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    domain: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Active', 'Completed'], default: 'Active' },
    tasks: [
      {
        title: { type: String, required: true },
        description: { type: String },
        completed: { type: Boolean, default: true },
        feedback: { type: String }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Intern', internSchema);
