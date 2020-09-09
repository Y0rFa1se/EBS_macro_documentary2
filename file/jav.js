function pwcheck(){
  var inputVal = document.getElementById("pw").value;

  if (inputVal == "dldmswnstkfkdgo") {
    window.location = 'https://drive.google.com/file/d/11A5kUBsUZr4pNGU-Mdg4ZKiZHpGUKOp9/view';
  } else {
    alert("어림도없지");
    window.history.back();
  }
}

function rt(){
  window.history.back();
}
