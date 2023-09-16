import expressAsyncHandler from "express-async-handler";
import studentModel from "../models/studentModel.js";

// creating a new student
export const create_student = expressAsyncHandler(async (req, res) => {
  try {
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res.send(newStudent);
  } catch (error) {
    throw new Error(error);
  }
});

// get all the studens with mentor and without mentor
export const students = expressAsyncHandler(async (req, res) => {
  try {
    const allStudents = await studentModel.find();
    res.send(allStudents);
  } catch (error) {
    throw new Error(error);
  }
});

// get all the students without mentor
export const studentWithoutMentor = expressAsyncHandler(async (req, res) => {
  try {
    const allStudents = await studentModel.find({ mentor: { $exists: false } });
    res.send(allStudents);
  } catch (error) {
    throw new Error(error);
  }
});
