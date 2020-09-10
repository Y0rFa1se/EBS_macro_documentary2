function pwcheck(){
  var inputVal = document.getElementById("pw").value;

  if (inputVal == "dldmswnstkfkdgo") {
    window.location = 'https://drive.google.com/file/d/1ejpIr-12q701R1XJtOmh-VLIXJvnk1aW/view?usp=sharing';
  } else {
    alert("어림도없지");
    window.history.back();
  }
}

function rt(){
  window.history.back();
}
