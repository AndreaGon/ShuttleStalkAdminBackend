import admin from '../../config/admin.config.js';
import { v4 as uuidv4 } from 'uuid';

const db = admin.firestore(); 
const announcementCollection = db.collection("announcements");

class AnnouncementService {
    topic = 'announcements';

    constructor(){
        this.announcements = [];
        this.announcement = [];
    }

    getAllAnnouncements = async () =>{
        this.announcements = [];
        await announcementCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.announcements.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.announcements;

    }

    getAnnouncementById = async (id) => {
        this.announcement = [];
        await announcementCollection.where("id", "==", id).get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.announcement.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.announcement;
    }

    createAnnouncement = async (announcement) => {
        let id = uuidv4();
        //Register driver details in Firestore
        await announcementCollection.doc(id).set({
            id: id,
            title: announcement.title,
            content: announcement.content,
            timestamp: announcement.timestamp,
            createdBy: announcement.createdBy
        });
    }

    updateAnnouncement = async (id, announcementContent) => {
        await announcementCollection.doc(id).update({
            title: announcementContent.title,
            content: announcementContent.content
        }).then((success)=>{
            console.log(success);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    sendNotif = (announcement) => {
        const message = {
            data: {
              title: announcement.title,
              content: announcement.content,
              route: ""
    
            },
            notification: {
              title: announcement.title,
              body: announcement.content,
            },
            topic: this.topic
        };

        admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message', message);
            console.log('Content: ', response.body);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
    }
    
    deleteAnnouncement = async (id) => {
        return await announcementCollection.doc(id).delete()
        .then(data => {            
            console.log("Successfully deleted: ", data);
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });
    }

}

export default AnnouncementService;