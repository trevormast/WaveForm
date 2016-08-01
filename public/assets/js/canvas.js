var canvas = $('#myCanvas');

function drawWave(points, waveType) {
  var options = {
                  layer: true,
                  name: waveType,
                  opacity: 0.75,
                  rounded: true
                };
  var obj = waveTypeCheck(waveType, options);
  var pts = points;

  for (var p = 0; p < pts.length; p += 1) {
    obj['x'+(p+1)] = pts[p][0];
    obj['y'+(p+1)] = pts[p][1];
  };

  $('#myCanvas').drawLine(obj);
};

var waveTypeCheck = function(waveType, options) {
  var resultantOptions  = { strokeStyle: '#F00',
                            strokeWidth: 6
                          };

  var originalOptions   = { strokeStyle: '#000',
                            strokeWidth: 3,
                            visible: false
                          };

  var additionalOptions = ( waveType === 'resultant'
                            ? resultantOptions
                            : originalOptions
                          );


  pushOptions(options, additionalOptions);
  return options
};

function pushOptions(options, additionalOptions) {
  for (var key in additionalOptions) {
    options[key] = additionalOptions[key];
  }
}

function toggleVisibility(layer) {
  var toggler = ($('canvas').getLayer(layer).visible == false) ? true : false
  $('canvas').setLayer(layer, {
      visible: toggler
    }).drawLayers();
};

function resetCanvas() {
  $('canvas').removeLayer('resultant').drawLayers();
  $('canvas').removeLayer('freq1').drawLayers();
  $('canvas').removeLayer('freq2').drawLayers();
};
