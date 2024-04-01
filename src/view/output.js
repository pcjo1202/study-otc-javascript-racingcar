import { MissionUtils } from '@woowacourse/mission-utils';

const { Console } = MissionUtils;

class Output {
  //각 회차마다 상태를 출력 하는 함수
  printRoundStatus(car) {
    Console.print(`${car.carName} : ${'-'.repeat(car.forward)}`);
  }

  //최종 우승자를 출려하는 함수
  printWinner(racingCarList = []) {
    let winner = '';
    let maxForward = 0;

    racingCarList.forEach((list) => {
      maxForward = Math.max(maxForward, list.forward);
    });

    const maxForwardCar = racingCarList
      .filter((list) => {
        return list.forward === maxForward;
      })
      .map((list) => {
        return list.carName;
      });

    winner = maxForwardCar.join(',');

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default Output;
