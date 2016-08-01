var width = $(window).width() - 100
var bigScreenHeight = ($(window).width() / 2) - 100
var height = (screen.width <= 750) ? width : bigScreenHeight

var newCanvas = $('<canvas/>',{
                    id: 'myCanvas'
                    }).prop({
                      width: width,
                      height: height
});

$(window).on('load', function(){
  $('#canvas').append(newCanvas);
});
