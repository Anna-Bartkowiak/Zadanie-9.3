var $carousel = $('#carousel'),
    $firstItem, $lastItem;

function moveFirstSlide() {
    $firstItem = $carousel.find('li:first');
    $lastItem = $carousel.find('li:last');

    $lastItem.after($firstItem);
    $carousel.css({marginLeft: 0});
}

function moveLastSlide() {
    $firstItem = $carousel.find('li:first');
    $lastItem = $carousel.find('li:last');

    $carousel.css({marginLeft: -400});
    $firstItem.before($lastItem);
}

function nextSlide() {
    clearInterval(interval);

    $carousel.animate({
        marginLeft: -400,
    }, 800, moveFirstSlide);
}

function prevSlide() {
    clearInterval(interval);
    moveLastSlide();

    $carousel.animate({
        marginLeft: 0,
    }, 800);
}

$('#prev').click(prevSlide);
$('#next').click(nextSlide);

var interval = setInterval(nextSlide, 3000);