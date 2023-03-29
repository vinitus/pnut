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

export function emailValidation() {
  return createValidationRule(
    "emailValidation",
    "유효하지 않은 형식입니다.",
    (email) => email.includes("@")
  );
}

export function requiredRule(input) {
  return createValidationRule(
    "required",
    `${input}이 필요합니다.`,
    (input) => input.length !== 0
  );
}

export function minLengthRule(input, minCharacters) {
  return createValidationRule(
    "minLength",
    `${input}은 ${minCharacters}이상이어야 합니다.`,
    (input) => input.length >= minCharacters
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    "passwordMatch",
    `비밀번호가 일치하지 않습니다.`,
    (password1, password2) => password1 === password2
  );
}
