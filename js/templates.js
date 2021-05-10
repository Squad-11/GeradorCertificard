const queryString = location.search.substring(1);

const templates = {
  dev: {
    userName: "< Desenvolvedor >",
    achievementTitle: "👨‍💻️ Minhas ferramentas de trabalho 👨‍💻️",
    achievements: [
      // conquista: ['nome', 'link'],
      ["🔨 Visual Studio Code", "https://code.visualstudio.com/"],
      ["🎨 Figma", "https://www.figma.com/"],
      ["🗒️ Notion", "https://www.notion.so/"],
      ["📷 GitHub", "https://github.com/"],
      ["📞 Discord", "https://discord.com/"],
    ],
    userPhoto: "/images/templates/dev/dev-profile.svg",
    headerImg: "/images/templates/dev/dev-banner.jpg",
    styles: {
      containerbgColor: "#FFCB31",
      certificardBg: "#6A92D7",
      boxLinksBg: "#635A6D",
      nameColor: "#fff",
      achievementTitleColor: "#fff",
      linkHover: "#D6CFBD",
      linkColor: "#4A3E56",
      linkBgColor: "#FF654D",
    },
  },
  gamer: {
    userName: "🎮 Gamer 👾",
    achievementTitle: "Meus jogos preferidos",
    achievements: [
      // conquista: ['nome', 'link'],
      ["🐇 Baba Is You", "https://www.youtube.com/watch?v=z3_yA4HTJfs"],
      ["💀 Hollow Knight", "https://www.youtube.com/watch?v=UAO2urG23S4"],
      ["🏞️ Monument Valley 2", "https://www.youtube.com/watch?v=tW2KUxyq8Vg"],
      ["⚓ Return of the Obra Dinn", "https://www.youtube.com/watch?v=ILolesm8kFY"],
      ["👨‍💻️ *Announcement - Game Builder Garage", "https://www.youtube.com/watch?v=0yM3ppz0Zt8"],
    ],
    userPhoto: "/images/templates/gamer/gamer-profile.svg",
    headerImg: "/images/templates/gamer/gamer-banner.jpg",
    styles: {
      containerbgColor: "#6012A1",
      certificardBg: "#36374F",
      boxLinksBg: "#3F1A84",
      nameColor: "#53C544",
      achievementTitleColor: "#53C544",
      linkHover: "#2C0C5F",
      linkColor: "#B2155C",
      linkBgColor: "#53C544",
    },
  },
  cook: {
    userName: "👨‍🍳️ Chef",
    achievementTitle: "Minhas Receitas",
    achievements: [
      // conquista: ['nome', 'link'],
      ["🥖 Pão Caseiro", "https://www.tudogostoso.com.br/receita/178357-pao-caseiro.html"],
      ["🎂 Bolo de Chocolate", "https://www.tudogostoso.com.br/receita/62547-a-melhor-receita-de-bolo-de-chocolate.html"],
      ["🍝 Macarronada", "https://www.tudogostoso.com.br/receita/57911-macarronada-simples.html"],
      ["🥩 Churrasco", "https://gourmetadois.com/receita/picanha-assada-com-alecrim-75.html"],
      ["🍕 Pizza", "https://gshow.globo.com/RPC/Estudio-C/cozinha-paranaense/receitas/receita-de-massa-caseira-de-pizza.ghtml"],
    ],
    userPhoto: "/images/templates/cook/cook-profile.svg",
    headerImg: "/images/templates/cook/cook-banner.svg",
    styles: {
      containerbgColor: "#4D4D4D",
      certificardBg: "#FAFAFA",
      boxLinksBg: "#7728A0",
      nameColor: "#333333",
      achievementTitleColor: "#000000",
      linkHover: "#A23ACE",
      linkColor: "#FAFAFA",
      linkBgColor: "#7728A0",
    },
  },
  cinema: {
    userName: "📽️ Cinéfilo 🍿 ",
    achievementTitle: "Filmes Favoritos",
    achievements: [
      // conquista: ['nome', 'link'],
      ["🦇 Batman - O Cavaleiro das Trevas", "https://www.youtube.com/watch?v=zqfz04yCTnE"],
      ["🏀 Space Jam: Um Novo Legado", "https://www.youtube.com/watch?v=t1m7zl8H-kE"],
      ["🥊 Clube da Luta", "https://www.youtube.com/watch?v=BdJKm16Co6M"],
      ["😄 Divertida Mente", "https://www.youtube.com/watch?v=LSpeM7G4zfY"],
      ["🦊 Zootopia", "https://www.youtube.com/watch?v=prct6AB5tR8"],
    ],
    userPhoto: "/images/templates/cinema/cinema-profile.svg",
    headerImg: "/images/templates/cinema/cinema-banner.jpg",
    styles: {
      containerbgColor: "#28B8D8",
      certificardBg: "#000000",
      boxLinksBg: "#01057E",
      nameColor: "#D1D1D1",
      achievementTitleColor: "#D1D1D1",
      linkHover: "#01057E",
      linkColor: "#C2C2C2",
      linkBgColor: "#0072A3",
    },
  },
  starwars: {
    userName: "Anakin ⚔ ",
    achievementTitle: "Planetas Visitados",
    achievements: [
      // conquista: ['nome', 'link'],
      ["Tatooine", "https://www.starwars.com/databank/tatooine"],
      ["Geonosis", "https://www.starwars.com/databank/geonosis"],
      ["Mustafar", "https://www.starwars.com/databank/mustafar"],
      ["Bespin", "https://www.starwars.com/databank/bespin"],
      ["Endor", "https://www.starwars.com/databank/endor"],
    ],
    userPhoto: "/images/templates/starwars/starwars-profile.svg",
    headerImg: "/images/templates/starwars/starwars-banner.jpg",
    styles: {
      containerbgColor: "#FCDE04",
      certificardBg: "#FCDE04",
      boxLinksBg: "#141518",
      nameColor: "#141518",
      achievementTitleColor: "#A3A3A3",
      linkHover: "#8F7E00",
      linkColor: "#A3A3A3",
      linkBgColor: "#1800B8",
    },
  },
  viagem: {
    userName: "Viajante ✈️ ",
    achievementTitle: "Lugares onde já passei",
    achievements: [
      // conquista: ['nome', 'link'],
      ["🌍 Holanda", "https://www.youtube.com/watch?v=jjjdPk31AOI"],
      ["🌍 Grécia", "https://www.youtube.com/watch?v=oRqbKjO4I74"],
      ["🌏 Japão", "https://www.youtube.com/watch?v=5H7s6oPH6zs"],
      ["🌏 Austrália", "https://www.youtube.com/watch?v=vW7V8cZw8ik"],
      ["🌎 Canadá", "https://www.youtube.com/watch?v=LxDo1kq2QLQ"],
    ],
    userPhoto: "/images/templates/viagem/viagem-profile.svg",
    headerImg: "/images/templates/viagem/viagem-banner.jpg",
    styles: {
      containerbgColor: "#FC6027",
      certificardBg: "#FEF9F3",
      boxLinksBg: "#EF653C",
      nameColor: "#06329F",
      achievementTitleColor: "#FEF9F3",
      linkHover: "#FF4300",
      linkColor: "#FEF9F3",
      linkBgColor: "#06329F",
    },
  },
};

if (queryString && templates[queryString]) {
  document.querySelector(".userName").innerHTML = templates[queryString].userName;
  document.querySelector(".achievementsTitle").innerHTML = templates[queryString].achievementTitle;
  addTemplateAchievements();
  document.querySelector(".user-photo img").src = templates[queryString].userPhoto;
  document.querySelector(".header-img").src = templates[queryString].headerImg;

  for (const [key, value] of Object.entries(templates[queryString].styles)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }

  addSocialIcons();
}

function addTemplateAchievements() {
  const linkList = document.getElementById("socialLinks");
  linkList.innerHTML = "";
  const achievs = templates[queryString].achievements;
  for (let i = 0; i < achievs.length; i++) {
    linkList.innerHTML += `<li><a class="project-links" href="${achievs[i][1]}" target="_blank">${achievs[i][0]}</a></li>`;
  }
}

function addSocialIcons() {
  const socialLinks = document.querySelector(".social-medias");
  socialLinks.innerHTML = `<ul>
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
