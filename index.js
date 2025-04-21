var string = 'Hello, World';
var number = 42;
var bigInt = 9898989898980n;
var boolean = true;
var nullType = null;
var undefinedType = undefined;
var anyType = 'This can be anything';
var array1 = [
    '1',
    '2',
    '3',
    '4',
    '5',
];
var array2 = [boolean, false];
// 자바스크립트 코드는 cameCase로 작성
var constantValue = 'Hello';
var Role;

(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));

var someUserRole = Role.ADMIN;
console.log(someUserRole);
