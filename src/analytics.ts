import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let destroyed: boolean = false;
  const listener = (): number => counter++;
  $(document).on('click', listener);
  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },
    getClicks() {
      if (destroyed) {
        return `analytics is destroyed!total clicks=${counter}`
      }
      return counter;
    }
  }
}

window['analytics'] = createAnalytics();