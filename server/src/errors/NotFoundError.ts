import APIError from "./APIError";

class NotFoundError extends APIError {
  constructor(message: string) {
    super(404, message);
  }
}

export default NotFoundError;
