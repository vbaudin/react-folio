import * as R from 'ramda';

const selectApp = R.prop('app');
export const selectTab = state => R.pipe(
  state => selectApp(state),
  (state) => R.prop('tab', state)
)(state);

// export const selectuntruc = state => {
//   const tab = selectTab(state)
//   const toto = selectToot(state)
//   return tab + 'otot'
// };