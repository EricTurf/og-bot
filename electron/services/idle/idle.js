// let idling = { idleTime: null };

// const isIdling = () => {
//   const { idleTime } = idling;

//   return idleTime !== null;
// };

// const removeIdling = () => (idling['idleTime'] = null);

// const setIdleTime = timeToIdle => {
//   const minutesToIdle = parseInt(timeToIdle.split('min')[0]);

//   const idleTimeInMS = minutesToIdle * 60000;

//   idling['idleTime'] = idleTimeInMS;

//   setTimeout(removeIdling, idleTimeInMS);
// };

// const IdleService = {
//   isIdling,
//   setIdleTime,
//   removeIdling,
// };

// const makeIdleService = () => IdleService;

// export default makeIdleService;
