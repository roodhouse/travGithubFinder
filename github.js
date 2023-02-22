class GitHub {
    constructor() {
        this.client_id = '12876354eda6f15c61ec';
        this.client_secret = '401c717104f055ac7026c4620d227e749a10f47e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}