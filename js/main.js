// WEB303 Assignment 2

document.addEventListener('DOMContentLoaded', function () {
    const contentWrapper = document.querySelector('#content-wrapper');

    if (contentWrapper) {
        contentWrapper.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && e.target.id) {
                e.preventDefault();
                let id = e.target.id;
                loadContent(`${id}.html`);
            }
        });
    }
});

function loadContent(href) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const contentDiv = document.querySelector('#content');
            $(contentDiv).hide();
            contentDiv.innerHTML = this.responseText;
            $(contentDiv).slideDown(1000);
        }
    };
    xhr.open("GET", href, true);
    xhr.send();
}


