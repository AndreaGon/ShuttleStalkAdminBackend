import StudentController from "./student.controller.js";
import StudentService from "./student.service.js";
import StudentRouter from "./student.router.js";

const studentService = new StudentService();
const studentController = new StudentController(studentService);
const studentRouter = new StudentRouter(studentController);

export default {
    service: studentService,
    controller: studentController,
    router: studentRouter.getRouter()
}