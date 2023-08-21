import AnnouncementController from "./announcement.controller.js";
import AnnouncementRouter from "./announcement.router.js";
import AnnouncementService from "./announcement.service.js";

const announcementService = new AnnouncementService();
const announcementController = new AnnouncementController(announcementService);
const announcementRouter = new AnnouncementRouter(announcementController);

export default {
    service: announcementService,
    controller: announcementController,
    router: announcementRouter.getRouter()
}