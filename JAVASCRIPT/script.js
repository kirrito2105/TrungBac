const hizmetlerLink = document.getElementById("hizmetler-link");
const hizmetMenu = document.getElementById("hizmetmenu");
const eticaret = document.getElementById("eticaret")
const eticaretMenu = document.getElementById("eticaretMenu");
const projelerLink = document.querySelector("#projelerLink");
const projeMenu = document.getElementById("projemenu");
const arrowIcon = hizmetlerLink.querySelector(".arrow");
const arrowIconProjects = projelerLink.querySelector(".arrow");
const menuBarCheckBox = document.getElementById("menu-bar");
const menuicon = document.getElementById("menuicon");

menuBarCheckBox.addEventListener("change", function () {
    if (menuBarCheckBox.checked) {
        menuicon.textContent="close";
    } else {
        menuicon.textContent="menu";
    }
});

hizmetlerLink.addEventListener("click", function (e) {
    projeMenu.style.display = "none";
    arrowIconProjects.classList.remove("open");

    e.preventDefault();
    hizmetMenu.style.display = hizmetMenu.style.display === "block" ? "none" : "block";
    arrowIcon.classList.toggle("open");
    e.stopPropagation();
});

eticaret.addEventListener("click", (e) => {
    e.preventDefault();
    eticaretMenu.style.display = eticaretMenu.style.display === "block" ? "none" : "block";
})

hizmetMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});

eticaret.addEventListener("click", function (e) {
    e.stopPropagation();
});

projelerLink.addEventListener("click", function (e) {
    e.preventDefault();
    projeMenu.style.display = projeMenu.style.display === "block" ? "none" : "block";
    arrowIconProjects.classList.toggle("open");
    e.stopPropagation();
    hizmetMenu.style.display = "none";
    arrowIcon.classList.remove("open");
})

document.addEventListener("click", function () {
    hizmetMenu.style.display = "none";
    eticaretMenu.style.display = "none";
    arrowIcon.classList.remove("open");
    arrowIconProjects.classList.remove("open");
    projeMenu.style.display = "none";
});

// Page Transition Handler
document.addEventListener('DOMContentLoaded', function() {
    const transitionDiv = document.createElement('div');
    transitionDiv.className = 'page-transition';
    document.body.appendChild(transitionDiv);

    // Handle all internal links
    document.querySelectorAll('a').forEach(link => {
        // Skip links that are just menu toggles (no actual href or #)
        if (!link.getAttribute('href') || 
            link.getAttribute('href') === '' || 
            link.getAttribute('href') === '#' ||
            link.id === 'hizmetler-link' || // Skip menu toggle
            link.id === 'projelerLink') {    // Skip menu toggle
            return;
        }

        // Only handle internal links with actual destinations
        if (link.href.startsWith(window.location.origin) || link.href.startsWith('/')) {
            link.addEventListener('click', function(e) {
                // Don't apply transition if parent li has dropdown menu
                if (this.closest('li')?.querySelector('ul')) {
                    return;
                }
                
                e.preventDefault();
                const target = this.href;
                
                // Start transition
                transitionDiv.classList.add('active');
                document.body.classList.add('fade-out');

                // Navigate after transition
                setTimeout(() => {
                    window.location.href = target;
                }, 300);
            });
        }
    });

    // Handle page load
    window.addEventListener('load', function() {
        transitionDiv.classList.remove('active');
        document.body.classList.remove('fade-out');
    });
});

















