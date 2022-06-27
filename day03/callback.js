//callback
//JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하고,
//함수를 리턴할 수도 있다.
function mul(num1, num2, callback){
    //외부에서 callback으로 함수를 전달했다면
    if(callback){
        //매개변수로 결과를 전달해준다.
        callback(num1 * num2);
    }
}

function print2(result){
    console.log(result);
}

mul(3, 9, print2);

//상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
//1. 상품명과 가격, 개수는 A함수에서 전달받는다.
function list (product, price, num, callback){
    let prices = price * num;
    if(callback){
        callback(product, prices);
    }
}

//2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
function print(productName, prices){
    console.log(productName + prices)
}

//3. A함수는 B함수를 callback함수로 전달받는다.
list("과자", 3000, 10, print);

// function pay(name, price, count, callback){
//     let total = price * count;
//     callback(name, total);
// }

