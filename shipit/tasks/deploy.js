const path = require('path');
const { dateHash, trailing } = require('../lib/helpers');
const { merge, getReleasesPath, getCurrentPath } = require('../lib/config');
const { mkdir, gitRev, revision, symlink, keepLastOf } = require('../lib/commands');

module.exports = shipit => {
	shipit.task('deploy', () => {
		const config = merge(shipit.config);

		/**
		 * Logs message and returns a resolved Promise.
		 * @param {string} msg - Message to be logged
		 * @returns {Promise}
		 */
		const start = msg => {
			shipit.log(msg);
			return Promise.resolve(true);
		};

		/**
		 * Makes a REVISION file in local `source` path.
		 * @param {string} source - Local source path
		 * @returns {Promise}
		 */
		const makeRevision = source => shipit.local(gitRev(config.branch)).then(response =>
			shipit.local(revision(source, response.stdout.trim()))
		);

		const into = dateHash();
		const source = trailing('/', config.from);
		const releases = getReleasesPath(config);
		const current = getCurrentPath(config);
		const dest = path.join(releases, into);

		return start(`Deploy to ${dest}`)
			.then(() => makeRevision(source))
			.then(() => shipit.remote(mkdir(dest)))
			.then(() => shipit.copyToRemote(source, dest))
			.then(() => shipit.remote(symlink(dest, current)))
			.then(() => shipit.remote(keepLastOf(config.keepReleases, releases)))
			.then(() => shipit.log(`Release ${into} deployed`));
	});
};
