import Input from '../view/input.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Output from '../view/output.js';

class RacingController {
  constructor(carInfo) {
    this.carInfo = carInfo;

    // this.mockupData = {
    //   racingCarList: [
    //     { carName: 'pobi', forward: 0 },
    //     { carName: 'woni', forward: 0 },
    //     { carName: 'jun', forward: 0 },
    //   ],
    //   playCount: '5',
    // };
  }

  prepareRacing = async () => {
    let { racingCarList, playCount, initRacingInfo } = this.carInfo;
    const racingInput = new Input();
    //1. 경주에 참여할 차 입력을 받는다
    racingCarList = await racingInput.inputCars();
    //2. 경주 시도횟수 입력 받는다.
    playCount = await racingInput.inputRacingCount();

    //3. 경주에 필요한 정보를 셋팅한다.
    await initRacingInfo(racingCarList, playCount);

    //return console.log(this.carInfo.racingInfo);
  };

  startRacing = async () => {
    const { racingCarList, playCount } = this.carInfo.racingInfo;
    const { Console } = MissionUtils;
    // const { racingCarList, playCount } = this.mockupData;

    let currentPlayCount = 0;
    const output = new Output();

    while (playCount > currentPlayCount) {
      //playCount 만큼 중첩된 결과를 출력
      racingCarList.forEach((car, index) => {
        this.round(car);
        //각각의 결과를 출력
        output.printRoundStatus(car);
      });
      Console.print('\n');

      currentPlayCount++;
    }

    //최종 결과
    output.printWinner(racingCarList);
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

export default RacingController;
