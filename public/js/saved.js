$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton();
    // $("#savedResults").empty();
    $('.modal').modal();

    initSaved();
});

var API = {
    getScrape: function () {
        return $.ajax({
            url: "api/scrape",
            type: "GET"
        });
    },
    init: function () {
        return $.ajax({
            url: "api/articles",
            type: "GET"
        });
    },
    getSaves: function () {
        return $.ajax({
            url: "api/saved",
            type: "GET"
        });
    },
    getArticle: function (id) {
        return $.ajax({
            url: "api/articles/" + id,
            type: "GET"
        });
    },
    getSavedArticle: function (id) {
        return $.ajax({
            url: "api/saved/" + id,
            type: "GET",
        });
    },
    getNote: function (id) {
        return $.ajax({
            url: "api/notes/" + id,
            type: "GET"
        });
    },
    save: function (article) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/saved",
            data: JSON.stringify(article)
        });
    },
    deleteArticle: function (id) {
        return $.ajax({
            url: "api/articles/" + id,
            type: "DELETE"
        });
    },
    deleteSaved: function (id) {
        return $.ajax({
            url: "api/saved/" + id,
            type: "DELETE"
        });
    },
    deleteNoteYeah: function (id) {
        return $.ajax({
            url: "api/notes/" + id,
            type: "DELETE"
        });
    },
    deleteAllSavedArt: function () {
        return $.ajax({
            url: "api/saved/",
            type: "DELETE"
        });
    },
    deleteAllNotes: function () {
        return $.ajax({
            url: "api/notes/",
            type: "DELETE"
        });
    },
    saveNote: function (id, note) {
        return $.ajax({
            url: "api/notes/" + id,
            type: "POST",
            data: {
                body: note
            }
        });
    }
};

var initSaved = function () {
    $("#savedResults").empty();
    API.getSaves().then(function (data) {
        console.log(data);
        if (data.length > 0) {
            var $saves = data.map(function (artic) {
                var $li = $("<li>");
    
                var deleteButton = $("<button>").addClass("buttonMargin btn-small waves-effect waves-light right deleteIt").attr("type", "submit").attr("name", "action").text("Delete From Saved");
                var noteButton = $("<button>").addClass("buttonMargin btn-small waves-effect waves-light modal-trigger right indigo addNote").attr("type", "submit").attr("name", "action").text("Add Note").attr("data-target", "modal1");
    
                var title = $("<div>").text(artic.title).addClass("collapsible-header");
    
                var buttonDiv = $("<div>").attr("data-id", artic._id).append(deleteButton).append(noteButton)
    
                var span = $("<a>").attr("href", artic.link).attr("target", "_blank").append($("<span>").text(artic.summary));
                var body = $("<div>").addClass("collapsible-body").append(span).append(buttonDiv);
    
                $li.append(title).append(body);
    
                return $li;
            });
            $("#savedResults").append($saves);
        }

        else {
            var $li = $("<li>");

            var title = $("<h5>").text("No Saved Articles. Go To The Home Page and Get Scraping!").addClass("center-align");

            $li.append(title);
            $("#savedResults").append($li);
        }

    });
};

