var canvas = $('#myCanvas');

function drawWave(points, waveType) {

  var obj = waveTypeCheck(waveType);

  var pts = points;

  for (var p = 0; p < pts.length; p += 1) {
    obj['x'+(p+1)] = pts[p][0];
    obj['y'+(p+1)] = pts[p][1];
  };

  $('#myCanvas').drawLine(obj);
};

var waveTypeCheck = function(waveType) {
  if ( waveType === 'resultant' ) {
    var options = {
                    strokeStyle: '#F00',
                    strokeWidth: 6,
                    rounded: true
                  }
  } else {
    var options = {
                    strokeStyle: '#000',
                    strokeWidth: 3,
                    rounded: true
                  }
  };
  return options
};
