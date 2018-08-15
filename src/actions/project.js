export const storeProject = (
  company, 
  title, 
  dates, 
  projectInfoTitle, 
  projectInfoTitle1, 
  projectInfoBodyP1, 
  projectInfoBodyP2,
  projectInfoTitle2, 
  projectInfoBodyP3, 
  projectInfoBodyP4,  
  active) => ({
  type: 'STORE_PROJECT',
  company,
  title,
  dates,
  projectInfoTitle,
  projectInfoTitle1,
  projectInfoBodyP1,
  projectInfoBodyP2,
  projectInfoTitle2, 
  projectInfoBodyP3, 
  projectInfoBodyP4, 
  active
});

export const activateProject = (title) => ({
  type: 'ACTIVATE_PROJECT',
  title
});