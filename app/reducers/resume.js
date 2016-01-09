function resume(state) {
  if (!state) {
    return require('../../data/resume.json');
  }
  return state;
}

export default resume;

