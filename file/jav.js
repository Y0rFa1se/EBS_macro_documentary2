function pwcheck(){
  var inputVal = document.getElementById("pw").value;

  if (inputVal == "dldmswnstkfkdgo") {
    window.location = 'https://drive.google.com/file/d/1WndgxqHfkuwnv7U2aeg3qw-s-ENo9zB2/view?usp=sharing';
  } else {
    alert("어림도없지");
    window.history.back();
  }
}

function rt(){
  window.history.back();
}
