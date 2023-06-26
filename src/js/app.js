export default class Validator {
  static validateName(name) {
    return /^[a-z]+[a-z-_\d]*[a-z]$/i.test(name) && !/\d{4}/.test(name);
  }
}
