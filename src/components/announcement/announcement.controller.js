import Announcement from './announcement.entities.js';

//Messaging
const topic = 'announcements';

class AnnouncementController {
    constructor(announcementService){
        this.announcementService = announcementService;
    }

    sendNotif = (req, res) => {
        const announcement = new Announcement(req.body.title, req.body.content);
        return res.status(201).send(this.announcementService.sendNotif(announcement));
    }

}

export default AnnouncementController;