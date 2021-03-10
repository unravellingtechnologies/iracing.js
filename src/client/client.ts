export class Client {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getAuthenticationData() {
        return {
            'username': this.username,
            'password': this.password,
            'utcoffset': (new Date()).getTimezoneOffset(),
            'todaysdate': '' // Is empty on the requests
        }
    }
}