class AcessModifiers {
    public publicProperty: unknown;
    protected protectedProperty: unknown;
    private privateProperty: unknown;

    public publicMethod(){
        
    }
    protected protectedMethod(){
        this.protectedProperty;
        this.privateMethod();
    }
    private privateMethod(){

    }
}

const acessModifiers = new AcessModifiers();

acessModifiers.publicProperty
acessModifiers.publicMethod()

class AcessModifiersInheritance extends AcessModifiers {
    method() {
        this.protectedProperty;
        this.protectedMethod();
    }
}