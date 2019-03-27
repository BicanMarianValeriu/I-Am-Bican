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

	shipit.on('updated', () => shipit.start(['installDependencies']));

	shipit.blTask('installDependencies', async () => {
		await shipit.remote(`cd ${shipit.releasePath} && npm install --production`)
		shipit.log('Installed npm dependecies');
	});

	shipit.task('deploy', () => {
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
		 * Cleans the remote directory
		 */
		const clean = () => shipit.remote('rm -rf /home/wecomndj/dev.wecodeart.com/releases/*').then(shipit.log('Clean: Done'))

		const dest = 'DEV';

		return start(`Deploy to ${dest}`).then(() => clean()).then(() => shipit.log(`Release deployed`));
	});
};