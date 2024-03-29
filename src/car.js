class Car {
  constructor() {
    this.rasingInfo = { carNames: [], playCount: 0 };
    this.carNames = [];
    this.playCount = 0;
  }

  get getCarNames() {
    return this.name;
  }

  get getPlayCount() {
    return this.playCount;
  }

  get getRasingInfo() {
    return this.rasingInfo;
  }

  set setCarName(cars) {
    this.carNames = cars;
  }

  set setPlayCount(playCount) {
    this.playCount = playCount;
  }
}

export default Car;
