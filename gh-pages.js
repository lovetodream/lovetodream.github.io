import { publish } from "gh-pages";

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/lovetodream/lovetodream.github.io.git',
		user: {
			name: process.env.GH_USERNAME,
			email: process.env.GH_EMAIL
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);