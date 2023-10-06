class BookingController {
    constructor(bookingService){
        this.bookingService = bookingService;
    }

    getAllBookings = (_, res) => {
        this.bookingService.getAllBookings().then((value)=>{
            return res.status(200).json(value);
        });
    }
}

export default BookingController;