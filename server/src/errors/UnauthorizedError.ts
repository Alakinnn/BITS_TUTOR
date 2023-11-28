import APIError from "./APIError";

class UnauthorizedError extends APIError {
  constructor(message: string) {
    super(401, message);
  }
}

export default UnauthorizedError;
