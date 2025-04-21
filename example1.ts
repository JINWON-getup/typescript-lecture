// TODO: divide라고 하는 함수를 만들고
// TODO: Item이라고 하는 커스텀 타입을 만들어서
// TODO: 이 role의 그리고 어떤 값인지에 따라
// TODO: 각각의 값을 구분하여 console.log()로 출력하는 함수를 만들어보세요.
// ? 힌트: enum 타입 활용, switch문 활용

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

const divide = (role: Role) => {
  switch (role) {
    case Role.ADMIN:
      console.log('ADMIN');
      break;

    case Role.USER:
      console.log('USER');
      break;

    case Role.GUEST:
      console.log('GUEST');
      break;

    default:
      break;
  }
};

divide(Role.GUEST);

// TODO: SimpleUser라고 하는 객체 타입을 만들고, 필드는 name(이름), age(나이)
// TODO: logUser라는 함수를 만들어서 SimpleUser 타입의 인자를 받고
// TODO: name과 age를 console.log로 출력하는 함수를 만들어보세요.
// TODO: 최소 3명 이상의 simple 사용자를 만들어서 반복적으로 logUser 함수를 호출하도록 코드를 작성해보세요.

interface SimpleUser {
  name: string;
  age: number;
}

const logUser = (user: SimpleUser) => {
  console.log(
    `이름: ${user.name}, 나이: ${user.age}`,
  );
};

const users: SimpleUser[] = [
  { name: 'apple', age: 26 },
  { name: 'banana', age: 27 },
  { name: 'cherry', age: 28 },
];

users.forEach(logUser);

console.log(
  '---------------------------------------------',
);
console.log(
  '---------------------------------------------',
);
console.log(
  '---------------------------------------------',
);

// #1
// TODO: dayjs 를 활용한 날짜 포맷 함수를 만들어야 합니다. 함수 이름은 formatDate() 로 하고 Date 타입의 값을 받아와서 ‘YYYY.MM.DD’ 형태로 날짜가 문자열로 포맷된 값으로 반환하게 되어야 합니다. (TS의 타입 부여가 잘 되어야 합니다.)

// TODO: 아래 someSchedule 객체의 각 날짜를 formatDate 함수로 포맷된 값으로 변경되도록 처리한 후 log로 띄어 확인해보세요.

import dayjs from 'dayjs';

const someSchedule = {
  study: '2025-04-03',
  election: '2025-06-03',
  trip: '2025-08-01',
};

// TODO: 날짜 포맷..
const formatDate = (date: Date) => {
  const day = dayjs(date);
  return day.format('YYYY.MM.DD');
};

someSchedule.study = formatDate(
  new Date(someSchedule.study),
);
someSchedule.election = formatDate(
  new Date(someSchedule.election),
);
someSchedule.trip = formatDate(
  new Date(someSchedule.trip),
);

console.log(someSchedule);

// function formatDate(someSchedule:string) {
//   const study = dayjs('2025-04-03');
//   const election = dayjs('2025-06-03');
//   const trip = dayjs('2025-08-01');

//   const formatted1 = study.format(
//     'YYYY.MM.DD'
//   )
//   const formatted2 = election.format(
//     'YYYY.MM.DD'
//   )
//   const formatted3 = trip.format(
//     'YYYY.MM.DD'
//   )
//   console.log('study: ', formatted1);
//   console.log('election: ', formatted2);
//   console.log('trip: ', formatted3);
// }
