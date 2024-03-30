import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  constructor() {}
  //경주에 참여할 자동차를 입력 받음
  async inputCars() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : '
      );

      const cars = input.split(',');
      //예외 처리

      return cars;
    } catch (error) {}
  }

  // 경주 시도할 횟수를 입력 받음
  async inputRasingCount() {
    try {
      const count = await MissionUtils.Console.readLineAsync('시도할 횟수 : ');

      //예외 처리
      return count;
    } catch (error) {}
  }
}

export default Input;
