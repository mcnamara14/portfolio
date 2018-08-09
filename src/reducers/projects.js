export const projects = (state = [], action) => {
  switch (action.type) {
    case 'STORE_PROJECT':
      return [...state, {
        image: action.image, 
        title: action.title, 
        dates: action.dates, 
        company: action.company,
        projectInfoTitle: action.projectInfoTitle,
        projectInfoTitle1: action.projectInfoTitle1,
        projectInfoBodyP1: action.projectInfoBodyP1, 
        projectInfoBodyP2: action.projectInfoBodyP2, 
        projectInfoTitle2: action.projectInfoTitle2,
        projectInfoBodyP3: action.projectInfoBodyP3, 
        projectInfoBodyP4: action.projectInfoBodyP4, 
        active: action.active
      }];
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