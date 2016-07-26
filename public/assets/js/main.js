var newCanvas = $('<canvas/>',{
                    id: 'myCanvas'
                    }).prop({
                      width: $(window).width() - 100,
                      height: $(window).height() - 100
});

$(window).on('load', function(){
  $('#canvas').append(newCanvas);
});
