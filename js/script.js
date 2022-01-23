$("document").ready(function() {
  $("form#suggester").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let experience = $("#experience").val();
    let goal = $('input[name="goal"]:checked').val();
    let decision = $("#decision").val();
    let hours_commit = $("#hours_commit").val();
    let duration = $("#duration").val();
    let output = "";

    if (experience === "none") {
      if (goal === "UX-designer") {
        if (decision = "hype_about") {
          output = name + ", HTML/CSS would be good choice to begin with";
        } else {
          output = name + ", JavaScript would be a good choice to start with";
        }
      } else {
        output = name + ", JavaScript would be a good choice to start with";
      }
    } else if ((experience === "some" && goal === "fullStack") || (experience === "good" && goal === "fullStack")) {
      output = name + ", JavaScript to become a Full Stack Developer";
    } else if (goal === "dataScientist" || duration === "5_months" || hours_commit === "More than 20 hrs a week" || decision === "implement_project") {
      output = name + ", Python  would be a good choice for you";
    } else {
      output = name + ", JavaScript is versatile language which can be useful for beginner or experienced";
    }
    $("#input").slideUp(400);
    $("h5").hide();
    $("#outputdiv").text(output).slideDown();
  });
});
