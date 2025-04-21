const string: string = 'Hello, World';
const number: number = 42;
const bigInt: bigint = 9898989898980n;
const boolean: boolean = true;
const nullType: null = null;
const undefinedType: undefined = undefined;
const anyType: any = 'This can be anything';

const array1: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
];
const array2: boolean[] = [boolean, false];

// Type PascalCase로 작성
type StringOrNumberType = string | number;

// 자바스크립트 코드는 cameCase로 작성
const constantValue: StringOrNumberType = 'Hello';


// type user = {}
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string;
}

const userA: User = {
  name: 'Jin Won',
  age: 21,
  isAdmin: true,
  email: 'usera@example.com',
};

const userB: User = {
  name: 'Jin Two',
  age: 22,
  isAdmin: false,
};

// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// }

// const someUserRole: Role = Role.ADMIN;

// const func = (arg: string): string => {
//   console.log(arg);
//   return 'Hello, Typescript';
// };

// const result = func('Hello, World!!');
