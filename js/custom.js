document.addEventListener("DOMContentLoaded", function () {
    const projectsPerPage = 6;
    let currentPage = 1;
    const projects = Array.from(document.querySelectorAll(".page-blog .col-lg-4"));
    const paginationLinks = document.querySelectorAll(".pagination li a");

    function showPage(page) {
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;

        projects.forEach((project, index) => {
            project.style.display = (index >= start && index < end) ? "block" : "none";
        });

        document.querySelector(".pagination .active").classList.remove("active");
        paginationLinks[page].parentElement.classList.add("active");
    }

    paginationLinks.forEach((link, index) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (index === 0 && currentPage > 1) {
                currentPage--;
            } else if (index === paginationLinks.length - 1 && currentPage < paginationLinks.length - 2) {
                currentPage++;
            } else if (index > 0 && index < paginationLinks.length - 1) {
                currentPage = index;
            }
            showPage(currentPage);
        });
    });

    showPage(currentPage);
});
