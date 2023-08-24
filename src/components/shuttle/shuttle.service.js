import admin from '../../config/admin.config.js';

const db = admin.firestore(); 
const shuttleCollection = db.collection("shuttles");

class ShuttleService {
    constructor(){
        this.shuttles = [];
        this.shuttle = [];
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

}

export default ShuttleService;