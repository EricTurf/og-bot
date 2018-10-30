let eventQueue = [];

const EventQueue = {
  get() {
    return eventQueue;
  },
  push(event) {
    eventQueue = [...eventQueue, event];
  },
  unshift(event) {
    eventQueue = [event, ...eventQueue];
  },
};

const makeEventQueue = () => EventQueue;

export default makeEventQueue;
