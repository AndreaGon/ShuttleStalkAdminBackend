import express from 'express';

class AnnouncementRouter {
    constructor(announcementController){
        this.announcementController = announcementController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-announcements').get(this.announcementController.getAllAnnouncements);
        router.route('/get-announcement/:id').get(this.announcementController.getAnnouncementById);
        router.route('/send-notif').post(this.announcementController.sendNotif);
        router.route('/new-announcement').post(this.announcementController.createAnnouncement);
        router.route('/delete-announcement/:id').delete(this.announcementController.deleteAnnouncement);
        router.route('/update-announcement/:id').put(this.announcementController.updateAnnouncement);
        return router;
    }
}

export default AnnouncementRouter;