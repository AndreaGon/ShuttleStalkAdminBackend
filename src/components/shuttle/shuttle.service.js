import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore(); 
const bucket = admin.storage().bucket();
const shuttleCollection = db.collection("shuttles");

class ShuttleService {
    constructor(){
        this.shuttles = [];
        this.shuttle;
        this.downloadUrl;
    }

    getAllShuttles = async () =>{
        this.shuttles = [];
        await shuttleCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.shuttles.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.shuttles;

    }

    getShuttleById = async (id) => {
        this.shuttles = [];
        await shuttleCollection.where("id", "==", id).get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.shuttle = documentData;

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.shuttle;
    }

    addShuttle = async (shuttle) => {
        let id = uuidv4();

        //Register driver details in Firestore
        return await shuttleCollection.doc(id).set({
            id: id,
            plateNo: shuttle.plateNo,
            shuttleImage: shuttle.shuttleImage,
            routeName: shuttle.routeName,
            driverId: shuttle.driverId,
            seats: shuttle.seats,
            pickupTime: shuttle.pickupTime,
            dropoffTime: shuttle.dropoffTime,
            route: shuttle.route
        });
    }

    updateShuttle = async (id, shuttleContent) => {
        await shuttleCollection.doc(id).update({
            plateNo: shuttleContent.plateNo,
            shuttleImage: shuttleContent.shuttleImage,
            routeName: shuttleContent.routeName,
            driverId: shuttleContent.driverId,
            seats: shuttleContent.seats,
            pickupTime: shuttleContent.pickupTime,
            dropoffTime: shuttleContent.dropoffTime,
            route: shuttleContent.route
        }).then((success)=>{
            console.log(success);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    uploadShuttleImage = async (fileBuffer, fileName, fileExtension) => {
        const storageFilePath = `ShuttleImages/${fileName}${fileExtension}`;
        const file = bucket.file(storageFilePath);

        await file.save(fileBuffer);

        return true;
    }

    getImageDownloadUrl = async (fileName) => {
        const filePath = `ShuttleImages/${fileName}`;
        const file = bucket.file(filePath);
        const url = await file.makePublic({});

        return `{"image": "${url}"}`;

    }

    deleteShuttle = async (id) => {
        return await shuttleCollection.doc(id).delete()
        .then(data => {            
            console.log("Successfully deleted: ", data);
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });
    }

}

export default ShuttleService;