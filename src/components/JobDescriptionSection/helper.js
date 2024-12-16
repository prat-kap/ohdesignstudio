import { roles } from 'src/data/constants.js';

export function getRole(roleName) {
  return roles.find(({ role }) => roleName === role);
}
