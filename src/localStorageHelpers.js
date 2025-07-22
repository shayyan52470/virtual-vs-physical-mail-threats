
/**
 * 
 * @param {Object of structure: {token, id}} fetchResult 
 */
export const storeTokenAndId = (data) => {
  localStorage.setItem('lurkforwork_token', data.token);
  localStorage.setItem('lurkforwork_Id', data.userId);
}

/**
 * Gets user Token
 * @returns string of user token
 */
export const getUserToken = () => localStorage.getItem('lurkforwork_token');

/**
 * Stores user token
 * @param {string} token : Takes in string of token 
 */
export const setUserToken = (token) => localStorage.setItem('lurkforwork_token', token);

/**
 * Gets user Id
 * @returns {number} : user Id
 */
export const getUserId = () => parseInt(localStorage.getItem('lurkforwork_Id'));

/**
 * Stores user Id
 * @param {number} Id : sets id
 */
export const setUserId = (Id) => localStorage.setItem('lurkforwork_Id', Id);

/**
 * Removes token and id (i.e. Logging out OR account reset)
 */
export const removeTokenAndId = () => {
  localStorage.removeItem('lurkforwork_token');
  localStorage.removeItem('lurkforwork_Id');
}