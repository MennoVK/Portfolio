const birthDate = new Date(2004, 2, 2);
const today = new Date();

let currentYear = today.getFullYear();
let age = currentYear - birthDate.getFullYear();

const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

export {age, currentYear};
