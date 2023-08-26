import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore(); 
const driverCollection = db.collection("drivers");

class DriverService {
    constructor(){
        this.drivers = [];
        this.driver = [];
    }

    getAllDrivers = async () => {
        this.drivers = [];
        await driverCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.drivers.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.drivers;

    }

    getDriverByEmail = async (email) => {
        this.driver = [];
        await driverCollection.where("email", "==", email).get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.driver.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.driver;

    }

    registerDriverAccount = async (driver) => {
        let id = uuidv4();

        //Register driver details in Firestore
        return await driverCollection.doc(id).set({
            id: id,
            fullname: driver.fullname,
            icNumber: driver.icNumber,
            email: driver.email
        }).then(async ()=>{
            return await admin.auth().createUser({
                email: driver.email,
                password: driver.password,
                disabled: false,
                emailVerified: true
            })
            .then((value)=>{
                console.log("Successfully registered driver: ", value);
            })
            .catch((err)=>{
                console.log("Error: ", err);
            });
        });

        //Register driver auth account
    }

    deleteDriver = async (driverId, driverEmail) => {
        return await driverCollection.doc(driverId).delete()
        .then(async data => {            
            console.log("Successfully deleted: ", data);
            return await admin.auth().getUserByEmail(driverEmail)
            .then((userRecord) => {
                admin.auth().deleteUser(userRecord.uid);
            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });


    }
}

export default DriverService;