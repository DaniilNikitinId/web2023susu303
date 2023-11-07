/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        let diffX = b.x - a.x;
        let diffY = b.y - a.y;
        let diffZ = b.z - a.z;
        
        return Math.sqrt(diffX ** 2 + diffY ** 2 + diffZ ** 2);
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {

    constructor(initArray = []) {
        this.queue = initArray;
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.size() === 0) return undefined;
        return this.queue.shift();
    }

    isEmpty() {
        if (this.size() === 0) return true;
        return false;
    }

    size() {
        return this.queue.length;
    }


}

module.exports = {
    Point,
    Point3D,
    Queue,
};
