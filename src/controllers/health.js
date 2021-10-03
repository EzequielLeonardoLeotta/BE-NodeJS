const healthCheck = (_req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        date: new Date().toDateString(),
        statusCode: res.statusCode,
        status: res.status,
    };
    res.send(healthCheck);
};

module.exports = {healthCheck} 