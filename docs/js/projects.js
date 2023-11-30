function createProjectCard(title, imgSrc, techStack, liveDemoLink, githubLink) {
    const sliderWrapper = document.createElement('li');
    sliderWrapper.className = 'splide__slide';
    

    const cardContainer = document.createElement('div');
    cardContainer.className = 'projects__card';

    sliderWrapper.appendChild(cardContainer)


    const cardTitle = document.createElement('div');
    cardTitle.className = 'card__title';
    const titleLink = document.createElement('a');
    titleLink.href = liveDemoLink;
    titleLink.textContent = title;
    cardTitle.appendChild(titleLink);

    const cardImg = document.createElement('div');
    cardImg.className = 'card__img';
    const imgLink = document.createElement('a');
    imgLink.href = liveDemoLink;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;
    imgLink.appendChild(img);
    cardImg.appendChild(imgLink);

    const cardDescr = document.createElement('div');
    cardDescr.className = 'card__descr';

    techStack.forEach(tech => {
        const descrItem = document.createElement('div');
        descrItem.className = 'card__descr descr-item';
        const techIcon = document.createElement('i');
        techIcon.className = `bx ${tech.iconClass}`;
        const techText = document.createElement('p');
        techText.textContent = tech.name;
        descrItem.appendChild(techIcon);
        descrItem.appendChild(techText);
        cardDescr.appendChild(descrItem);
    });

    const cardDivider = document.createElement('div');
    cardDivider.className = 'card__divider';

    const cardLinks = document.createElement('div');
    cardLinks.className = 'card__links';

    const liveDemoLinkElem = document.createElement('a');
    liveDemoLinkElem.href = liveDemoLink;
    liveDemoLinkElem.innerHTML = `Live Demo<i class='bx bx-link-external'></i>`;

    const githubLinkElem = document.createElement('a');
    githubLinkElem.href = githubLink;
    githubLinkElem.innerHTML = `Github <i class='bx bxl-github'></i>`;

    cardLinks.appendChild(liveDemoLinkElem);
    cardLinks.appendChild(githubLinkElem);

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardDescr);
    cardContainer.appendChild(cardDivider);
    cardContainer.appendChild(cardLinks);

    return sliderWrapper;
}

const projectsContainer = document.getElementById('projectsContainer');

const projectsData = [
    {
        title: 'Weather App',
        imgSrc: 'projects/img/works/weather_app.png',
        techStack: [
            { name: 'Html 5', iconClass: 'bxl-html5' },
            { name: 'Css 3', iconClass: 'bxl-css3' },
            { name: 'JavaScript', iconClass: 'bxl-javascript' }
        ],
        liveDemoLink: 'projects/weatherApp/',
        githubLink: 'https://github.com/HashTab/HashTab.github.io/tree/master/docs/projects/weatherApp'
    },
    {
        title: '2048',
        imgSrc: 'projects/img/works/2048.png',
        techStack: [
            { name: 'Html 5', iconClass: 'bxl-html5' },
            { name: 'Css 3', iconClass: 'bxl-css3' },
            { name: 'JavaScript', iconClass: 'bxl-javascript' }
        ],
        liveDemoLink: 'projects/2048/',
        githubLink: 'https://github.com/HashTab/HashTab.github.io/tree/master/docs/projects/2048'
    },
    {
        title: 'Tarla',
        imgSrc: 'projects/img/works/tarla.png',
        techStack: [
            { name: 'Html 5', iconClass: 'bxl-html5' },
            { name: 'JavaScript', iconClass: 'bxl-javascript' },
            { name: 'Bootstrap', iconClass: 'bxl-bootstrap' }
        ],
        liveDemoLink: 'projects/tarla/',
        githubLink: 'https://github.com/HashTab/HashTab.github.io/tree/master/docs/projects/tarla'
    },
    {
        title: 'Freedom',
        imgSrc: 'projects/img/works/freedom.png',
        techStack: [
            { name: 'Html 5', iconClass: 'bxl-html5' },
            { name: 'Css 3', iconClass: 'bxl-css3' }
        ],
        liveDemoLink: 'projects/freedom/',
        githubLink: 'https://github.com/HashTab/HashTab.github.io/tree/master/docs/projects/freedom'
    },
    {
        title: 'Taster',
        imgSrc: 'projects/img/works/taster.png',
        techStack: [
            { name: 'Html 5', iconClass: 'bxl-html5' },
            { name: 'Css 3', iconClass: 'bxl-css3' },
            { name: 'JavaScript', iconClass: 'bxl-javascript' }
        ],
        liveDemoLink: 'projects/taster/',
        githubLink: 'https://github.com/HashTab/HashTab.github.io/tree/master/docs/projects/taster'
    },
];
projectsData.forEach(project => {
    const card = createProjectCard(project.title, project.imgSrc, project.techStack, project.liveDemoLink, project.githubLink);
    projectsContainer.appendChild(card);
});
