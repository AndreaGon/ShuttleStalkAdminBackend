import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore(); 
const bucket = admin.storage().bucket();
const routeCollection = db.collection("routes");

class RouteService {
    constructor(){
        this.routes = [];
        this.route;
        this.downloadUrl;
    }

    getAllRoutes = async () =>{
        this.routes = [];
        await routeCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.routes.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.routes;

    }

    getRouteById = async (id) => {
        this.routes = [];
        await routeCollection.where("id", "==", id).get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.route = documentData;

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.route;
    }

    addRoute = async (route) => {
        let id = uuidv4();

        //Register driver details in Firestore
        return await routeCollection.doc(id).set({
            id: id,
            routeName: route.routeName,
            driverId: route.driverId,
            shuttleId: route.shuttleId,
            pickupTime: route.pickupTime,
            dropoffTime: route.dropoffTime,
            route: route.route,
            routeImage: route.routeImage
        });
    }

    updateRoute = async (id, routeContent) => {
        console.log(routeContent);
        await routeCollection.doc(id).update({
            routeName: routeContent.routeName,
            driverId: routeContent.driverId,
            shuttleId: routeContent.shuttleId,
            pickupTime: routeContent.pickupTime,
            dropoffTime: routeContent.dropoffTime,
            route: routeContent.route,
            routeImage: routeContent.routeImage
        }).then((success)=>{
            console.log(success);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    uploadRouteImage = async (fileBuffer, fileName, fileExtension) => {
        const storageFilePath = `RouteImages/${fileName}${fileExtension}`;
        const file = bucket.file(storageFilePath);

        await file.save(fileBuffer);

        return true;
    }

    getImageDownloadUrl = async (fileName) => {
        const filePath = `RouteImages/${fileName}`;
        const file = bucket.file(filePath);
        const url = await file.makePublic({});

        return `{"image": "${url}"}`;

    }

    deleteRoute = async (id) => {
        return await routeCollection.doc(id).delete()
        .then(data => {            
            console.log("Successfully deleted: ", data);
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });
    }

}

export default RouteService;