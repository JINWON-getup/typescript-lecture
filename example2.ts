// #2
// TODO: calcTotal() 라는 장바구니에 있는 상품들의 총 가격을 계산하는 함수를 만들어야 합니다. 장바구니의 각 상품은 이름, 종류, 가격, 개수 4가지 값이 들어갈 수 있어야 합니다.

// TODO: 장바구니에 담긴 각 상품 타입을 정의하고, 장바구니를 인자로 받아서 총 상품 가격을 반환하는 calcTotal() 함수를 타입을 적절하게 적용해서 만들어보세요.

interface Item {
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const apple: Item = {
  name: 'apple',
  category: 'fruit',
  price: 100,
  quantity: 3,
};

const onion: Item = {
  name: 'onion',
  category: 'vegetable',
  price: 50,
  quantity: 2,
};

const watch: Item = {
  name: 'watch',
  category: 'accessory',
  price: 1000,
  quantity: 1,
};

const cart: Item[] = [apple, onion, watch];

const calcTotal = (items: Item[]) => {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};

const total = calcTotal(cart);
console.log('total:', total);
