const
    { origin } = location,
    home = document.querySelector("#home");

home.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/home.htm`;
};