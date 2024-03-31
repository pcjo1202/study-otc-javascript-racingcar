import { ERROR_MESSAGE } from './constants/message.js';

class ErrorHandler {
  static validateCount = (count) => {
    // 1. 입력이 0일 때
    if (count < 1) {
      throw new Error(ERROR_MESSAGE.MIN_PLAY_COUNT);
    }

    //2. 입력이 정수가 아니면
    if (isNaN(count)) {
      throw new Error(ERROR_MESSAGE.NO_NUMERIC);
    }
  };

  static validateCarName = (carNameList = []) => {
    //1. 입력이 없을 때
    if (carNameList.length === 1) {
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }

    //2. 이름이 5글자 이상일 때
    carNameList.forEach((value) => {
      if (value.length > 5) {
        throw new Error(ERROR_MESSAGE.NAME_LENGTH);
      }
    });

    //3. 이름이 중복이 되는 것이 있을 때
    carNameList.forEach((carName) => {
      if (carNameList.filter((name) => name === carName).length > 1) {
        throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
      }
    });
  };
}

export default ErrorHandler;
