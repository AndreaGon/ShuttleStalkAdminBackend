import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore();
const adminCollection = db.collection("admins");

class AdminService {

    constructor(){
        this.admins = [];
        this.admin = [];
    }

    getAllAdmins = async () => {
        this.admins = [];
        await adminCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.admins.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.admins;
    }

    getAdminByEmail = async (email) => {
        this.admin = [];
        await adminCollection.where("email", "==", email).get()
        .then(querySnapshot => {
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.admin.push(documentData);
            })
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.admin;
    }

    registerAdminAccount = async (adminModel) => {
        let id = uuidv4();

        //Register driver details in Firestore
        return await adminCollection.doc(id).set({
            id: id,
            fullname: adminModel.fullname,
            role: adminModel.role,
            email: adminModel.email
        }).then(async ()=>{
            return await admin.auth().createUser({
                email: adminModel.email,
                password: adminModel.password,
                disabled: false,
                emailVerified: true
            })
            .then((value)=>{
                console.log("Successfully registered admin: ", value);
            })
            .catch((err)=>{
                console.log("Error: ", err);
            });
        });
    }

    deleteAdmin = async (adminId, adminEmail) => {
        return await adminCollection.doc(adminId).delete()
        .then(async data => {            
            console.log("Successfully deleted: ", data);
            return await admin.auth().getUserByEmail(adminEmail)
            .then((userRecord) => {
                admin.auth().deleteUser(userRecord.uid);
            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });


    }

}

export default AdminService;