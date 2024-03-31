class Car {
  constructor() {
    // 경주에 참여하는 자동차들과 시도 횟수! (게임을 진행하는데 필요한 정보)
    this.rasingInfo = { rasingCarList: [], playCount: 0 };

    // 각 자동차 상태들의 배열
    //[{carNames: [], forward: 0},{carNames: [], forward: 0}]
    this.rasingCarList = [];

    //경주 횟수
    this.playCount = 0;
  }

  //경주를 진행하는데 사용될 rasingInfo를 초기화
  initRasingInfo = async (carNames, playCount) => {
    carNames.forEach((list, index) => {
      this.rasingCarList[index] = { carName: list, forward: 0 };
    });

    this.rasingInfo.rasingCarList = this.rasingCarList;
    this.rasingInfo.playCount = playCount;
  };

  get getPlayCount() {
    return this.playCount;
  }

  get getRasingInfo() {
    return this.rasingInfo;
  }

  get getRasingCarList() {
    return this.rasingCarList;
  }

  set setCarName(cars) {
    this.rasingInfo.rasingCarList = cars;
  }

  set setPlayCount(playCount) {
    this.rasingInfo.playCount = playCount;
  }
}

export default Car;
