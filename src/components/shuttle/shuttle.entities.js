class Shuttle {
    constructor(
        plateNo,
        seats,
        shuttleImage
    ){
        this.plateNo = plateNo;
        this.seats = seats;
        this.shuttleImage = shuttleImage;
    }

    toJSON() {
        return {
            plateNo: this.plateNo,
            seats: this.seats,
            shuttleImage: this.shuttleImage
        }
    }

}

export default Shuttle;