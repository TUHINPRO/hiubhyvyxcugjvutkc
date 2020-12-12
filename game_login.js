function addUser() {
    player_1name=document.getElementById("playerone").value;
    player_2name=document.getElementById("playertwo").value;

    localStorage.setItem("player_1name",player_1name);
    localStorage.setItem("player_2name",player_2name)

    window.location.replace("game_page.html");
}