$(document).ready(onReady);

//Global Scope

let monthlyCosts = [];
 

function addMonthlyCosts(){
    console.log('in addMonthlyCosts');
    let totalMonthlyCosts = 0;
    for (let i=0; i<monthlyCosts.length; i++){
        totalMonthlyCosts += Number(monthlyCosts[i].annualSalary);
    }
    let el = $('#totalMonthlyCost');
    el.empty();
    el.append(totalMonthlyCosts);
}

function onDeleteBtn(){
    console.log('in deleteEmployee'); 
    let el = $('.employeeOutput');
    let el2 = $('#deleteBtn');
    $(this).parent();
    el.remove();
    el2.remove();

    
}

function displayDataOutput() {

    let el = $('#employeeProfileOutput');
    el.empty();
    for (let i=0; i<monthlyCosts.length; i++){
        el.append(`
        <div>
        <li class="employeeOutput">${monthlyCosts[i].firstName} ${monthlyCosts[i].lastName}  ${monthlyCosts[i].idNumber} ${monthlyCosts[i].jobTitle} ${monthlyCosts[i].annualSalary}</li>
        <button id="deleteBtn">Delete</button>
        </div>
        `);
    }
    
}

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
        addMonthlyCosts();
        displayDataOutput();
        
        

        $('.firstNameInput').val(''),
        $('.lastNameInput').val(''),
        $('.idNumberInput').val(''),
        $('.jobTitleInput').val(''),
        $('.annualSalaryInput').val('')

        
    }
    
    $('#deleteBtn').on('click', onDeleteBtn);  
}
