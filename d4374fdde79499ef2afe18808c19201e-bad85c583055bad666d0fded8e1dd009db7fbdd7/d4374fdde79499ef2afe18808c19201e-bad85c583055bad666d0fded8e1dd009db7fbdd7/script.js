function showScreen(n) {
// Hide all screens
document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));

// Show the selected screen
document.getElementById("screen" + n).classList.remove("hidden");
}
function showScreen(n) {
document.querySelectorAll('.screen').forEach(screen => {
screen.classList.add('hidden');
});
document.getElementById(`screen${n}`).classList.remove('hidden');
}
