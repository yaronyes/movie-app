import moment from 'moment'

class ActorModel {
    constructor(id, firstName, lastName, birthday, imageUrl, imdbLink) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.imageUrl = imageUrl;
        this.imdbLink = imdbLink;
    }

    Age() {
        return moment(this.birthday, "YYYY-MM-DD").fromNow().split(" ")[0];
    }
}


export default ActorModel;