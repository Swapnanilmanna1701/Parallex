let dubaiText=document.getElementById("dt");
let burjKhalifa=document.getElementById("bk");
let stars=document.getElementById("star");
let building=document.getElementById("buil");
window.addEventListener("scroll",() => {
    let value=window.scrollY;
    dubaiText.style.left=value *-2 + "px";
    burjKhalifa.style.top=value *-2 + "px";
    stars.style.top=value * 1+ "px";
});