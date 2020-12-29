export default ({ isAuth, values, errors }) => {
  const rules = {
    email: ( value) => {
      if (!value) {
        errors.email = "Введите ваш Е-mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Не правильный формат E-mail";
      }
    },
    password: ( value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value))
        errors.password = isAuth ? "" : "Слишком простой пароль";
    },
  };

  Object.keys(values).forEach(
    (key) => rules[key] && rules[key]( values[key])
  );
};
