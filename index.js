function myFunction() {
  var x = document.getElementsByClassName("container")[0];
  x.style.color = "red";
}

var p = document.getElementById('some-paragraph');
p.addEventListener('click', function (event) {
  p.innerHTML = 'You clicked it!';
});
