import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is a required field"],
    },
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mentor",
    },
  },
  { timestamps: true }
);

export default mongoose.model("assign-mentor-students", studentSchema);
