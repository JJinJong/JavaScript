//기차에 등급별 좌석을 구현하자!
//3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

//[1]
//이름 : 홍길동
//나이 : 20
//등급 : 1

//[2]
//이름 : 이순신
//나이 : 40
//등급 : 2

//[3]
//이름 : 장보고
//나이 : 19
//등급 : 3

/*  
    author : jsj
    content: 객체 안에 3개의 객체 담기
*/
//3명은 기차 한 대에 모두 탑승한다.
//기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.



let train = {
    customer1: {
        pk: "[1]",
        name: "홍길동",
        age: 20,
        grade: 1
    },
    customer2: {
        pk: "[2]",
        name: "이순신",
        age: 40,
        grade: 2
    },
    customer3: {
        pk: "[3]",
        name: "장보고",
        age: 19,
        grade: 3
    }
  }
  
  console.log(train.customer1.grade);