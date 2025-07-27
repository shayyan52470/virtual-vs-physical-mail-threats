const parseBool = (text) => text == "true" ? true : false;

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

export const getChoseVirtual = () => parseBool(localStorage.getItem('choseVirtual'));

export const setChoseVirtual = (val) => localStorage.setItem('choseVirtual', val);

// For virtual mailing progress
export const getFoundPersonalEmail = () => parseBool(localStorage.getItem('foundPersonalEmail'));

export const setFoundPersonalEmail = (val) => localStorage.setItem('foundPersonalEmail', val);

export const getUsedWorkEmail = () => parseBool(localStorage.getItem('usedWorkEmail'));

export const setUsedWorkEmail = (val) => localStorage.setItem('usedWorkEmail', val);

export const getGotMimAttackEmail = () => parseBool(localStorage.getItem('gotMimAttackEmail'));

export const setGotMimAttackEmail = (val) => localStorage.setItem('gotMimAttackEmail', val);

// Decision 3 Virtual
export const getChosePersonalEmail = () => parseBool(localStorage.getItem('chosePersonalEmail'));

export const setChosePersonalEmail = (val) => localStorage.setItem('chosePersonalEmail', val);

export const getChoseNewEmail = () => parseBool(localStorage.getItem('choseNewEmail'));

export const setChoseNewEmail = (val) => localStorage.setItem('choseNewEmail', val);

export const getChoseNewWorkEmail = () => parseBool(localStorage.getItem('choseNewWorkEmail'));

export const setChoseNewWorkEmail = (val) => localStorage.setItem('choseNewWorkEmail', val);

export const getSecurePassword = () => parseBool(localStorage.getItem('hadSecurePassword'));


export const setSecurePassword = (val) => localStorage.setItem('hadSecurePassword', val);

export const getSecuredCommunications = () => parseBool(localStorage.getItem('hadSecuredCommunications'));


export const setSecuredCommunications = (val) => localStorage.setItem('hadSecuredCommunications', val);