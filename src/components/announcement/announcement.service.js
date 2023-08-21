import admin from '../../config/admin.config.js';

class AnnouncementService {
    topic = 'announcements';

    constructor(){}

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
            console.log('Content: ', req.body);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
    }
}

export default AnnouncementService;