{/*
Utility component to to RBAC.
isAuthenticated: if the user has been authenticated;
hasRole: if the user has any role specified by roles;
isAllowed: if the user has any right specified by rights.
*/}
export const isAuthenticated = user => !!user;
export const hasRole = (user, roles) =>
  roles.some((role) => user.roles.includes(role));
export const isAllowed = (user, rights) =>
  rights.some((right) => user.rights.includes(right));