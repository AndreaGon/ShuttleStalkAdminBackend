import admin from '../../config/admin.config.js';

const db = admin.firestore(); 
const driverCollection = db.collection("drivers");

class DriverService {
    constructor(){
        this.drivers = [];
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
}

export default DriverService;