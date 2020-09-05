export const formSubmitHandler = (form) => {
  const message = {};
  Object.values(form).map((val) => (message[val.attrs.name] = val.value));

  if (message.name) {
    const fullname = message.name.split(" ");
    message["firstname"] = fullname[0];
    message["lastname"] = fullname[1];
  }

  return message;
};

export const formChangeHandler = (form, input, value) => {
  const updateform = { ...form };

  updateform[input] = {
    ...form[input],
    value: value,
  };

  return updateform;
};
