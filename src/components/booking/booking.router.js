import express from 'express';

class BookingRouter {
    constructor(bookingController){
        this.bookingController = bookingController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-bookings').get(this.bookingController.getAllBookings);
        return router;
    }
}

export default BookingRouter;