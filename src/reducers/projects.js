export const projects = (state = [], action) => {
  switch (action.type) {
    case 'STORE_PROJECT':
      return [...state, {image: action.image, title: action.title, year: action.year, company: action.company, active: action.active}];
    case 'ACTIVATE_PROJECT':
      return state.map(project => {
        if (action.title === project.title) {
          return Object.assign(project, {active: true})
        } else {
          return Object.assign(project, {active: false})
        }
      });
    default:
      return state;
  }
};