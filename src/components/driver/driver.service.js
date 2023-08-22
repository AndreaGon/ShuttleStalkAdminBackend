import admin from '../../config/admin.config.js';

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

        //Register driver details in Firestore
        let docRef = await driverCollection.add({
            fullname: driver.fullname,
            icNumber: driver.icNumber,
            email: driver.email
        });

        await driverCollection.doc(docRef.id).update({
            id: docRef.id
        }).then((success)=>{
            console.log(success);
        })
        .catch((err)=>{
            console.log(err);
        });

        //Register driver auth account
        await admin.auth().createUser({
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
    }

    deleteDriver = async (driverId, driverEmail) => {
        admin.auth().getUserByEmail(driverEmail)
        .then((userRecord) => {
            admin.auth().deleteUser(userRecord.uid);
        });

        await driverCollection.doc(driverId).delete()
        .then(data => {            
            console.log("Successfully deleted: ", data);
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });


    }
}

export default DriverService;