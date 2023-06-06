const buttonEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const result = document.getElementById('result');

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === '') alert('Please enter your birthday Please');
  else {
    const age = getAge(birthdayValue);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);

  let currentAge = currentDate.getFullYear() - birthDate.getFullYear();
  const months = currentDate.getMonth() - birthDate.getMonth();

  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    currentAge--;
  }
  result.textContent = `Your age is ${currentAge} years old`;
  console.log(currentAge);
  return currentAge;
}
buttonEl.addEventListener('click', calculateAge);
