const deploy = require('./shipit/tasks/deploy');
const rollback = require('./shipit/tasks/rollback');

module.exports = function (shipit) {
	deploy(shipit);
	rollback(shipit);
};
