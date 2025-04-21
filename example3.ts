// // #3
// // TODO: 2번 문제의 확장입니다. 장바구니 상품의 종류 타입인 Category 라는 enum을 정의하고, Category.FRUIT (과일)의 경우 무료로 판매한다고 합시다. 2번 문제에서 만든 코드를 적당히 수정하여 Category enum을 적용하고, 최소 1개 이상의 과일을 장바구니에 추가하여 계산 결과를 확인해봅시다.

// enum Category {
//   FRUIT = 'fruit',
//   VEGETABLE = 'vegetable',
//   ACCESSORY = 'accessory',
// }

// interface Item {
//   name: string;
//   category: Category;
//   price: number;
//   quantity: number;
// }

// const apple: Item = {
//   name: 'apple',
//   category: Category.FRUIT,
//   price: 100,
//   quantity: 3,
// };

// const onion: Item = {
//   name: 'onion',
//   category: Category.VEGETABLE,
//   price: 50,
//   quantity: 2,
// };

// const watch: Item = {
//   name: 'watch',
//   category: Category.ACCESSORY,
//   price: 1000,
//   quantity: 1,
// };

// const cart: Item[] = [apple, onion, watch];

// const calcTotal = (items: Item[]) => {
//   let totalPrice = 0;
//   items.forEach((item) => {
//     if (item.category !== Category.FRUIT) {
//       totalPrice += item.price * item.quantity;
//     }
//   });
//   return totalPrice;
// };

// const total = calcTotal(cart);
// console.log('total:', total);
