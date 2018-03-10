let colors = {
    "welcome": {"header": "#2196f3", "body": "#e3f2fd"},
    "skills": {"header": "#f44336", "body": "#ffebee"},
    "speaking": {"header": "#4caf50", "body": "#e8f5e9"},
    "community": {"header": "#FFC107", "body": "#FFF8E1"}
};

let texts = {
    "welcome": welcome,
    "skills": skills,
    "speaking": speaking,
    "community": community
};

let pages = {
    "welcome": "skills",
    "skills": "speaking",
    "speaking": "community"
};

function navigate(page) {
    updateColorScheme(page);
    updateContent(page);
}

function updateColorScheme(page) {
    let colorScheme = colors[page];
    let headerColor = colorScheme.header;
    let bodyColor = colorScheme.body;
    let white = "#ffffff";

    let bodyElements = $('.body-color');
    for (let index = 0; index < bodyElements.length; index++) {
        bodyElements[index].style.backgroundColor = bodyColor;
    }

    let headerElements = $('.header-color');
    for (let index = 0; index < headerElements.length; index++) {
        headerElements[index].style.backgroundColor = headerColor;
    }

    let navigationElements = $('.navigation-color');
    for (let index = 0; index < navigationElements.length; index++) {
        navigationElements[index].style.backgroundColor = white;
        $(navigationElements[index]).hover(function(){
            $(this).css("background-color", bodyColor);
        }, function(){
            $(this).css("background-color", white);
        });
    }
}

function updateContent(page) {
    updateText(page);
    updateNavigation(page);
}

function updateText(page) {
    $('.body-text').html(texts[page]);
}

function updateNavigation(page) {
    if (pages.hasOwnProperty(page)) {
        $('.body-navigation div').attr("onclick", "navigate('" + pages[page] + "');");
    } else {
        $('.body-navigation div').attr("onclick", "window.location.replace('https://t.me/joinchat/A8zYJFK9sIwLiqB1UTZ91w');");
    }
}