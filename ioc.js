'use strict';
/**
 * This file is uttermost importance.
 * Gives a solid reference to all components, based on __dirname, a.k.a.
 * the directory in which this file resides.
 */
var
  ioc = require('simple-ioc'),
  container = ioc.getContainer(),
  iocLog;

// setup adequate logging option for production and development/test/anything
if (process.env.NODE_ENV === 'production') iocLog = 'bunyanJson';
else iocLog = 'consoleReadable';

ioc.setSettings({ log: { output: iocLog } });
container.registerIocLog('log').autoRegisterPath('components');
module.exports = container;
