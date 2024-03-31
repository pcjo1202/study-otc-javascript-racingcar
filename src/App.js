import Car from './model/car.js';
import RasingController from './controller/controller.js';

const carInfo = new Car();

class App {
  constructor() {
    // this.rasingInfo = carInfo.getRasingInfo;
  }
  async play() {
    const rasingController = new RasingController(carInfo);

    //입력을 받아온다.
    await rasingController.prepareRasing();

    //경주를 진행한다.
    await rasingController.startRacing();
  }
}

export default App;
