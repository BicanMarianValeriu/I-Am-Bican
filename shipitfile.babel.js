require('@babel/register')({
	ignore: [/\/(build|node_modules)\//],
	presets: ['@babel/preset-env'],
	plugins: []
});

require('@babel/polyfill');

module.exports = shipit => {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			branch: 'master',
			workspace: '/home/wecomndj/dev.wecodeart.com',
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

	shipit.blTask('copy', function () {
		shipit.copyToRemote('/sad/', '/home/wecomndj/dev.wecodeart.com/').then(
			shipit.log('Copy: Finished')
		)
	});

	shipit.task('clean', () => {
		return new Promise(resolve => {
			shipit.remote('rm -rf /home/wecomndj/dev.wecodeart.com/releases/*').then(resolve(shipit.log('Clean: Finished')));
		});
	});

	shipit.start('clean');
};