class Employee {
    #id = 0; //private
    name = '';
    salary = 0;
    
    get id(){
        console.log('[get id] triggered');
        return this.#id;
    }
    set id(val){
        console.log('[set id] triggered');
        this.#id = val;
    }
    
    constructor(id, name, salary){
        this.#id = id;
        this.name = name;
        this.salary = salary;
    }

    display(){
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`;
    }

    static isEmployee(obj){
        return obj instanceof Employee;
    }
}

//inheritance
class FulltimeEmployee extends Employee{
    benefits = '';
    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }
    display(){
        return `${super.display()}, benefits = ${this.benefits}`;
    }
}