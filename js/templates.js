const queryString = location.search.substring(1);

const templates = {
    dev: {
        userName: '< Desenvolvedor >',
        achievementTitle: '👨‍💻️ Minhas ferramentas de trabalho 👨‍💻️',
        achievements: { // conquista: ['nome', 'link'],
            dev1: ['🔨 Visual Studio Code', 'https://code.visualstudio.com/'],
            dev2: ['🎨 Figma', 'https://www.figma.com/'],
            dev3: ['🗒️ Notion', 'https://www.notion.so/'],
            dev4: ['📷 GitHub', 'https://github.com/'],
            dev5: ['📞 Discord', 'https://discord.com/'],
        },
        userPhoto: '/images/templates/dev/dev-profile.svg',
        headerImg: '/images/templates/dev/dev-banner.jpg',
        bgcolor: '#FFCB31',
        bg: '#6A92D7',
        boxLinksBg: '#635A6D',
        nameColor: '#fff',
        achievementTitleColor: '#fff',
        linkHover: '#D6CFBD',
        linkColor: '#4A3E56',
        linkBgColor: '#FF654D',

    },

    gamer: {
        userName: '< Gamer >',
        achievementTitle: 'Sites para programação',
        achievements: { // conquista: ['nome', 'link'],
            dev1: ['dev1', 'https://google.com'],
            dev2: ['dev2', 'https://google.com'],
            dev3: ['dev3', 'https://google.com'],
            dev4: ['dev4', 'https://google.com'],
            dev5: ['dev5', 'https://google.com'],
        },
        userPhoto: '/images/templates/dev/dev-profile.svg',
        headerImg: '/images/templates/dev/dev-banner.jpg',
        bgcolor: '#FFCB31',
        bg: '#6A92D7',
        boxLinksBg: '#635A6D',
        nameColor: '#fff',
        achievementTitleColor: '#fff',
        linkHover: '#D6CFBD',
        linkColor: '#4A3E56',
        linkBgColor: '#FF654D',
    }
}

if (queryString.length > 0 && typeof templates[queryString] != undefined) {
    document.querySelector('.userName').innerHTML = templates[queryString].userName;
    document.querySelector('.achievementsTitle').innerHTML = templates[queryString].achievementTitle;
    addTemplateAchievements();
    document.querySelector('.user-photo').setAttribute('src', templates[queryString].userPhoto);
    document.querySelector('.header-img').setAttribute('src', templates[queryString].headerImg);
    document.documentElement.style.setProperty('--bgColor', templates[queryString].bgcolor);
    document.documentElement.style.setProperty('--bg', templates[queryString].bg);
    document.documentElement.style.setProperty('--boxLinksBg', templates[queryString].boxLinksBg);
    document.documentElement.style.setProperty('--nameColor', templates[queryString].nameColor);
    document.documentElement.style.setProperty('--achievementTitleColor', templates[queryString].achievementTitleColor);
    document.documentElement.style.setProperty('--linkHover', templates[queryString].linkHover);
    document.documentElement.style.setProperty('--linkColor', templates[queryString].linkColor);
    document.documentElement.style.setProperty('--linkBgColor', templates[queryString].linkBgColor);
    addSocialIcons();
}

function addTemplateAchievements() {
    const linkList = document.getElementById("socialLinks");
    linkList.innerHTML = "";
    const achievs = Object.values(templates[queryString].achievements);
    for (let i = 0; i < achievs.length; i++) {
        linkList.innerHTML += `<li><a class="project-links" href="${achievs[i][1]}" target="_blank">${achievs[i][0]}</a></li>`; 
    }
}

function addSocialIcons() {
    const socialLinks = document.querySelector('.social-medias');
    console.log(socialLinks);
    socialLinks.innerHTML = '';
    socialLinks.innerHTML = 
    `<ul>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/github.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/instagram.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/codepen.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/linkedin.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/youtube.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/twitter.svg"></a></li>
    <li><a href="criar-cartao.html?${queryString}" target="_blank">
    <img src="/images/social/facebook.svg"></a></li>
    </ul>`;
}