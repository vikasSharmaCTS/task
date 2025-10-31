const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  specialty: { type: String, required: true },
  calendar: [
    {
      date: { type: String, required: true }, 
      availableSlots: [
        {
          startTime: { type: String, required: true }, 
          endTime: { type: String, required: true },   
          isBooked: { type: Boolean, default: false }
        }
      ]
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);