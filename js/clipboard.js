$("#link").click(function(){
  var holdtext = $("#clipboard").innerText;
  Copied = holdtext.createTextRange();
  Copied.execCommand("Copy");
});
