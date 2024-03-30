import Input from './input.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Output from './output.js';

class RasingController {
  constructor(carInfo) {
    this.carInfo = carInfo;

    // this.mockupData = {
    //   rasingCarList: [
    //     { carName: 'pobi', forward: 0 },
    //     { carName: 'woni', forward: 0 },
    //     { carName: 'jun', forward: 0 },
    //   ],
    //   playCount: '5',
    // };
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

    //return console.log(this.carInfo.rasingInfo);
  };

  startRacing = async () => {
    const { rasingCarList, playCount } = this.carInfo.rasingInfo;
    const { Console } = MissionUtils;
    // const { rasingCarList, playCount } = this.mockupData;

    let currentPlayCount = 0;
    const { printRoundStatus, printWinner } = new Output();

    while (playCount > currentPlayCount) {
      //playCount 만큼 중첩된 결과를 출력
      rasingCarList.forEach((car, index) => {
        this.round(car);
        //각각의 결과를 출력
        printRoundStatus(car);
      });
      Console.print('\n');

      currentPlayCount++;
    }

    //최종 결과
    printWinner(rasingCarList);
  };

  round(car) {
    const randomNumber = this.randomPickNumber();

    if (this.isForward(randomNumber)) {
      car.forward++;
    }
  }

  randomPickNumber() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);

    return number;
  }

  isForward(number) {
    //전진 여부를 파악
    if (number >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

export default RasingController;
