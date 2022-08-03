import { Router } from "express";
import { CreateStudentController } from "./controllers/CreateStudentController";

const router = Router();

const createStudent = new CreateStudentController();

router.post("/student", createStudent.handle);

export { router };
