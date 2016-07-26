$(document).ready(function() {
  $('#create').click(function() {
    $('canvas').clearCanvas();

    submitDimensions();

    var formData = {};
      $('#waveform').find("input[name]").each(function (index, node) {
          formData[node.name] = node.value;
      });
    $.ajax({
      //TODO: dynamically generate root url
      url: 'http://localhost:9292/create.json',
      data: formData,
      success: function(data) {
        drawWave(data.points);
      }
    });
  });
});

function submitDimensions() {
  console.log('submitted dimensions')
  $('#formWidth').attr('value', $(window).width());
  $('#formHeight').attr('value', $(window).height());
};


