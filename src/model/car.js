class Car {
  constructor() {
    // 경주에 참여하는 자동차들과 시도 횟수! (게임을 진행하는데 필요한 정보)
    this.racingInfo = { racingCarList: [], playCount: 0 };

    // 각 자동차 상태들의 배열
    //[{carNames: [], forward: 0},{carNames: [], forward: 0}]
    this.racingCarList = [];

    //경주 횟수
    this.playCount = 0;
  }

  //경주를 진행하는데 사용될 racingInfo를 초기화
  initRacingInfo = async (carNames, playCount) => {
    carNames.forEach((list, index) => {
      this.racingCarList[index] = { carName: list, forward: 0 };
    });

    this.racingInfo.racingCarList = this.racingCarList;
    this.racingInfo.playCount = playCount;
  };

  get getPlayCount() {
    return this.playCount;
  }

  get getRacingInfo() {
    return this.racingInfo;
  }

  get getRacingCarList() {
    return this.racingCarList;
  }

  set setCarName(cars) {
    this.racingInfo.racingCarList = cars;
  }

  set setPlayCount(playCount) {
    this.racingInfo.playCount = playCount;
  }
}

export default Car;
