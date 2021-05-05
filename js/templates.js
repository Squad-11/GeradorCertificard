const queryString = location.search.substring(1);

const templates = {
    dev: {
        userName: 'Dev',
        achievementTitle: 'Sites para programação',
        achievements: { // conquista: ['nome', 'link'],
            dev1: ['dev1', 'https://google.com'],
            dev2: ['dev2', 'https://google.com'],
            dev3: ['dev3', 'https://google.com'],
            dev4: ['dev4', 'https://google.com'],
            dev5: ['dev5', 'https://google.com'],
        },
        bgcolor: '#000',
        bg: '#328238',
    },

    gamer: {
        bgcolor: '#363636',
    }
}

if (queryString.length > 0 && typeof templates[queryString] != undefined) {
    document.querySelector('.userName').innerHTML = templates[queryString].userName;
    document.querySelector('.achievementsTitle').innerHTML = templates[queryString].achievementTitle;
    addTemplateAchievements();
    document.documentElement.style.setProperty('--bgColor', templates[queryString].bgcolor);
    document.documentElement.style.setProperty('--bg', templates[queryString].bg);

}

function addTemplateAchievements() {
    const linkList = document.getElementById("socialLinks");
    linkList.innerHTML = "";
    const achievs = Object.values(templates[queryString].achievements);
    for (let i = 0; i < achievs.length; i++) {
        linkList.innerHTML += `<li><a class="project-links" href="${achievs[i][1]}" target="_blank">${achievs[i][0]}</a></li>`; 
    }
}