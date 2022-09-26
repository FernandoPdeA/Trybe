const userFullName = ({ firstName, lastName }) => `Olá! Meu nume é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };
  return callback(user);
};


console.log(getUser(userFullName));
console.log(getUser(userNationality))