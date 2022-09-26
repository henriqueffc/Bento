// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

let CONFIG = {
	name: 'User',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,
	greetingMorning: 'Bom dia,',
	greetingAfternoon: 'Boa tarde,',
	greetingEvening: 'Boa noite,',
	greetingNight: 'Vá dormir,',
	bentoLayout: 'buttons',
	weatherKey: '9b4f4883c8fbece2144b4b95b4fbb949',
	weatherIcons: 'OneDark',
	weatherUnit: 'C',
	language: 'pt_br',
	trackLocation: true,
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',
	autoChangeTheme: true,
	changeThemeByOS: true,
	changeThemeByHour: false,
	hourDarkThemeActive: '18:00',
	hourDarkThemeInactive: '05:40',
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Arch Linux',
			icon: 'terminal-square',
			link: 'https://archlinux.org/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/',
		},
		{
			id: '3',
			name: 'WhatsApp',
			icon: 'phone',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '4',
			name: 'Telegram',
			icon: 'phone',
			link: 'https://web.telegram.org/z/'
		},
		{
			id: '5',
			name: 'Notes',
			icon: 'sticky-note',
			link: 'https://app.standardnotes.com/',
		},
		{
			id: '6',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
	],
	secondButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '2',
			name: 'Agenda',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '4',
			name: 'Feedly',
			icon: 'rss',
			link: 'https://feedly.com/i/my',
		},
		{
			id: '5',
			name: 'Notes',
			icon: 'sticky-note',
			link: 'https://app.standardnotes.com/',
		},
		{
			id: '6',
			name: 'Element',
			icon: 'phone',
			link: 'https://app.element.io',
		},
	],
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Lofi Girl',
					link: 'https://www.youtube.com/c/LofiGirl/featured',
				},
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Chillofi radio',
					link: 'https://chillofi-radio.dez.ovh/',
				},
				{
					name: 'BBC Radio 1 Relax',
					link: 'https://www.bbc.co.uk/sounds/play/live:bbc_radio_one_relax',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.tv/',
				},
				{
					name: 'Discord',
					link: 'https://discord.com/channels/@me',
				},
			],
		},
	],
	secondListsContainer: [
		{
			icon: 'newspaper',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Feedly',
					link: 'https://feedly.com/i/my',
				},
				{
					name: 'Pocket',
					link: 'https://getpocket.com/my-list',
				},
			],
		},
		{
			icon: 'code-2',
			id: '2',
			links: [
				{
					name: 'Arch Linux',
					link: 'https://archlinux.org/',
				},
				{
					name: 'Grasshoper',
					link: 'https://grasshopper.app',
				},
				{
					name: 'Alura',
					link: 'https://cursos.alura.com.br',
				},
				{
					name: 'Repos',
					link: 'https://github.com/henriqueffc',
				},
			],
		},
	],
}

const PRECONFIG = {
	name: 'User',
	imageBackground: false,
	dataImage: 'assets/background.jpg',
	openInNewTab: false,
	bentoLayout: 'bento',
	weatherIcons: 'OneDark',
	changeThemeByHour: false,
	hourDarkThemeActive: '06:00',
	hourDarkThemeInactive: '18:00',
	changeThemeByOS: true,
	autoChangeTheme: true
}

if (JSON.parse(window.localStorage.getItem('CONFIG')) == null) window.localStorage.setItem('CONFIG', JSON.stringify(PRECONFIG))
let objectSaved = JSON.parse(window.localStorage.getItem('CONFIG'))

let CONFIGSaved = { ...objectSaved }
let base64String = objectSaved.dataImage || "assets/background.jpg"

function imageUploaded() {
	var file = document.querySelector('input#uploadImageBackground')['files'][0]
	var reader = new FileReader()
	reader.onload = function () {
		base64String = reader.result
		imageBase64Stringsep = base64String
	}
	reader.readAsDataURL(file)
}

function saveData() {
	const inputs = {
		name: document.querySelector('input[name="name"]'),
		imageBackground: document.querySelector('input[name="imageBackground"]:checked'),
		openInNewTab: document.querySelector('input[name="openInNewTab"]:checked'),
		twelveHourFormat: document.querySelector('input[name="twelveHourFormat"]:checked'),
		bentoLayout: document.querySelector('input[name="bentoLayout"]:checked'),
		weatherIcons: document.querySelector('input[name="weatherIcons"]:checked'),
		changeThemeByHour: document.querySelector('input[name="changeThemeByHour"]:checked'),
		hourDarkThemeActive: document.querySelector('input[name="hourDarkThemeActive"]'),
		hourDarkThemeInactive: document.querySelector('input[name="hourDarkThemeInactive"]'),
		changeThemeByOS: document.querySelector('input[name="changeThemeByOS"]:checked'),
		autoChangeTheme: document.querySelector('input[name="autoChangeTheme"]:checked'),
	}

	for (let input in inputs) {
		const toTrueOrFalse = value => value === 'true' ? true : value === 'false' ? false : value
		inputs[input] != null ? CONFIGSaved[`${inputs[input].name}`] = toTrueOrFalse(inputs[input].value) : ''
		window.localStorage.setItem('CONFIG', JSON.stringify(CONFIGSaved))
		objectSaved = JSON.parse(window.localStorage.getItem('CONFIG'))
		CONFIGSaved = { ...objectSaved }
	}

	CONFIGSaved.dataImage = base64String
	window.localStorage.setItem('CONFIG', JSON.stringify(CONFIGSaved))

	document.querySelector('.alert').style.transform = "scaleX(1) translate(-50%, -50%)"
	document.querySelector('.alert').style.opacity = "1"
	document.querySelector('.alert').innerHTML = "Alterações salvas"
	setTimeout(() => {
		document.querySelector('.alert').style.transform = "scaleX(0) translate(-50%, -50%)"
		document.querySelector('.alert').style.opacity = "0"
		window.location.reload()
	}, 1500)
}

for (let sett in CONFIGSaved) {
	CONFIG[`${sett}`] = CONFIGSaved[sett]
}
