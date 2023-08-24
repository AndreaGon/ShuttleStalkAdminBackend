class Student {
    constructor(is_banned, num_of_no_show){
        this.is_banned = is_banned;
        this.num_of_no_show = num_of_no_show;
    }

    toJSON() {
        return {
            is_banned: this.is_banned,
            num_of_no_show: this.num_of_no_show
        }
    }

}

export default Student;