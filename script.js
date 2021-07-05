function navNone() {
    let x = document.getElementById('responsiveNav');
    x.style.display = 'none';
}

function expandtoNav() {
    let x = document.getElementById('responsiveNav');
    let y = document.getElementById('special-btn');
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.children[0].style.justifyContent = "space-between";
        x.children[0].style.width = "100%";
        x.children[0].style.position = "fixed";
        x.children[0].style.bottom = "0";
        x.children[0].style.right = "0";
        x.children[0].style.left = "0";
        y.innerHTML = "off";
        document.body.scrollIntoView(false);
    } else {
        x.style.display = "none";
        y.innerHTML = "on";
        document.body.scrollIntoView(false);
    }
}

