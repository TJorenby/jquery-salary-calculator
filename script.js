$(document).ready(onReady);

//Global Scope

let monthlyCosts = [];
 

function addMonthlyCosts(){
    console.log('in addMonthlyCosts');
    let totalMonthlyCosts = 0;
    
    for (let i=0; i<monthlyCosts.length; i++){
        totalMonthlyCosts += Number((monthlyCosts[i].annualSalary / 12)); // divides the annual salaries by 12 to find monthly cost
    }

    let el = $('#totalMonthlyCost');
    el.empty();
    el.append(Math.round(totalMonthlyCosts)); 


     if (totalMonthlyCosts > 20000){
        el.css("background-color", "red"); // Changes background to RED if monthly costs exceed 20k
    }

}



function displayDataOutput() {

    let el = $('#employeeProfileOutput');
    el.empty();
    for (let i=0; i<monthlyCosts.length; i++){
        el.append(`
        <div class="employeeProfile">
        <li class="employeeOutput">${monthlyCosts[i].firstName} ${monthlyCosts[i].lastName}  ${monthlyCosts[i].idNumber} ${monthlyCosts[i].jobTitle} ${monthlyCosts[i].annualSalary}</li>
        <button id="deleteBtn">Delete</button>
        </div>
        `);
    }
    
}

function onDeleteBtn(){
    console.log('in deleteEmployee'); 
    let el = $('.employeeProfile');
    $(this).parent().remove(); 
    
}


function onReady(){
    $(document).on('click','#submitBtn', inputData);
    $(document).on('click','#deleteBtn', onDeleteBtn); 
    
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
    
}
