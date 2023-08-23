class Announcement {
    constructor(title, content, timestamp){
        this.title = title;
        this.content = content;
        this.timestamp = timestamp
    }

    toJSON() {
        return {
            title: this.title,
            content: this.content,
            timestamp: this.timestamp
        }
    }

}

export default Announcement;