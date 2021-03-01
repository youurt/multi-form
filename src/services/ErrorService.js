const errorService = (errs) => {
  if (errs.length === 0) {
    return null;
  } else if (errs.length === 1) {
    return `${errs[0]}`;
  } else if (errs.length === 2) {
    return ` ${errs[0]} und ${errs[1]}`;
  } else {
    return `${errs[0]}, ${errs[1]}, ${errs[2]} und ${errs[3]}`;
  }
};

export default errorService;
