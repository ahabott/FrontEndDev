const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'HR', salary: 50000, specialization: 'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Javascript'},
    //... More employee records can be added here
  ];

function displayEmployees(){
const employee = employees
    .map((value, index) => `<p>${index+1} Employee: ${value.name}, ID: ${value.id}, Age: ${value.age}, Departement: ${value.department}, Salary: $${value.salary}</p>`).join('')
    document.getElementById("employeesDetails").innerHTML = employee
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++

//  let totalSalaries = 0
//  function calculateTotalSalaries(){
//    for (i=0; i<employees.length; i++){
//    totalSalaries = totalSalaries + parseInt(employees[i].salary)
//    document.getElementById("employeesDetails").innerHTML = "The total salary is: $"+totalSalaries
//  }
//  }


function calculateTotalSalaries(){
    const totalSalary = employees.reduce(function(acc, emp){
        return acc + emp.salary
    }, 0)
    document.getElementById("employeesDetails").innerHTML = "The total salary is: $"+totalSalary
    alert(`total Salary is: $${totalSalary}`)
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++


function displayHREmployees(){
    const hrEmployees = employees.filter(function(hrWorker){
        return hrWorker.department === "HR"
    })
    const hrEmployeesDisplay = hrEmployees.map(function(hrEmp){
       return `<p>Name: ${hrEmp.name}, ID: ${hrEmp.id}, Age: ${hrEmp.age}, Department: ${hrEmp.department}, Salary: ${hrEmp.salary}</p>`
    }).join('')
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay
}


//++++++++++++++++++++++++++++++++++++++++++++++++++


function findEmployeeById(employeeID){
    const employeeSearcher = employees.find(function(empID){
        return empID.id === employeeID
    })
    if (employeeSearcher){
        document.getElementById("employeesDetails").innerHTML = `<p>Name: ${employeeSearcher.name}, ID: ${employeeSearcher.id}, Age: ${employeeSearcher.age}, Department: ${employeeSearcher.department}, Salary: ${employeeSearcher.salary}</p>`
    }
    else{
        document.getElementById("employeesDetails").innerHTML = "No element has been found with the given ID!"
    }
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

function findEmployeeBySpecialization(language){
    const speciaFinder = employees.filter(function(criterium){
        return criterium.specialization === language
    })
    if (speciaFinder.length > 0){
        const speciaFinderDisplayer = speciaFinder.map(function(programmingLanguage){
            return `<p>Name: ${programmingLanguage.name}, ID: ${programmingLanguage.id}, Age: ${programmingLanguage.age}, Department: ${programmingLanguage.department}, Salary: ${programmingLanguage.salary}</p>`
        }).join('')
        document.getElementById("employeesDetails").innerHTML = speciaFinderDisplayer
    }
    else{
        document.getElementById("employeesDetails").innerHTML = 'No such Specialist among the list!'
    }
}