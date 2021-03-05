import { Dispatcher } from "flux";

const dispatcher = new Dispatcher();

// Dispatcher should be singleton (one dispatcher per app)
export default dispatcher;