(function ($) {

  'use strict';

  // Get the current page
  const currentPage = $('body').attr('data-current-page');

  // Patient-Files Page Functions
  if (currentPage == 'patient-files') {
    const patientTable = $('#patientTable').DataTable({
      "language": {
        "lengthMenu": "اعرض : _MENU_",
        "info": "اظهر _START_ الي _END_ من _TOTAL_ مدخل",
        "paginate": {
          "first":      "الاول",
          "last":       "الاخير",
          "next":       "التالي",
          "previous":   "السابق"
        },
      },
      "columnDefs": [
        { "className": "dt-center", "target": "_all" }
      ]
    });
    $('#search-input').on('keyup click', function () {
      patientTable.search($('#search-input').val()).draw();
    });
  }
  // Search Page Functions
  else if (currentPage == 'search-page') {
    const patientTable = $('#patientTable').DataTable({
      "language": {
        "lengthMenu": "اعرض : _MENU_",
        "info": "اظهر _START_ الي _END_ من _TOTAL_ مدخل",
        "paginate": {
          "first":      "الاول",
          "last":       "الاخير",
          "next":       "التالي",
          "previous":   "السابق"
        },
      },
      "columnDefs": [
        { "className": "dt-center", "target": "_all" }
      ]
    });
  }
  // Users Permissions Page Functions
  else if (currentPage == 'users-permissions') {
    const usersTable = $('#usersTable').DataTable({
      "language": {
        "lengthMenu": "اعرض : _MENU_",
        "info": "اظهر _START_ الي _END_ من _TOTAL_ مدخل",
        "paginate": {
          "first":      "الاول",
          "last":       "الاخير",
          "next":       "التالي",
          "previous":   "السابق"
        },
      },
      "columnDefs": [
        { "className": "dt-center", "target": "_all" }
      ]
    });
  }
  // Login Page Functions
  else if (currentPage == 'login') {

    $('#passwordIcon').hide();
    $('#togglePassword').on('click', function() {
      var passwordType = $('#loginPasswordInput').attr('type');
      if( passwordType === 'password' ){
        $('#loginPasswordInput').attr("type", "text");
        $('#passwordIcon').show();
      } else {
        $('#loginPasswordInput').attr("type", "password");
        $('#passwordIcon').hide();
      }
    });
  }

  // Modal Function
  $('[data-toggle="modal"]').on('click', function() {
    let modalId = $(this).attr('data-modal');
    $('[data-modal-id]').fadeIn(150);
  });
  $('[data-dismiss="modal"]').on('click', function() {
    $('.modal').fadeOut(150);
  });

  // Sidebar Functions
  $('#sidebar-toggler').on('click', function() {
    $('#sidebar').toggleClass('show');
  });

}(jQuery));
