class Booking {
    constructor(studentId, routeId, routeName, bookingTime, bookingDate, pickupDropoff, isInvalid, attendanceMarked){
        this.studentId = studentId;
        this.routeId = routeId;
        this.routeName = routeName;
        this.bookingTime = bookingTime;
        this.bookingDate = bookingDate;
        this.pickupDropoff = pickupDropoff;
        this.isInvalid = isInvalid;
        this.attendanceMarked = attendanceMarked;
    }

    toJSON() {
        return {
            studentId: this.studentId,
            routeId: this.routeId,
            routeName: this.routeName,
            bookingTime: this.bookingTime,
            bookingDate: this.bookingDate,
            pickupDropoff: this.pickupDropoff,
            isInvalid: this.isInvalid,
            attendanceMarked: this.attendanceMarked,
        }
    }
}

export default Booking;