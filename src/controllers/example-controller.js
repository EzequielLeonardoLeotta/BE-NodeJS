const {example} = require('../services/example-service'); 

const exampleRoute = async (req, res) => {
    try {
        await example(req, res);
    } catch (e) {
        throw e;
    }
};

module.exports = {exampleRoute}