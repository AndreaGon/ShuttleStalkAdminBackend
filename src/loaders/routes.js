import announcementModule from "../components/announcement/announcement.module.js";
export default (app) => {
    app.use('/announcements', announcementModule.router);
}