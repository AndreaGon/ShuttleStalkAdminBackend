import express from 'express';

class AnnouncementRouter {
    constructor(announcementController){
        this.announcementController = announcementController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/send-notif').post(this.announcementController.sendNotif);
        return router;
    }
}

export default AnnouncementRouter;