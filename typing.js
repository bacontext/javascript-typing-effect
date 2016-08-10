<script>
  var first_line_text = "Good Evening!";
  var second_line_text = "This is the second line";
  var first_line_array = first_line_text.split("");
  var second_line_array = second_line_text.split("");
  var loopTimer;
  var loop = true;
  var speed = 70;
  var delay = 1000;
  function typeFirstLineText() {
    if (first_line_array.length > 0) {
      document.getElementById("firstline").innerHTML += first_line_array.shift();
    } else {
      clearTimeout(loopTimer);
      setTimeout('clearFirstLineText()', delay);
    }
    loopTimer = setTimeout('typeFirstLineText()', speed);
  }
  function clearFirstLineText() {
  // to do 
  }
  typeFirstLineText();
</script>
