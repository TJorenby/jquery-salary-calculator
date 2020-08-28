$(document).ready(onReady);

//Global Scope

let monthlyCosts = [];

function onReady(){
    $('#submitBtn').on('click', $('#submitBtn'), inputData);

    function inputData(){
        console.log('in inputData');
        let employeeProfile = {
           firstName: $('.firstNameInput').val(),
           lastName: $('.lastNameInput').val(),
           idNumber: $('.idNumberInput').val(),
           jobTitle: $('.jobTitleInput').val(),
           annualSalary: $('.annualSalaryInput').val()
        }
        monthlyCosts.push(employeeProfile);
        console.log(monthlyCosts);


    }
}
