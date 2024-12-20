import Dashboard from "../view/Dashboard.js";

const router = () => {
    const routes = [
        { path: "/", view: Dashboard},
        // { path: "/posts", view: () => console.log("Viewing Posts")},
        // { path: "/settings", view: () => console.log("Viewing Settings")}
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = view.getHtml();
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router()
}

window.addEventListener("popstate", router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router()
})

