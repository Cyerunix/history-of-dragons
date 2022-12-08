$(function() {
  $(".dropdownMenu").hide();

  $("#dropdown-trigger").on("mouseover", function() {
    $(".dropdownMenu").slideDown(300);
  });
});

function hideDropdown() {
  $(".dropdownMenu").slideUp(200);
}
