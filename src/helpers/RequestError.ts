const messages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbbiden',
  404: 'Not Found',
  409: 'Conflict'
};

type StatusCode = 400 | 401 | 403 | 404 | 409;

class CustomError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  status?: StatusCode;
}

const RequestError = (status: StatusCode, message = messages[status]) => {
  const error = new CustomError(message);
  error.status = status;
  return error;
};

export default RequestError;
