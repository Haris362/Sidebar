const navItems = [
    { name: "Dashboard", link: "#dash", icon: "bxs-dashboard" },
    { name: "Profile", link: "#profile", icon: "bxs-user" },
    { name: "Settings", link: "#settings", icon: "bxs-cog" },
    { name: "Messages", link: "#messages", icon: "bxs-message-dots" }
];

const navContainer = document.getElementById("navContainer");

navItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("nav-links-div", "div1");

    div.innerHTML = `
        <a href="${item.link}" class="m2">
            <i class="bx ${item.icon}"></i>
            <span class="tooltip">${item.name}</span>
        </a>
        <a href="${item.link}" class="m1">${item.name}</a>
    `;

    navContainer.appendChild(div);
});
