// // 기명함수
// function sum(x, y) {
//   return x + y;
// }

// // 임명함수
// const sumu = function (x, y) {
//   return x + y;
// };

// const a = sum(1, 3);
// const b = sum(4, 12);

// console.log(a);
// console.log(b);
// console.log(a + b);

// // arguments
// function sums() {
//   console.log(arguments);
//   return arguments[0] + arguments[1];
// }

// // 인수가 배열로 만들어짐
// console.log(sums(7, 3));

// // 화살표 함수
// // () => {} vs function () {}

// const double = function (x) {
//   return x * 2;
// };
// console.log("double: ", double(7));

// const doubleArrow = x => x * 2;
// const doubleArrow2 = x => ({name: 'dongseok'}); // 객체 데이터는 ()로 한번 감싸줘야함.

// console.log("doubleArrow", doubleArrow(7));
// console.log("doubleArrow2", doubleArrow2(7));

// 즉시실행함수 IIFE(Immediately-Invoked Function Expression)
// 소괄호로 이름없는 함수를 감싸기

// const a = 2;
// (function(){
//   console.log(a * 2)
// })()
// //=====================================================================================
// // 모달 클릭시 자동으로 email 폼을 focus 해줌
// const emailInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function(){
//   emailInputEl.focus()
// })

// //=====================================================================================

// tooltip은 초기화를 직접 해줘야함.
// via javascript
// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import Dropdown from 'bootstrap/js/dist/dropdown'
// 개별 import로 최적화

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))