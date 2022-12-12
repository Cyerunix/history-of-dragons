$(function() {
  $(".dropdownMenu").hide();

  $("#dropdown-trigger").on("mouseover", function() {
    $(".dropdownMenu").slideDown(300);
  });

  $(".dropdownMenu").on("mouseleave", function() {
    hideDropdown()
  });

  $("body").on("click", function() {
    hideDropdown();
  });
});

function hideDropdown() {
  $(".dropdownMenu").slideUp(200);
}