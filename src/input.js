import { MissionUtils } from '@woowacourse/mission-utils';
import ErrorHandler from './errorHandler.js';

class Input {
  constructor() {}
  //경주에 참여할 자동차를 입력 받음
  async inputCars() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : '
      );

      const cars = input.split(',');

      ErrorHandler.validateCarName(cars);

      return cars;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  // 경주 시도할 횟수를 입력 받음
  async inputRasingCount() {
    try {
      const count = await MissionUtils.Console.readLineAsync('시도할 횟수 : ');

      //예외 처리
      ErrorHandler.validateCount(count);

      return count;
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }
}

export default Input;
