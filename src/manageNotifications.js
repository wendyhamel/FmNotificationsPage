window.Notifications = function() {
	return {
		unreadNotificationsCount: '',
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
			{id: 0, image: 'assets/images/image-chess.webp', alt:'image of chessboard with a woman in the background looking at the chess pieces'}
		],
		notifications: Alpine.$persist([
			{
				id: 0,
				userName: 'Mark Webber',
				avatar: "assets/images/avatar-mark-webber.webp",
				messageId: 4,
				postId: 0,
				groupId: null,
				imageId: null,
				extendedMessage: null,
				postDate: '1m ago',
				read: false
			},
			{
				id: 1,
				userName: 'Angela Gray',
				avatar: 'assets/images/avatar-angela-gray.webp',
				messageId: 3,
				postId: null,
				groupId: null,
				imageId: null,
				extendedMessage: null,
				postDate: '5m ago',
				read: false
			},
			{
				id: 2,
				userName: 'Jacob Thompson',
				avatar: 'assets/images/avatar-jacob-thompson.webp',
				messageId: 2,
				postId: null,
				groupId: 0,
				imageId: null,
				extendedMessage: null,
				postDate: '1 day ago',
				read: false
			},
			{
				id: 3,
				userName: 'Rizky Hasanuddin',
				avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
				messageId: 1,
				postId: null,
				groupId: null,
				imageId: null,
				extendedMessage: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and\n' +
					'   I\'m already having lots of fun and improving my game.',
				postDate: '5 days ago',
				read: true
			},
			{
				id: 4,
				userName: 'Kimberly Smith',
				avatar: 'assets/images/avatar-kimberly-smith.webp',
				messageId: 5,
				postId: null,
				groupId: null,
				imageId: 0,
				extendedMessage: null,
				postDate: '1 week ago',
				read: true
			},
			{
				id: 5,
				userName: 'Nathan Peterson',
				avatar: 'assets/images/avatar-nathan-peterson.webp',
				messageId: 4,
				postId: 1,
				groupId: null,
				imageId: null,
				extendedMessage: null,
				postDate: '2 weeks ago',
				read: true
			},
			{
				id: 6,
				userName: 'Anna Kim',
				avatar: 'assets/images/avatar-anna-kim.webp',
				messageId: 0,
				postId: null,
				groupId: 0,
				imageId: null,
				extendedMessage: null,
				postDate: '2 weeks ago',
				read: true
			}
		]),
		selectedPost(postID) {
			let postObject = this.posts.find(post => post.id === postID)
			return postObject.title
		},
		selectedGroup(groupID) {
			let groupObject = this.groups.find(group => group.id === groupID)
			return groupObject.title
		},
		selectedMessage(messageID) {
			let messageObject = this.messages.find(message => message.id === messageID)
			return messageObject.message
		},
		selectedImage(imageID) {
			return this.images.find(image => image.id === imageID)
		},
		toggleReadNotification() {
			this.notification.read = !this.notification.read
			this.countUnreadNotifications()
		},
		readAllNotifications() {
			this.notifications.forEach(notification => notification.read = true)
			this.countUnreadNotifications()
		},
		countUnreadNotifications() {
			let unreadNotifications = this.notifications.filter(notification => notification.read === false)
			return this.unreadNotificationsCount = unreadNotifications.length
		},
	}
}