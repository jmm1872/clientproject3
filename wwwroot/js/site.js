// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    var about = '<h3 id="quote_title">' + @Model.About.title + '</h3>' +
        '<hr class="line">' +
        '<p id="quote_text">' + @Model.About.description + '</p>' +
        '<div id="quote_box">' +
        '<p id="quote">"' + @Model.About.quote + '"</p>' +
        '<p id="author">- ' + @Model.About.quoteAuthor + '</p>' +
        '</div > ' +
        '<br /> <br />';
    $('#about').append(about);
}


