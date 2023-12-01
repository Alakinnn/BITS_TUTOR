import APIError from "./APIError";

class BadRequestError extends APIError {
  constructor(message: string) {
    super(400, message);
  }
}

export default BadRequestError;
