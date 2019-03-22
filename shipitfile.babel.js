module.exports = shipit => {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			branch: 'master', 
			workspace: '/home/wecomndj/dev.wecodeart.com',
			deployTo: '/home/wecomndj/dev.wecodeart.com',
			repositoryUrl: 'https://github.com/BicanMarianValeriu/I-Am-Bican',
			servers: 'wecomndj@68.65.122.253:21098',
			keepReleases: 2 
		},
		staging: {
			servers: 'wecomndj@68.65.122.253:21098',
		} 
	});
};