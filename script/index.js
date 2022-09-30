const
    { origin } = location,
    signIn = document.querySelector("#home");

signIn.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/home.htm`;
};
