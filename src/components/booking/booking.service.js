import admin from '../../config/admin.config.js';

const db = admin.firestore(); 
const bookingCollection = db.collection("bookings");

class BookingService {
    constructor(){
        this.bookings = [];
        this.booking;
    }

    getAllBookings = async () => {
        this.bookings = [];
        await bookingCollection.get()
        .then(querySnapshot => {            
            querySnapshot.forEach(docSnapshot => {
                const documentData = docSnapshot.data();
                this.bookings.push(documentData);

            });
        })
        .catch(error => {
            console.error('Error fetching documents:', error);
        });

        return this.bookings;
    }
}

export default BookingService;