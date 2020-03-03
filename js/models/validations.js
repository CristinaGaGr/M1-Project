//Class validations

class FormValidator {
	constructor(username, password, email, confirmPassword) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}

	checkUserName() {
		return this.username;
	}

	checkEmail() {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email);
	}

	checkPassword() {
		return this.password && this.password.length >= 6;
	}

	checkRepeatPassword() {
		return this.confirmPassword === this.password;
	}

	errorCreator(message, location) {
		let small = document.createElement('small');
		small.setAttribute('class', 'form-text');
		small.innerHTML = message;
		location.parentNode.insertBefore(small, location.nextSibling);
	}

	deleteErrors (){
		let errors = [...document.getElementsByClassName('form-text')];
		errors.forEach(error => error.remove());
	}
}
