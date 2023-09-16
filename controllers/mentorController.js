import expressAsyncHandler from "express-async-handler";
import mentorModel from "../models/mentorModel.js";
import studentModel from "../models/studentModel.js";

// creating a new mentor
export const create_mentor = expressAsyncHandler(async (req, res) => {
  try {
    const newMentor = await mentorModel.create(req.body);
    res.send(newMentor);
  } catch (error) {
    throw new Error(error);
  }
});

// add array of students to mentor
export const add_students = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { students } = req.body;
  try {
    const addStudent = await mentorModel.findByIdAndUpdate(
      id,
      {
        $push: { students: { $each: students } },
      },
      { new: true }
    );
    students.forEach(async (element) => {
      const student = await studentModel.findByIdAndUpdate(element, {
        mentor: id,
      });
    });
    res.json(addStudent);
  } catch (error) {
    throw new Error(error);
  }
});

// remove array of students from any mentor
export const remove_students = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { students } = req.body;
  try {
    const removeStudent = await mentorModel.findByIdAndUpdate(
      id,
      {
        $pull: { students: { $in: students } },
      },
      { new: true }
    );
    res.send(removeStudent);
  } catch (error) {
    throw new Error(error);
  }
});
