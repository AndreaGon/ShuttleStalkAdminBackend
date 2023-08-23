import Announcement from './announcement.entities.js';

//Messaging
const topic = 'announcements';

class AnnouncementController {
    constructor(announcementService){
        this.announcementService = announcementService;
    }

    getAllAnnouncements = (_, res) => {
        this.announcementService.getAllAnnouncements().then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getAnnouncementById = (req, res) => {
        const { id } = req.params;
        this.announcementService.getAnnouncementById(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    createAnnouncement = (req, res) => {
        const announcement = new Announcement(req.body.title, req.body.content, req.body.timestamp);
        return res.status(201).send(this.announcementService.createAnnouncement(announcement));
    }

    sendNotif = (req, res) => {
        const announcement = new Announcement(req.body.title, req.body.content);
        return res.status(201).send(this.announcementService.sendNotif(announcement));
    }

    deleteAnnouncement = (req, res) => {
        const { id } = req.params;
        return res.status(200).send(this.announcementService.deleteAnnouncement(id));
    }

    updateAnnouncement = (req, res) => {
        const announcement = new Announcement(req.body.title, req.body.content, req.body.timestamp);
        const { id } = req.params;
        return res.status(201).send(this.announcementService.updateAnnouncement(id, announcement));
    }

}

export default AnnouncementController;