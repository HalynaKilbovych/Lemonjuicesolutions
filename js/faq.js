document.addEventListener("DOMContentLoaded", function() {
    var faq = document.getElementsByClassName("faq__question");
    var i;

    setTimeout(function() {
        for (i = 0; i < faq.length; i++) {
            faq[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } else {
                    body.style.display = "block";
                }
            });
        }
    }, 2000);
});