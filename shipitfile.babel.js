export default shipit => {  
	shipit.initConfig({
		default: {
			branch: 'master',
			workspace: '/home/myzonedev/public_html/glow-2018',
			deployTo: '/home/myzonedev/public_html/glow-2018',
			repositoryUrl: 'https://bicanmarianvaleriu@bitbucket.org/am2studio/glow-2018.git',
			ignores: [
				'.git',
				'node_modules',
				'package.json',
				'package-lock.json',
				'src'
			],
			keepReleases: 2,
			deleteOnRollback: false,
			key: 'd:/ssh',
			shallowClone: true,
		},
		staging: {
			servers: 'myzonedev@45.79.133.165',
		} 
	});
};