class Person{
    public name : String = "";

    greeting(){
        console.log("Hello! My name is "+this.name+".")
    }

    greetingString() : String {
        return "Hello! My name is "+this.name+".";
    }
}

export {Person}