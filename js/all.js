
$('.responsive').slick({
slidesToShow: 3,
dots: true,
dotsClass:'btn_box',
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
arrows: false,
responsive: [
{
breakpoint: 996,
settings: {
slidesToShow: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1
}
}
]
});
