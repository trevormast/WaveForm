$(document).ready(function() {
  $('#create').click(function() {
    submitDimensions();
    console.log('clicked')
    var formData = {};
      $('#waveform').find("input[name]").each(function (index, node) {
          formData[node.name] = node.value;
      });
    $.ajax({
      //TODO: dynamically generate root url
      url: 'http://localhost:9292/create.json',
      // type: 'POST',
      data: formData,
      success: function(data) {
        console.log(data)
      }
    });
  });
});

function submitDimensions() {
  console.log('submitted dimensions')
  $('#formWidth').attr('value', $(window).width());
  $('#formHeight').attr('value', $(window).height());
};


