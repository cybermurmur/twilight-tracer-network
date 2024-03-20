const axios = require('axios');
const EventEmitter = require('eventemitter3');
const chalk = require('chalk');
const moment = require('moment');
const ip = require('ip');

class TwilightTracerNetwork extends EventEmitter {
  constructor() {
    super();
    this.startTime = moment();
  }

  async trace(url) {
    console.log(chalk.blue(`Tracing network path to ${url}...`));
    try {
      const response = await axios.get(url);
      const endTime = moment();
      const duration = endTime.diff(this.startTime);
      this.emit('completed', {
        url,
        statusCode: response.status,
        duration,
        ipAddress: ip.address()
      });
    } catch (error) {
      this.emit('error', error);
    }
  }
}

module.exports = TwilightTracerNetwork;
