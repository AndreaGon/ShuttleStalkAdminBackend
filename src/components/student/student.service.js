import admin from '../../config/admin.config.js';

const db = admin.firestore(); 
const studentCollection = db.collection("students");

class StudentService {
    constructor(){
        this.students = [];
        this.student;
    }

    getAllStudents = async () => {
        this.students = [];
        await studentCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.students.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.students;

    }

    getStudentById = async (id) => {
        this.student = [];
        await studentCollection.where("id", "==", id).get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.student = documentData;

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.student;
    }

    updateStudent = async (id, studentContent) => {
        await studentCollection.doc(id).update({
            is_banned: studentContent.is_banned,
            num_of_no_show: studentContent.num_of_no_show
        }).then((success)=>{
            console.log(success);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    deleteStudent = async (id, email) => {
        admin.auth().getUserByEmail(email)
        .then((userRecord) => {
            admin.auth().deleteUser(userRecord.uid);
        });

        await studentCollection.doc(id).delete()
        .then(data => {            
            console.log("Successfully deleted: ", data);
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });


    }
}

export default StudentService;