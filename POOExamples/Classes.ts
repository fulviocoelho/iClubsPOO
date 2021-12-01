abstract class AbstractClass {
    abstract abstractMethod(value: unknown): void
}

const abstractClass = new AbstractClass();

class CommunClass {
    classMethod(value: unknown): void {
        console.log(value);
    }
}

const communClass = new CommunClass();