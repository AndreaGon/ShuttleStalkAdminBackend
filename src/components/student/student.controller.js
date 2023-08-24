import Student from "./student.entities.js";

class StudentController {
    constructor(studentService){
        this.studentService = studentService;
    }

    getAllStudents = (_, res) => {
        this.studentService.getAllStudents().then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getStudentById = (req, res) => {
        const { id } = req.params;
        this.studentService.getStudentById(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    updateStudent = (req, res) => {
        const student = new Student(
            req.body.is_banned,
            req.body.num_of_no_show
        );
        const { id } = req.params;
        return res.status(201).send(this.studentService.updateStudent(id, student));
    }

    deleteStudent = (req, res) => {
        const { id, email } = req.params;
        return res.status(200).send(this.studentService.deleteStudent(id, email));
    }

}

export default StudentController;