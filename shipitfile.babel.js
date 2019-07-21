const path = require('path');
const { mkdir, gitRev, revision, symlink, keepLastOf } = require('./shipit/lib/commands');
const { merge, getReleasesPath, getCurrentPath } = require('./shipit/lib/config');

/**
 * Returns an hash from date as `YYYYMMDDHHMMSS`.
 * @returns {string}
 */
const dateHash = () => (new Date()).toISOString().replace(/[\D]+/g, '').substring(0, 14);

/**
 * Add trailing `c` character to `s` if `s` doesn't already end with `c`.
 * @param {string} c - Trailing char
 * @param {string} s - The string
 * @returns {string}
 */
const trailing = (c, s) => s.lastIndexOf(c) === s.length - 1 ? s : `${s}${c}`;

module.exports = shipit => {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			branch: 'master',
			workspace: '/tmp/iambican',
			deployTo: '/home/wecomndj/dev.wecodeart.com',
			servers: 'wecomndj@68.65.122.253:21098',
			repositoryUrl: 'https://github.com/BicanMarianValeriu/I-Am-Bican.git',
			keepReleases: 2,
			ignores: ['.git', 'node_modules'],
			deleteOnRollback: true,
			shallowClone: true,
			key: 'C:/users/maria/.ssh/id_rsa'
		},
		dev: {
			servers: 'wecomndj@68.65.122.253:21098',
			deployTo: '/home/wecomndj/dev.wecodeart.com'
		}
	});

	shipit.on('updated', () => shipit.start(['installDependencies', 'stopApp']));

	shipit.blTask('installDependencies', async () => {
		await shipit.remote(`cd ${shipit.config.deployTo} && npm install --production`)
		shipit.log('Installed npm dependecies');
	});

	shipit.blTask('cleanReleases', async () => {
		await shipit.remote('rm -rf /home/wecomndj/dev.wecodeart.com/releases/*');
		shipit.log('--- Cleaned Releases!');
	});
	
	shipit.blTask('startApp', async () => {
		await shipit.remote( `cd ${shipit.currentPath} && cross-env NODE_ENV=production node ./server/index.js` );
		shipit.log('--- Started app process!');
	});

	shipit.blTask('stopApp', async () => {
		try {
			await shipit.remote(`cd ${shipit.config.deployTo} && killall node`);
			shipit.log('--- Stopped app process');
		} catch (error) {
			shipit.log('--- No previous process to restart. Continuing.')
		}
	});
	
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