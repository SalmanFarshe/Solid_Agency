// adding counter
// counter
var count1 = 1;
var count2 = 1;
var count3 = 1;
var count4 = 1;
var iterval1 = setInterval(counter1, 40);
var iterval2 = setInterval(counter2, 50);
var iterval3 = setInterval(counter3, 30);
var iterval4 = setInterval(counter4, 40);
function counter1() {
  count1++;
  document.querySelector(".count_number_1").innerHTML = count1;
  if (count1 == 120) {
    clearInterval(iterval1);
  }
}
function counter2() {
  count2++;
  document.querySelector(".count_number_2").innerHTML = count2;
  if (count2 == 90) {
    clearInterval(iterval2);
  }
}
function counter3() {
  count3++;
  document.querySelector(".count_number_3").innerHTML = count3;
  if (count3 == 150) {
    clearInterval(iterval3);
  }
}
function counter4() {
  count4++;
  document.querySelector(".count_number_4").innerHTML = count4;
  if (count4 == 122) {
    clearInterval(iterval4);
  }
}
function toggleMenu() {
  var menu_ul = document.querySelector(".menu_ul");
  menu_ul.classList.toggle("toggleMenu");
}
