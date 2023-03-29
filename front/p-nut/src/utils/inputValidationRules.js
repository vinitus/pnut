/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */

function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export function requiredRule(inputName) {
  return createValidationRule(
    "required",
    `${inputName}이 필요합니다.`,
    (inputValue, formObj) => inputValue.length !== 0
  );
}

export function minLengthRule(inputName, minCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName}은 ${minCharacters}이상이어야 합니다.`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    "passwordMatch",
    `비밀번호가 일치하지 않습니다.`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
}
