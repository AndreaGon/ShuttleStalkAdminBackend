class Announcement {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    toJSON() {
        return {
            title: this.title,
            content: this.content
        }
    }

}

export default Announcement;