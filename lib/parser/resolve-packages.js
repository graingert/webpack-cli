const transform = require('./transform'); //eslint-disable-line
const {spawn} = require('child_process');
const path = require('path');

function processPromise(child) {
	return new Promise(function(resolve, reject) { //eslint-disable-line
		child.addListener('error', reject);
		child.addListener('exit', resolve);
	});
}
function spawnChild(pkg) {
	// spawn('npm', ['install', '--save', pkg], { stdio: 'inherit', customFds: [0, 1, 2] });
	return spawn('npm', ['install', '--save', pkg]);
}

module.exports = function resolvePackages(option) {
	option.packages.filter( (pkg) => {
		processPromise(spawnChild(pkg)).then( (result) => {
			let packageModule;
			try {
				let loc = path.join('..', '..', 'node_modules', pkg);
				packageModule = require(loc);
			} catch(err) {
				console.log('Package wasn\'t validated correctly..');
				console.log('Submit an issue for', pkg, 'if this persists');
				process.exit(0);
			}
		}).catch(err => {
			console.log('Package Coudln\'t be installed, aborting..');
			process.exit(0);
		});
		return transform(); // @pksjce 's migration rules etc..'
	});
};
