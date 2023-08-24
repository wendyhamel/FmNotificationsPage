window.Notifications = function() {
	return {
		notificationsCount: 0,
		// notifications: Alpine.$persist([
		notifications: [
			{
				id: 1,
				userName: 'Mark Webber',
				image: "assets/images/avatar-mark-webber.webp",
				message: 4,
				extendedMessage: '',
				postDate: '1m ago',
				status: false
			},
			{
				id: 2,
				userName: 'Angela Gray',
				image: 'assets/images/avatar-angela-gray.webp',
				message: 3,
				extendedMessage: '',
				postDate: '5m ago',
				status: false
			},
			{
				id: 3,
				userName: 'Jacob Thompson',
				image: 'assets/images/avatar-jacob-thompson.webp',
				message: 2,
				extendedMessage: '',
				postDate: '1 day ago',
				status: false
			},
			{
				id: 4,
				userName: 'Rizky Hasanuddin',
				image: 'assets/images/avatar-rizky-hasanuddin.webp',
				message: 1,
				extendedMessage: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and\n' +
					'   I\'m already having lots of fun and improving my game.',
				postDate: '5 days ago',
				status: true
			},
			{
				id: 5,
				userName: 'Kimberly Smith',
				image: 'assets/images/avatar-kimberly-smith.webp',
				message: 5,
				extendedMessage: '',
				postDate: '1 week ago',
				status: true
			},
			{
				id: 6,
				userName: 'Nathan Peterson',
				image: 'assets/images/avatar-nathan-peterson.webp',
				message: 4,
				extendedMessage: '',
				postDate: '2 weeks ago',
				status: true
			},
			{
				id: 7,
				userName: 'Anna Kim',
				image: 'assets/images/avatar-anna-kim.webp',
				message: 0,
				extendedMessage: '',
				postDate: '',
				status: true
			}
		],
		// ]),
		posts: [
			{id: 0, title: 'My first tournament today!'},
			{id: 1, title: '5 end-game strategies to increase your win rate'}
		],
		groups: [
			{id:0, title: 'Chess Club'}
		],
		messages: [
			{id: 0, message: 'left the group'},
			{id: 1, message: 'sent you a private message'},
			{id: 2, message: 'has joined your group'},
			{id: 3, message: 'followed you'},
			{id: 4, message: 'reacted to your recent post'},
			{id: 5, message: 'commented on your picture'},
		],
		images: [
			{0: 'assets/images/image-chess.webp'}
		],
		selectedMessage(messageID) {
			let messageObject = this.messages.find(message => message.id === messageID)
			return messageObject.message
		}
	}
}