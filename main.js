var students = [];
function submit() {
  for (var for1 = 1; for1 <= 5; for1 = for1 + 1) {
    var student1 = document.getElementById("name_of_the_student_" + for1).value;
    console.log(student1);
    students.push(student1);
  }
  console.log(students);
  console.log(students.length);
  var display_student_array = [];
  for (let index = 0; index < students.length; index++) {
    var element = students[index];
    display_student_array.push("<h4>NAME - " + element + "</h4>");
  }
  document.getElementById(
    "display_name_with_commas"
  ).innerHTML = display_student_array;
  document.getElementById(
    "display_name_without_commas"
  ).innerHTML = display_student_array.join("*");
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    students.sort();
    var display_student_array = [];
    for (let index = 0; index < students.length; index++) {
        var element = students[index];
        display_student_array.push("<h4>NAME - " + element + "</h4>");
      }
      document.getElementById(
        "display_name_with_commas"
      ).innerHTML = display_student_array;
      document.getElementById(
        "display_name_without_commas"
      ).innerHTML = display_student_array.join("*");  
}
