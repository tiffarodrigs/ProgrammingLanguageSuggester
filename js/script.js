$("document").ready(function(){
  $("form#suggester").submit(function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let experience= $( "#experience" ).val();
    let goal= $('input[name="goal"]:checked').val();
    let hours_commit= $( "#hours_commit" ).val();
    let duration=$( "#duration" ).val();
    let decision=$( "#decision" ).val();
    

  });

});