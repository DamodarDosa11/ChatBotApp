function GetDetails() {
    const txt = document.getElementById("inp").value.trim().toLowerCase();
    let resText = "Sorry, I was not trained about that.";

    if (txt === "about") {
        resText = "Dosa Damodara Sai Manikanta Vamsi is a tech enthusiast always ready to learn new skills.";
    } else if (txt === "hobbies") {
        resText = "Damodar loves singing, watching movies, and playing chess.";
    } else if (txt === "awards") {
        resText = "In 2017, Damodar won 3rd Prize in the Tyagaraja Gana Sabha singing competition.";
    }

    document.getElementById("res").innerText = resText;
}