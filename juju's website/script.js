
/* =====================================
   PAGE NAVIGATION
===================================== */

function openPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        console.error("Page not found:", pageId);
    }
}


/* =====================================
   MOVE THE NO BUTTON
===================================== */

function moveNoButton() {
    const button = document.getElementById("noButton");

    if (!button) return;

    const maxX = Math.max(
        0,
        window.innerWidth - button.offsetWidth - 30
    );

    const maxY = Math.max(
        0,
        window.innerHeight - button.offsetHeight - 30
    );

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    button.style.zIndex = "50";
}


/* =====================================
   ENLARGE MEMORY PHOTOS
===================================== */

function showImage(src) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    if (!popup || !popupImage) return;

    popupImage.src = src;
    popup.style.display = "flex";
}


/* =====================================
   CLOSE MEMORY PHOTO
===================================== */

function closeImage() {
    const popup = document.getElementById("imagePopup");

    if (popup) {
        popup.style.display = "none";
    }
}


/* =====================================
   CLOSE PHOTO WHEN CLICKING OUTSIDE
===================================== */

document.addEventListener("click", function(event) {
    const popup = document.getElementById("imagePopup");

    if (popup && event.target === popup) {
        closeImage();
    }
});


/* =====================================
   CLOSE PHOTO WITH ESCAPE KEY
===================================== */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImage();
    }
});
