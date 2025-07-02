document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.fa-bars');
    const navLinks = document.querySelector('.nav-links');

    hamburgerIcon.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

//JavaScript para generar proyecto en el portafolio

const proyectos = [
    {
        id: 1,
        title: "Proyecto 1",
        description: "Descripción del proyecto 1.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
    {
        id: 2,
        title: "Proyecto 2",
        description: "Descripción del proyecto 21.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
    {
        id: 3,
        title: "Proyecto 3",
        description: "Descripción del proyecto 3.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
    {
        id: 4,
        title: "Proyecto 4",
        description: "Descripción del proyecto 1.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
    {
        id: 5,
        title: "Proyecto 5",
        description: "Descripción del proyecto 21.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
    {
        id: 6,
        title: "Proyecto 6",
        description: "Descripción del proyecto 3.",
        descriptionModal: "Este es un proyecto de ejemplo que utiliza HTML, CSS y JavaScript para crear una página web interactiva.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "img/proyecto1.svg",
        imageModal: "img/ProyectoModal.svg",
        linkCodigo: "#",
        linkVivo: "https://example.com/proyecto1",
    },
];


    // Generate projects dynamically
    const proyectosSection = document.getElementById('proyectos');

    proyectos.forEach(proyecto => {
        const proyectoHTML = `
            <div class="proyectoN">
                <div class="container">
                    <img src="${proyecto.image}" alt="Imagen del proyecto ${proyecto.id}" class="image">
                    
                    <div class="overlay">
                        <!-- The Modal -->
                        <div id="myModal-${proyecto.id}" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <span class="close" data-modal-id="myModal-${proyecto.id}">&times;</span>
                                <h2>${proyecto.title}</h2>
                                <img src="${proyecto.imageModal}" alt="Imagen del proyecto en el modal">
                                <p>${proyecto.descriptionModal}</p>
                                <button onclick="window.open('${proyecto.linkVivo}', '_blank')">En vivo</button>
                                <button onclick="window.open('${proyecto.linkCodigo}', '_blank')">El código</button>    
                            </div>
                        </div>
                        <div class="text">
                            <h2>${proyecto.title}</h2>
                            <p>${proyecto.description}</p>
                            <div class="ContenedorTech">
                                ${proyecto.technologies.map(tech => `<div class="tech">${tech}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <button class="boton" data-modal-id="myModal-${proyecto.id}">Ver el proyecto</button>
            </div>
        `;

        proyectosSection.insertAdjacentHTML('beforeend', proyectoHTML);
    });

    // Modal functionality
    document.addEventListener('click', function (event) {
        const modalId = event.target.getAttribute('data-modal-id');
        if (modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });

    const closeModalButtons = document.querySelectorAll('.close');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
        });
    });

    window.addEventListener('click', function (event) {
        closeModalButtons.forEach(button => {
            const modalId = button.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});