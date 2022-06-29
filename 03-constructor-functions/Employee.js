function Employee(id, name, salary){
    //this -> new object
    if (!(this instanceof Employee)) {
        return new Employee(id, name, salary);
    }
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this -> returned by default
}

//static method
Employee.isEmployee = function(obj){
    return obj instanceof Employee
}
