/* Description:
 *   Sets up the `request` library to deal with any system proxies that
 *   may exist.
 *
 * Dependencies:
 *   request
 *
 * Configuration:
 *   None
 */

const request = require('request');

module.exports = function (corsica) {
  const proxyUrl = corsica.config.http_proxy || corsica.config.HTTP_PROXY;
  corsica.request = corsica.request.defaults({ 'proxy': proxyUrl });
};
