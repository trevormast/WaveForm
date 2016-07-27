var width = $(window).width() - 100
var height = (screen.width <= 750) ? $(window).width() - 100 : ($(window).width() / 2) - 100
var newCanvas = $('<canvas/>',{
                    id: 'myCanvas'
                    }).prop({
                      width: width,
                      height: height
});

$(window).on('load', function(){
  $('#canvas').append(newCanvas);
});
