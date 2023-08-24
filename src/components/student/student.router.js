import express from 'express';

class StudentRouter {
    constructor(studentController){
        this.studentController = studentController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-students').get(this.studentController.getAllStudents);
        router.route('/get-student/:id').get(this.studentController.getStudentById);
        router.route('/delete-student/:id/:email').delete(this.studentController.deleteStudent);
        router.route('/update-student/:id').put(this.studentController.updateStudent);
        return router;
    }
}

export default StudentRouter;