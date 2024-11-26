import AbstractView from "./AbstractView.js"


export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Dashboard")
    }

    getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                 Welcome back! We’re excited to have you with us again and can’t wait to continue the journey together. Whether it’s been a short break or a longer pause, we’re ready to dive back in and make this next chapter even better. Let’s make the most of every moment ahead and create new memories together!
            </p>
            <p>
                <a href="/posts" data-link></a>
            </p>
        `;
    }
}