function showThankYou() {
    document.getElementById("thankYouCard").style.display = "block";
}

function closeCard() {
    window.location.href = "index.html";
}

document.getElementById("moreForYou").onclick = function(event) {
    event.preventDefault();
    showThankYou();
};

document.getElementById("closeCard").onclick = closeCard;