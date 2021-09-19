export function getCookie(name, cookie) {
    const value = `; ${cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function popup(params) {
    var notif = document.createElement("div");
    notif.classList.add(params.type);
    notif.textContent = params.content;
    var btn = document.createElement("span");
    btn.classList.add("closebtn");
    btn.onclick = function() {
        this.parentElement.style.opacity = "0";
        setTimeout(function() {this.parentElement.style.display = "none";}, 600);
    };
    notif.appendChild(btn);
    document.body.appendChild(notif);
    setTimeout(function() {btn.onclick.apply(btn);}, 3000);
}