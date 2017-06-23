export default class ValidityState {

    constructor({isValid, message}) {

        this.isValid = isValid;
        this.message = message || '';
    }


}
