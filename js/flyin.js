function loadflying() {
    if (!!document.getElementById("flyin")) {
    document.getElementById("flyin").classList.add("run");
    }
    if (!!document.getElementById("flyin2")) {
        document.getElementById("flyin2").classList.add("run");
    }

    if (!!document.getElementById("flyin3")) {
        document.getElementById("flyin3").classList.add("run");
    }

    profile_path = ".section > .row > .col-sm-6"
    if (!! document.querySelector(profile_path)) {
        document.querySelector(profile_path).classList.add("run");
    }

    if (!! document.getElementById("profile")) {
        document.getElementById("profile").classList.add("run");
    }

    if (!! document.getElementById("headfly")) {
        document.getElementById("headfly").classList.add("run");
    }

    if (!! document.getElementById("section1fly")) {
        document.getElementById("section1fly").classList.add("run");
    }
}
