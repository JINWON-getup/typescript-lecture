// #5
// TODO: fetch() 함수 사용에 대한 실습 문제입니다.
// TODO: jsonplaceholder의 Todo 리스트 API를 사용해서, title 값이 velit soluta adipisci molestias reiciendis harum 인 데이터의 id 값을 찾고 그 id 값을 console.log로 출력 해보세요.
// ? API URL: https://jsonplaceholder.typicode.com/todos

// TODO: API에서 반환하는 결과 데이터의 JSON 구조를 살펴보고, 배열에 포함된 각 Todo 아이템의 interface 타입을 정의하세요. 그리고 정의된 Todo의 title 값을 비교해서 velit soluta adipisci molestias reiciendis harum 와 title이 일치하는 Todo의 id 값을 찾습니다.

// ? fetch() 결과 데이터는 json() 메소드로 json string으로 변환할수 있습니다.
// const response = await fetch(url);
// const jsonString = await response.json();

// ? as 키워드를 사용하면 코드로 타입을 강제적으로 적용할 수 있습니다.
// const todos = noTypeData as Todo[]; // ? 배열 타입으로 직접 주입

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos',
  );
  const todos = await response.json();
  return todos as Todo[];
};

const main = async () => {
  // TODO: fetchTodos를 통해 반환받은 데이터에서 배열의 todo 중 title 일치 확인하여 id 출력
  const result = await fetchTodos();

  const title =
    'velit soluta adipisci molestias reiciendis harum';
  const todo = result.find((item) => item.title === title);
  if (todo) {
    console.log('id:', todo.id);
  } else {
    console.log('Todo not found');
  }
};

main();