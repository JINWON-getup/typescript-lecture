// #4
// TODO: fs 모듈과 JSON 데이터 활용에 대한 문제입니다. User 인터페이스를 만들고, 인자로 전달되는 user를 JSON 데이터인 users 배열에 추가하여 users.json 파일로 저장하도록 하세요. fs 모듈은 프로미스 형태의 것을 사용하면 됩니다.
// TODO: 한가지 규칙은 user의 id 값이 중복되면 안된다는 것입니다. (중복되는 경우 에러 발생하도록 처리)
// TODO: 2명 이상의 user 데이터를 추가하고 users.json에 데이터가 추가되어 저장되었는지 확인해보세요. 그리고 중복된 id를 가진 user 데이터를 추가 시도해보고 에러가 발생하는지 확인해보세요.
// ? `JSON.stringfy(data)` 로 자바스크립트 데이터를 직렬화 하여 JSON을 생성할 수 있습니다.
// ? `JSON.parse(jsonString)` 으로 직렬화된 JSON을 자바스크립트 데이터로 변환할 수 있습니다.
// ? `fs.writeFile(fileName, jsonString)` 메서드로 JSON 파일을 저장할 수 있습니다.
// ? `fs.readFile(jsonFile, 'utf-8’)` 메서드로 JSON 파일을 불러올 수 있습니다.
// ? 에러가 난 경우에 대해 예외처리는 try {} catch (error) {} 문을 활용할 수 있습니다.
import fs from 'fs/promises';

interface User {
  id: string; // 중복 되면 안됨
  name: string;
  age: number;
  isAdmin: boolean;
}

const saveUser = async (user: User) => {
  // users 초기화
  let jsonString: string;
  try {
    jsonString = await fs.readFile('users.json', 'utf-8');
    console.log(jsonString);
  } catch (error) {
    console.error('error', error);
    jsonString = JSON.stringify({ users: [] });
  }
  const data = JSON.parse(jsonString);
  console.log('data', data);

  // users 배열에서 user id 중복체크
  const userExists = data.users.some(
    (item: User) => item.id === user.id,
  );
  if (userExists) {
    throw new Error('User already exists');
  }

  // users 배열에 user 추가
  data.users.push(user);
  console.log('data', data);

  await fs.writeFile('users.json', JSON.stringify(data));
};

const main = async () => {
  const users = [
    {
      id: 'kim',
      name: 'kim',
      age: 20,
      isAdmin: false,
    },
    {
      id: 'lee',
      name: 'lee',
      age: 30,
      isAdmin: true,
    },
    {
      id: 'park',
      name: 'park',
      age: 40,
      isAdmin: false,
    },
  ];
  for (let i = 0; i < users.length; i++) {
    await saveUser(users[i]);
  }
};

main();