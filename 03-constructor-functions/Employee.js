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