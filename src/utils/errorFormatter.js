const errorFormatter = (e) => {
  const status = e.status || 500;
  let { message } = e;
  if (!message) {
    switch (status) {
      case 404:
        message = 'Not Found';
        break;
      case 400:
        message = 'Invalid Request';
        break;
      case 500:
      default:
        message = 'Internal Server Error';
        break;
    }
  }

  return { status, message };
};

module.exports = { errorFormatter };
