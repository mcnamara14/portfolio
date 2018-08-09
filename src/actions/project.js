export const storeProject = (image, company, title, dates, projectInfoTitle, projectInfoTitle1, projectInfoBodyP1, projectInfoBodyP2, active) => ({
  type: 'STORE_PROJECT',
  image,
  company,
  title,
  dates,
  projectInfoTitle,
  projectInfoTitle1,
  projectInfoBodyP1,
  projectInfoBodyP2,
  active
});

export const activateProject = (title) => ({
  type: 'ACTIVATE_PROJECT',
  title
});