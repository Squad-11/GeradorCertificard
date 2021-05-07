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
        userName: '🎮 Gamer 👾',
        achievementTitle: 'Meus jogos preferidos',
        achievements: { // conquista: ['nome', 'link'],
            gamer1: ['🐇 Baba Is You', 'https://www.youtube.com/watch?v=z3_yA4HTJfs'],
            gamer2: ['💀 Hollow Knight', 'https://www.youtube.com/watch?v=UAO2urG23S4'],
            gamer3: ['🏞️ Monument Valley 2', 'https://www.youtube.com/watch?v=tW2KUxyq8Vg'],
            gamer4: ['⚓ Return of the Obra Dinn', 'https://www.youtube.com/watch?v=ILolesm8kFY'],
            gamer5: ['👨‍💻️ *Announcement - Game Builder Garage', 'https://www.youtube.com/watch?v=0yM3ppz0Zt8'],
        },
        userPhoto: '/images/templates/gamer/gamer-profile.svg',
        headerImg: '/images/templates/gamer/gamer-banner.jpg',
        bgcolor: '#6012A1',
        bg: '#36374F',
        boxLinksBg: '#3F1A84',
        nameColor: '#53C544',
        achievementTitleColor: '#53C544',
        linkHover: '#2C0C5F',
        linkColor: '#B2155C',
        linkBgColor: '#53C544',
    }
}

if (queryString.length > 0 && templates[queryString]) {
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
    socialLinks.innerHTML = 
    `<ul>
    <li><a href="#">
    <img src="/images/social/github.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/instagram.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/codepen.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/linkedin.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/youtube.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/twitter.svg"></a></li>
    <li><a href="#">
    <img src="/images/social/facebook.svg"></a></li>
    </ul>`;
}