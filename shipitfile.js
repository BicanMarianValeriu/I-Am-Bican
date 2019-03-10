module.exports = shipit => {
	require('shipit-deploy')(shipit)

	shipit.initConfig({
		default: {
			branch: 'master',
			workspace: '/build/',
			deployTo: '/iambican/',
			repositoryUrl: 'https://github.com/BicanMarianValeriu/I-Am-Bican.git',
			ignores: [
				'.git',
				'node_modules',
				'package.json',
				'package-lock.json',
				'src'
			],
			keepReleases: 2,
			deleteOnRollback: false,
			key: '/path/to/key',
			shallowClone: true,
		},
		staging: {
			servers: '66.96.147.96',
		},
		production: {
			servers: [{
				host: '66.96.147.96',
				user: 'marianvaleriubican34720',
			}]
		}
	})
}  