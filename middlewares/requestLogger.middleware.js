const { response, request } = require('express');

const requestLogger = (req = request, res = response, next) => {

    const { method, url, ip } = req;
    const userAgent = req.get('User-Agent') || '';
    const body = JSON.stringify(req.body) || '';
    const log = `[${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}] Método: ${method}, URL: ${url}, User-Agent: ${userAgent}, Body: ${body}\n`;
    console.log(log);

    next();

}

module.exports = {
    requestLogger
}