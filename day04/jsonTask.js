//상품명과 가격을 JSON으로 만든다.
//위 JSON을 Object 객체로 변환한다.
//각각의 프로퍼티 출력한다.
//JSON으로 변환한 뒤 다시 JS객체로 변환

let productJOSN = '{"name": "과자", "price": 3000}'
let product = JSON.parse(productJOSN);
console.log(product.name);
console.log(product.price);

productJOSN = JSON.stringify(product);
console.log(productJOSN);

