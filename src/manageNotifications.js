window.Notifications = function() {
	return {
		notificationsCount: 0,
		// notifications: Alpine.$persist([
		notifications: [
			{
				id: 1,
				userName: 'Mark Webber',
				image: "assets/images/avatar-mark-webber.webp",
				message: 'reacted to your recent post My first tournament today!',
				extendedMessage: '',
				postDate: '1m ago',
				status: false
			},
			{
				id: 2,
				userName: 'Angela Gray',
				image: 'assets/images/avatar-angela-gray.webp',
				message: 'followed you',
				extendedMessage: '',
				postDate: '5m ago',
				status: false
			},
			{
				id: 3,
				userName: 'Jacob Thompson',
				image: 'assets/images/avatar-jacob-thompson.webp',
				message: 'has joined your group Chess Club',
				extendedMessage: '',
				postDate: '1 day ago',
				status: false
			},
			{
				id: 4,
				userName: 'Rizky Hasanuddin',
				image: 'assets/images/avatar-rizky-hasanuddin.webp',
				message: 'sent you a private message',
				extendedMessage: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and\n' +
					'   I\'m already having lots of fun and improving my game.',
				postDate: '5 days ago',
				status: true
			},
			{
				id: 5,
				userName: 'Kimberly Smith',
				image: 'assets/images/avatar-kimberly-smith.webp',
				message: 'commented on your picture',
				extendedMessage: '',
				postDate: '1 week ago',
				status: true
			},
			{
				id: 6,
				userName: 'Nathan Peterson',
				image: 'assets/images/avatar-nathan-peterson.webp',
				message: 'reacted to your recent post 5 end-game strategies to increase your win rate',
				extendedMessage: '',
				postDate: '2 weeks ago',
				status: true
			},
			{
				id: 7,
				userName: 'Anna Kim',
				image: 'assets/images/avatar-anna-kim.webp',
				message: 'left the group Chess Club',
				extendedMessage: '',
				postDate: '',
				status: true
			}
		],
		// ]),
	}
}