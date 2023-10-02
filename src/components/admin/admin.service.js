import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore();
const adminCollection = db.collection("admins");

class AdminService {

    constructor(){
        this.admins = [];
        this.admin = [];
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

}

export default AdminService;