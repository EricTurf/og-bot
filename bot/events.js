import { EventEmitter } from "events";
import { login, openUni } from "./actions";

const _events = new EventEmitter();

_events.on("login", login);

_events.on("open-uni", openUni);

export default _events;
