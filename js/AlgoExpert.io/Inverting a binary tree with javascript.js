//https://stackoverflow.com/questions/60271383/inverting-a-binary-tree-with-javascript

class Demo {
    overload(a) {
        console.log('hi');
    }
    overload() {
        console.log('bye');
    }
    overload(a, b) {
        console.log('wow');
    }
}

const d = new Demo();
d.overload();
d.overload(1);
d.overload(1, 2);