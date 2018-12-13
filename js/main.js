$(document).ready(function() {
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
  });
  $('.js-example-basic-single').select2();
  $('.js-example-basic-multiple').select2();
});
