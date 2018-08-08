export const storeProject = (image, company, title, year, active) => ({
  type: 'STORE_PROJECT',
  image,
  company,
  title,
  year,
  active
});

export const activateProject = (title) => ({
  type: 'ACTIVATE_PROJECT',
  title
});

export const deactivateProject = () => ({
  type: 'DEACTIVATE_PROJECT'
});