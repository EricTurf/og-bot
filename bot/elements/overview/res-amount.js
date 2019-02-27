import log from '../../helpers/log';
const getResAmount = resource => () => {
  const x = document
    .getElementById(`resources_${resource}`)
    .innerHTML.split('.')
    .join('');

  log(`${x}`);

  return x;
};

export default getResAmount;
