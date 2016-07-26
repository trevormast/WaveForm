var canvas = $('#myCanvas');

function drawWave(points) {
  gpoints = points
  var obj = {
    strokeStyle: '#000',
    strokeWidth: 6,
    rounded: true
  };

  var pts = points;

  for (var p = 0; p < pts.length; p += 1) {
    obj['x'+(p+1)] = pts[p][0];
    obj['y'+(p+1)] = pts[p][1];
  };

  console.log(obj)
  $('#myCanvas').drawLine(obj);
};
