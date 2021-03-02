const validationService = (type, string) => {
  const namePattern = /^[A-Za-z \s]+$/;
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const idPattern = /^\d+$/;
  const companyPattern = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
  const zipPattern = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/;

  if (type === 'name') {
    return namePattern.test(string);
  } else if (type === 'email') {
    return emailPattern.test(string);
  } else if (type === 'id') {
    return idPattern.test(string);
  } else if (type === 'company') {
    return companyPattern.test(string);
  } else if (type === 'zip') {
    return zipPattern.test(string);
  }
};

export default validationService;
