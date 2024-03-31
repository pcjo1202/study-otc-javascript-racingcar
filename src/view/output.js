import { MissionUtils } from '@woowacourse/mission-utils';

const { Console } = MissionUtils;

class Output {
  //각 회차마다 상태를 출력 하는 함수
  printRoundStatus(car) {
    Console.print(`${car.carName} : ${'-'.repeat(car.forward)}`);
  }

  //최종 우승자를 출려하는 함수
  printWinner(racingCarList) {
    let winner = '';
    let maxForward = 0;

    Object.keys(racingCarList).forEach((key) => {
      maxForward = Math.max(maxForward, racingCarList[key].forward);
    });

    const maxForwardCar = Object.keys(racingCarList)
      .filter((key) => {
        return racingCarList[key].forward === maxForward;
      })
      .map((key) => {
        const name = racingCarList[key].carName;
        return name;
      });

    winner = maxForwardCar.join(',');

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default Output;
