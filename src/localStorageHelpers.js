

/**
 * Gets user Token
 * @returns string of user token
 */
export const getUserName = () => localStorage.getItem('v_vs_p_mail_6441_token');

/**
 * Stores user token
 * @param {string} token : Takes in string of token 
 */
export const setUserName = (token) => localStorage.setItem('v_vs_p_mail_6441_token', token);

/**
 * Gets user Id
 * @returns {number} : user Id
 */
export const getUserId = () => parseInt(localStorage.getItem('v_vs_p_mail_6441_Id'));

/**
 * Stores user Id
 * @param {number} Id : sets id
 */
export const setUserId = (Id) => localStorage.setItem('v_vs_p_mail_6441_Id', Id);

/**
 * Removes name and id (i.e. Logging out OR account reset)
 */
export const removeNameAndId = () => {
  localStorage.removeItem('v_vs_p_mail_6441_token');
  localStorage.removeItem('v_vs_p_mail_6441_Id');
}

export const MAX_POINTS = 5;

// Helpers to get from localStorage
export const getSpeed = () => parseInt(localStorage.getItem('speed') || MAX_POINTS);
export const getResources = () => parseInt(localStorage.getItem('resources') || MAX_POINTS);
export const getHappiness = () => parseInt(localStorage.getItem('happiness') || MAX_POINTS);

// Setters
export const setSpeed = (val) => localStorage.setItem('speed', val);
export const setResources = (val) => localStorage.setItem('resources', val);
export const setHappiness = (val) => localStorage.setItem('happiness', val);