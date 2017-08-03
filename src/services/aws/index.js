let axios = require('axios');

const AWSApiCall = {
    getDataFromTable(tableName) {
        return new Promise( (resolve, reject) => {
            axios.post('/getAllFromTable', {
                tableName: tableName,
                limit: 50
            }).then( (resp) => {
                console.log(JSON.stringify(resp));
                resolve(resp);
            }).catch( (err) => {
                console.log("ERROR: " + JSON.stringify(err));
                reject(err)
            })
        });
    }
}

export default AWSApiCall;