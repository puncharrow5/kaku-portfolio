// 이메일 정규식
var regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 숫자 정규식
var regNumber = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;

export function isValidEmail(value: string) {
  return regEmail.test(value);
}

export function isValidNumber(value: string) {
  return regNumber.test(value);
}
