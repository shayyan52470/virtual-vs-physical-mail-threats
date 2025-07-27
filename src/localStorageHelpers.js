
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