import { EventEmitter } from 'events';
import { login, openUni, getPlanetInfo } from './actions';

const _events = new EventEmitter();

_events.on('login', login);

_events.on('open-uni', openUni);

_events.on('overview', getPlanetInfo);

export default _events;
