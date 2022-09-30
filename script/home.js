const
    { origin } = location,
    setting = document.querySelector("#settings");

setting.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/settings.htm`;
};