import announcementModule from "../components/announcement/announcement.module.js";
import driverModule from "../components/driver/driver.module.js";
import studentModule from "../components/student/student.module.js";
import shuttleModule from "../components/shuttle/shuttle.module.js";
import routeModule from "../components/route/route.module.js";
import adminModule from "../components/admin/admin.module.js";
import bookingModule from "../components/booking/booking.module.js";

export default (app) => {
    app.use('/announcements', announcementModule.router);
    app.use('/drivers', driverModule.router);
    app.use('/students', studentModule.router);
    app.use('/shuttles', shuttleModule.router);
    app.use('/routes', routeModule.router);
    app.use('/admins', adminModule.router);
    app.use('/bookings', bookingModule.router);
}