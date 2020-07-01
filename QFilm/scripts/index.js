// Плавный скролл


window.onload = function () {
    document.body.style.overflow='hidden';
    setTimeout(function () {

        document.querySelector(".container").style.display = "none";
        document.body.style.overflow='visible ';
    }, 100);

};

function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}


jQuery(function ($) {
    $('div.date ul').on('click', 'a', function (e) {
        $(this).parents('div.date ul').find('a').removeClass('visited');
        $(this).addClass('visited');
        return false;
    });

    $('div.cinemas ul').on('click', 'a', function (e) {
        $(this).parents('div.cinemas ul').find('a').removeClass('visited');
        $(this).addClass('visited');
        return false;
    });
});

var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach((elm) => {
	elm.addEventListener('click', () => {
		elm.previousElementSibling.value = '';
	});
});