var summernote_custom = {
    init: function () {
        $('.summernote').summernote({
            height: 300,
            tabsize: 2
        });
        $('.inline-editor').summernote({
            airMode: true
        });
        $(".hint2basic").summernote({
            height: 100,
            toolbar: false,
            placeholder: 'type with apple, orange, watermelon, lemon',
            hint: {
                words: ['apple', 'orange', 'watermelon', 'lemon'],
                match: /\b(\w{1,})$/,
                search: function (keyword, callback) {
                    callback($.grep(this.words, function (item) {
                        return item.indexOf(keyword) === 0;
                    }));
                }
            }
        });
    }
};
(function ($) {
    "use strict";
    summernote_custom.init();
})(jQuery);

var edit = function () {
    $('.click2edit').summernote({
        focus: true
    });
};

var save = function () {
    var markup = $('.click2edit').summernote('code');
    $('.click2edit').summernote('destroy');
};

(function () {
    const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
    console.log("dropdownToggle", dropdownToggle);
    for (var i = 0; i < dropdownToggle.length; i++) {
        dropdownToggle[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("show");
            current[0].className = current[0].className.replace(" show", "");
            this.className += " show";
        });
    }
})();








