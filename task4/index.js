// Написать пример класса автомобилей Car -> Mercedes =>BMW => AUDI
// У car есть поля двигатель, количество мест, количество дверей, объем двигателя, год машины. Так же есть методы, signal(), приватный метод start() его можно вызвать используя get, публичный метод stop(). getAlInfoForCar() Так же должен быть реализован метод. Который вернет параметры машины в зависимости от вызванного класса.

class Car {
	constructor(engine, quantityOfSeats, doors, engineVolume, year) {
		this.engine = engine
		this.seats = quantityOfSeats
		this.doors = doors
		this.engineVolume = engineVolume
		this.year = year
	}

	#start = ''
	getStart() {
		console.log('Start')
		return this.start
	}
	signal() {
		console.log('Beep-Beep')
	}
	stop = () => console.log('stop')

	getAllinfoForCar() {
		console.log(
			` ${this.engine} ,${this.quantityOfSeats}, ${this.doors},${this.engineVolume},${this.year} `
		)
	}
}
const car = new Car('jfhjh', 3, 2, 500, '2020')

class Mersedes extends Car {
	constructor(engine, quantityOfSeats, doors, engineVolume, year) {
		super(engine, quantityOfSeats, doors, engineVolume, year)
	}
}
const mers = new Mersedes('hrr', 5, 6, 56, '2011')

class BMW extends Car {
	constructor(engine, quantityOfSeats, doors, engineVolume, year) {
		super(engine, quantityOfSeats, doors, engineVolume, year)
	}
}

const bumer = new BMW('hgj', 7, 10, 4, '2016')

class Audi extends Car {
	constructor(engine, quantityOfSeats, doors, engineVolume, year) {
		super(engine, quantityOfSeats, doors, engineVolume, year)
	}
}

const audi = new Audi('jshfbk', 4, 5, 10, '2019')

console.log(car)
car.signal()
car.stop()
car.getStart()
mers.getAllinfoForCar()
bumer.getAllinfoForCar()
audi.getAllinfoForCar()
