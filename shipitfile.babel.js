const deploy = require('./shipit/tasks/deploy');
const rollback = require('./shipit/tasks/rollback');

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
			key: 'C:/users/maria/.ssh/id_rsa_wca'
		},
		dev: {
			servers: 'wecomndj@68.65.122.253:21098',
			deployTo: '/home/wecomndj/dev.wecodeart.com'
		}
	});

	shipit.on('updated', () => shipit.start(['installDependencies', 'stopApp', 'startApp']));

	shipit.blTask('installDependencies', async () => {
		await shipit.remote(`cd ${shipit.config.deployTo} && npm install --production`)
		shipit.log('Installed npm dependecies');
	});

	shipit.blTask('clean', async () => {
		await shipit.remote('rm -rf /home/wecomndj/dev.wecodeart.com/releases/*');
		shipit.log('--- Cleaned Releases!');
	});

	shipit.blTask('startApp', async () => {
		await shipit.remote( `cd ${shipit.config.deployTo} && cross-env NODE_ENV=production node ./server/index.js` );
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
	
	/**
	 * Deploy Task
	 */
	deploy(shipit);

	/**
	 * RollBack Task
	 */
	rollback(shipit);
};