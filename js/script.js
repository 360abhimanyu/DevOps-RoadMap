/* =========================
   TOGGLE ROADMAP TOPICS
========================= */

function toggleTopic(id) {

    const topic =
        document.getElementById(id);

    topic.classList.toggle("active");

}


/* =========================
   PROGRESS TRACKING
========================= */

function updateProgress() {

    const checkboxes =
        document.querySelectorAll(
            ".complete-check"
        );

    const total =
        checkboxes.length;


    let completed = 0;


    checkboxes.forEach(function(checkbox) {

        if (checkbox.checked) {

            completed++;

        }

    });


    const percentage =
        Math.round(
            (completed / total) * 100
        );


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const progressText =
        document.getElementById(
            "progressText"
        );


    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }


    if (progressText) {

        progressText.innerText =
            percentage + "%";

    }


    /* Save Progress */

    localStorage.setItem(
        "devopsProgress",
        percentage
    );

}


/* =========================
   LOAD SAVED PROGRESS
========================= */

window.addEventListener(
    "load",

    function() {

        const savedProgress =
            localStorage.getItem(
                "devopsProgress"
            );


        if (savedProgress) {

            const progressBar =
                document.getElementById(
                    "progressBar"
                );


            const progressText =
                document.getElementById(
                    "progressText"
                );


            if (progressBar) {

                progressBar.style.width =
                    savedProgress + "%";

            }


            if (progressText) {

                progressText.innerText =
                    savedProgress + "%";

            }

        }

    }

);