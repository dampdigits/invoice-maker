class ApiError {
  constructor(error) {
    this.success = false;
    this.error = error;
  }
}

export default ApiError;
