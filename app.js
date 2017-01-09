var totalSalary = 0;

$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);

    clearForm();

  });

/*$('#employeeRemoval').on('submit',function (event) {

    event.preventDefault();

    var employeeRemoval = event;

    console.log("Remove " + employeeRemove);

    clearForm();
  })*/

});

function appendDom(emp) {
  var $emp = $('<div class="employee"></div>'); // create a div jQuery object
  var $empName = $('<div class="column" id="empFirtstName"> ' + emp.employeeFirstName + ' ' + emp.employeeLastName +' </div>');

  var $empID = $('<div class="column" id="empID">' + emp.employeeIdNumber +'</div>');
  var $empJobTitle = $('<div class="column" id="empJobTitle">' + emp.JobTitle + '</div>');
  var $empAnnualSalary = $('<div class="column annualSalaryClass" id="empAnnualSalary">' + emp.employeeSalary +'</div>');
  totalSalary += emp.employeeSalary;

  $emp.append($empName); // add our employee data
  $emp.append($empID);
  $emp.append($empJobTitle);
  $emp.append($empAnnualSalary);

  $('#employees').append($emp); // append our div to the DOM
  calculateSalary();

}

function calculateSalary() {

  var $totalMonthlySalary = totalSalary/12;

  $('div').remove('.monthly');
  var $exp = $('<div class="monthly"></div>');
  $($exp).append('<p>' + $totalMonthlySalary + '</p>');
  $($exp).appendTo('#monthly');
  console.log($totalMonthlySalary);


}

function clearForm() {
  $('form').find('input[type=text]').val('');
  $('form').find('input[type=number]').val('');
}
