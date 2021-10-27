//로또 한게임생성

//1. 로또 번호는 6개
let lotto = []; //6개로 값이 나열될것이기 때문에 배열처리 - 값은 담지 않음

//6번처리 - 반복문
for (let i = 0; i < 6; i++) {
  //새로 추가될 숫자 : 1~45사이의 숫자가 랜덤하게 처리
  //random() : 0~1사이의 랜덤한 소수
  //floor() : 내림처리해서 정수로 변경
  let num = Math.floor(Math.random() * 44) + 1;

  //현재 상태는 같은 숫자가 나올수 있음
  //lotto라는 배열에 담긴 숫자와 같이 같으면 안됨
  for (let j in lotto) {
    if (num == lotto[j]) { //현재 새로나온 숫자가 기존 숫자와 같으면
      num = Math.floor(Math.random() * 44) + 1;
    }
  }

  //push() - 배열에 마지막에 값추가메서드
  lotto.push(num);
}

//오름차순으로 숫자 정렬
lotto.sort(function (a, b) {
  return a - b;
});

document.write('이번주 로또 번호 : ' + lotto);