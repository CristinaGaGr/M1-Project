'use strict';

//Funciones para login, logut y register
//

//Log in

const $signUpButton = document.getElementById('sign-up-button');
const $signUpModal = document.getElementById('sign-up-modal');
const $navbarToggler = document.getElementsByClassName('navbar-toggler')[0];


$signUpButton.addEventListener('click', () => {
	if ($signUpModal.className.includes('fade-out')) {
		$signUpModal.className = $signUpModal.className.replace('fade-out', 'fade-in')
	} else {
		$signUpModal.className += ' ' + 'fade-in';
	}
	document.body.style.overflow = 'hidden';
	$navbarToggler.click();
});


const $password = document.getElementById('password');
const $repeatPassword = document.getElementById('repeatPassword');
const $username = document.getElementById('username');
const $email = document.getElementById('email');


const $check = document.getElementById('check');

const $signUpForm = document.getElementById('sign-up-form');

$signUpForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);
	const username = formData.get('username');
	const email = formData.get('email');
	const password = formData.get('password');
	const repeatPassword = formData.get('repeatPassword');


	const formValidator = new FormValidator(username, password, email, repeatPassword);
	let hasError = false;

	formValidator.deleteErrors();

	if (!formValidator.checkUserName()) {
		hasError = true;
		formValidator.errorCreator('Username is required', $username);
	}

	if (!formValidator.checkEmail()) {
		hasError = true;
		formValidator.errorCreator('Email must have a correct format', $email);
	}

	if (!formValidator.checkPassword()) {
		hasError = true;
		formValidator.errorCreator('Password not valid', $password);
	}

	if (!formValidator.checkRepeatPassword()) {
		hasError = true;
		formValidator.errorCreator('Passwords do not match', $repeatPassword);
	}


	if (!hasError) {
		const user = new User(username, email, password);
		localStorage.setItem(username, JSON.stringify(user));
		e.target.reset();
		$signUpModal.className = $signUpModal.className.replace('fade-in', 'fade-out');
		document.body.style.overflow = 'auto';
		$check.className = 'check';
		removeCheckAnimation();
	}
});

//Sign-in

const $signInButton = document.getElementById('sign-in-button');
const $signInModal = document.getElementById('sign-in-modal');
const $username2 = document.getElementById('username2');
const $password2 = document.getElementById('password2');


$signInButton.addEventListener('click', () => {
	if ($signInModal.className.includes('fade-out')) {
		$signInModal.className = $signInModal.className.replace('fade-out', 'fade-in')
	} else {
		$signInModal.className += ' ' + 'fade-in';
	}
	document.body.style.overflow = 'hidden';
	$navbarToggler.click();
});


const $signInForm = document.getElementById('sign-in-form');
const $nav = document.getElementsByTagName('nav');


$signInForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);
	const username = formData.get('username');
	const password = formData.get('password');

	let user = localStorage.getItem(username);
	user = JSON.parse(user);

	const formValidator = new FormValidatorSignIn(username, password, user);
	let hasError = false;

	formValidator.deleteErrors();


	if (!formValidator.checkUserName()) {
		hasError = true;
		formValidator.errorCreator('Username is required', $username2);
	}

	if (!formValidator.checkPassword()) {
		hasError = true;
		formValidator.errorCreator('Password is required', $password2);
	}

	if (!hasError && !formValidator.checkUser()) {
		hasError = true;
		formValidator.errorCreator('User does not exist', $username2);
	}

	if (formValidator.checkUser() && !formValidator.validatePassword()) {
		hasError = true;
		formValidator.errorCreator('Incorrect password', $password2);
	}

	if (!hasError) {
		e.target.reset();
		$signInModal.className = $signInModal.className.replace('fade-in', 'fade-out');
		document.body.style.overflow = 'auto';

		$check.className = 'check';
		removeCheckAnimation();


		$signInButton.innerText = `Hello ${username}`;
		$signUpButton.innerText = '';

		let d = document.getElementById('sign-in-button');
		d.className += ' confirmed';
	}

});

const removeCheckAnimation = () => {
	setTimeout(() => {
		$check.className = '';
	}, 2000);
};






