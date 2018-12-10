$(function() {
  $("button").click(function() {
    $.ajax({
      type: "GET",
      //beforeSend: function(xhr) {
      //   xhr.setRequestHeader("x-dc-uid", "bc7ad38f-03a1-4a4e-a46d-9cef677a2d3a");
      //},
      cache: false,
      crossDomain: true,
      contentType: 'application/json',
      headers: {
         'x-dc-uid': 'bc7ad38f-03a1-4a4e-a46d-9cef677a2d3a'
      },
      url: "https://ec2-18-209-228-104.compute-1.amazonaws.com:8443/v1/session/dc9df4e2-69ed-4753-a702-19e648089473/download",
      dataType: 'binary',
      processData: false,
      success: function(result) {
        var url = URL.createObjectURL(result);
        var $a = $('<a />', {
          'href': url,
          'download': 'contract.docx',
          'text': "click"
        }).hide().appendTo("body")[0].click();
        setTimeout(function() {
          URL.revokeObjectURL(url);
        }, 10000);
      }
    });
  });
});
