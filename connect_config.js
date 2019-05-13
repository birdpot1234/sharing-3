
const dbConnectData_focusCare_dev = {
    client: 'mysql',
    connection: {
        user: 'mobileapp',
        password: 'Mobile_1234',
        host: '13.229.199.200', // You can use 'localhost\\instance' to connect to named instance
        database: 'focusCare_dev'
    }
}
const dbConnectData_focusCare = {
    client: 'mysql',
    connection: {
        user: 'mobileapp',
        password: 'Mobile_1234',
        host: '13.229.199.200', // You can use 'localhost\\instance' to connect to named instance
        database: 'focusCare'
    }
}


module.exports = {
    dbConnectData_focusCare: dbConnectData_focusCare,
    dbConnectData_focusCare_dev: dbConnectData_focusCare_dev,
};