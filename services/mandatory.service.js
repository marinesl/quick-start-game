/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'first_name', 'last_name'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
        saveScore: ['score']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//