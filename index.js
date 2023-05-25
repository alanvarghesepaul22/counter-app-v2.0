var value = document.getElementById("value");
var adder = document.getElementById("add");
var sub = document.getElementById("sub");
var reset = document.getElementById("reset");

count = 0;

adder.addEventListener("click", function inc() {
  count++;
  value.innerHTML = count;
});

sub.addEventListener("click", function dec() {
  count--;
  value.innerHTML = count;
});

reset.addEventListener("click", function reset() {
  count = 0;
  value.innerHTML = 0;
});
