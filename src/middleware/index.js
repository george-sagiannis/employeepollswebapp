import thunk from "redux-thunk";
import logger from "./logger"; // Import your logger middleware

// Export the middleware functions as an array
const middleware = [thunk, logger];

export default middleware;
