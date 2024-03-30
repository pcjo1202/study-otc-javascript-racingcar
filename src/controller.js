import Input from './input.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RasingController {
  constructor(carInfo) {
    this.carInfo = carInfo;
  }

  prepareRasing = async () => {
    let { rasingCarList, playCount, initRasingInfo } = this.carInfo;
    const rasingInput = new Input();
    //1. 경주에 참여할 차 입력을 받는다
    rasingCarList = await rasingInput.inputCars();
    //2. 경주 시도횟수 입력 받는다.
    playCount = await rasingInput.inputRasingCount();

    //3. 경주에 필요한 정보를 셋팅한다.
    await initRasingInfo(rasingCarList, playCount);

    return console.log(this.carInfo.rasingInfo);
  };

  startRacing = async () => {
    const { rasingInfo } = this.carInfo;
    let currentPlayCount = 0;

    console.log(this.randomPickNumber());

    // while (rasingInfo.playCount > currentPlayCount) {
    //   pass;
    // }
  };
}

export default RasingController;
