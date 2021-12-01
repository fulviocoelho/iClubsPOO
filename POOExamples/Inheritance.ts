abstract class AbstractClassInheritance {
    abstract abstractMethod(value: unknown): void
}

class CommunClassInheritance extends AbstractClassInheritance {
    abstractMethod(value: unknown): void {

    }
    classMethod(value: unknown): void {
        console.log(value);
    }
}

const communClassInheritance = new CommunClassInheritance();
communClassInheritance.abstractMethod('');
communClassInheritance.classMethod('');