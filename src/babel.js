async function start() {
  return await Promise.resolve('async is working');
}

const a = 44;

start().then(console.log);

class Util {
  static id = Date.now();
}

import('lodash').then((_) => {
  console.log('lodash', _.random(0, 42, true));
})