const Imgs = document.getElementById("imgs");
const Info = document.getElementById("info")
const Info_content = document.getElementById("info_content");
Info.onclick = function(){
    Imgs.classList.toggle("hidden");
    Info_content.classList.toggle("animate-fade-down");
};


const translations = {
    english: {
        tittle:`From Argentina <br class="md:hidden"> at 21 I design <br class="md:block hidden"> and <br class="md:hidden"> code websites.`,
        tittle2:"WEB DEVELOPER",
        tittle3:"Looking for work",
        navbar1:"ABOUT",
        navbar2:"PROJECTS",
        navbar3:"CONTACT",
        aboutbtn:"ABOUT",
        moreinfobtn:"More Info",
        about1: "Hellooo! I am a Front - End Developer based in Argentina with a solid foundation in both tech and design.",
        about2:"I enjoy creating good-looking websites and also making custom multimedia content for them, such as logos, images, backgrounds, posters or custom videos.",
        about3:"Currently I am focusing my efforts to mastering Front-End technologies and design concepts with the goal of achieving a professional level to then learn backend development.",
        about4:"Regarding my education and experience, I've completed around 90 hours of online Udemy courses on Front and Back End development. I consider my experience decent, and I believe it is close to a professional level. However, I haven't gained any formal work experience yet.",
        about5:"About my personality, hobbies and likings I'm a friendly guy that loves video games, artworks, tech stuff and motorsports, specially F1, category that I been watching closely since 2012 when I was 10 and found the sight of colorful cars speeding around circles highly entertaining.",
        about6:"I admire the F1 drivers for their histories of greatness and hard-fought wins against the best of the best drivers, engineers and manufacturers on the world.",
        about7:"When I'm not watching races, I might be playing some video games. I enjoy shooter games like PUBG, Battlefield, Apex Legends, or CSGO.",
        about8:"Gaming is something I really enjoy, and I'm interested into game development, but at the moment, it is not my priority. However, in the future, I'm sure I will try to make a game.",
        about9:`I love artworks, posters, logos, designs, patterns, typographies, color palettes, and whatever that looks cool. On my Twitter, I follow lots of artists; their creations give me ideas for my websites designs. In particular, I like Pixel Art and anime-style artworks. In this genre, I have many favorite artists, but if I had to choose one, my favorite is <a class="hover:bg-black font-semibold" href="https://www.pixiv.net/en/users/1039353/illustrations">Mika Pikazo.</a> I love his extremely colorful style.`,
        about10:"About music, mostly I like EDM / J-Core but everything that sounds good is ok for me, I don't really pay attention to the lyrics, I just like sounds and rhythms.",
        stack:"This is my current Tech stack :",
        projectsbtn:"PROJECTS",
        atmtittle:"Aston Martin Clone",
        atm1:"A Near-perfect replica of the official website of the luxurious sport cars brand Aston Martin.",
        atm2:"Site was made using pure Tailwind, this CSS framework had every class I needed to achieve an authentic representation of the original site's design and menus.",
        atm3:"Site also has vanilla Javascript to add functionality to menus, video carousel and video progress bar.",
        atm4:"Check repository",
        atm5:"Check live site",
        contactbtn:"CONTACT",
        contact1:"Whether you have a project in mind, want to collaborate, or just want to say Hi, feel free to reach out. ",
        contact2:"Your message is important to me, and I'll do my best to respond promptly.",
        contact3:"I'm open to job opportunities. Feel free to reach out if interested.",
        contact4:"Thank you for visiting my portfolio!.",
        contactf1:"Send me an Email",
        contactf2:"YourName@Email.com",
        contactf3:"Your Message",
        contactfbtn:"Send",

    },
    spanish: {
        tittle:`Desde Argentina <br class="md:hidden"> a los 21 diseño <br class="md:block hidden"> y <br class="md:hidden"> desarrollo sitios web.`,
        tittle2:"DESARROLLADOR WEB",
        tittle3:"Buscando empleo",
        navbar1:"SOBRE MI",
        navbar2:"PROYECTOS",
        navbar3:"CONTACTO",
        aboutbtn:"SOBRE MI",
        moreinfobtn:"Mas info",
        about1: "¡Hola! Soy un Desarrollador Front - End de Argentina con una sólida base de conocimientos en temas de tecnología y diseño.",
        about2:"Disfruto de crear sitios web visualmente atractivos y también de producir contenido multimedia personalizado para estos mismos, como por ejemplo; logos, imágenes, fondos, pósters o vídeos.",
        about3:"Actualmente estoy enfocando mis esfuerzos en dominar tecnologías de Front-End, y conceptos de diseño web, así como UX/UI, con el objetivo de alcanzar un nivel profesional en esta area, para luego pasar a aprender desarrollo backend.",
        about4:"En cuanto a mi educación y experiencia, he completado alrededor de 90 horas de cursos online de Udemy, cursos sobre desarrollo Front y Back End y otros conceptos de desarrollo web. Considero que mi experiencia es buena y creo que se acerca a un nivel profesional. Pero, Sin embargo, todavía no he tenido ninguna experiencia laboral (formal).",
        about5:"Sobre mi personalidad, pasatiempos y gustos, soy una persona amigable a la que le encantan los videojuegos, el arte, la tecnología y el automovilismo, especialmente la Fórmula 1, categoría que sigo desde 2012, cuando tenía 10 años y encontré entretenidos a estos coloridos autos corriendo en círculos.",
        about6:"Admiro a los pilotos de F1 por sus historias de grandeza y victorias, peleadas contra los mejores pilotos, ingenieros y fabricantes del mundo.",
        about7:"Cuando no estoy viendo carreras, puede que esté jugando algunos videojuegos. Mis favoritos son los de tipo shooter, como pueden ser PUBG, Battlefield, Apex Legends o CSGO.",
        about8:"Los juegos son algo que realmente disfruto y también estoy interesado en el desarrollo de juegos, pero por el momento esto no es mi prioridad. Sin embargo, en el futuro, estoy seguro de que intentaré desarrollar algun un juego.",
        about9:`Me encantan las obras de arte, posters, logos, diseños, patrones, tipografías, paletas de colores y todo lo que sea visualmente llamativo. En mi Twitter sigo a muchos artistas; sus creaciones me dan ideas para el diseño de mis sitios web. En particular, me gustan los estilos tipo Pixel Art y anime. En este género tengo muchos artistas favoritos, pero si tuviera que elegir uno, mi favorito es <a class="hover:bg-black font-semibold" href="https://www.pixiv.net/en/ usuarios/1039353/ilustraciones">Mika Pikazo.</a> Me encanta su estilo extremadamente colorido.`,
        about10:"En cuanto a la música, principalmente me gusta EDM / J-Core pero todo lo que suena bien está bien para mí, no presto mucha atención a las letras de las canciones, solo me importa que suenen bien",
        stack:"Este es mi stack de tecnologías :",
        projectsbtn:"PROYECTOS",
        atmtittle:"Aston Martin Clon",
        atm1:"Una réplica casi perfecta del sitio web oficial, de la lujosa marca de autos deportivos Aston Martin.",
        atm2:"El sitio se creó utilizando Tailwind CSS en su totalidad, este framework de CSS tenía todas las clases que necesitaba para lograr una representación auténtica del diseño y los menús del sitio original.",
        atm3:"El sitio también tiene Javascript vanilla para agregar funcionalidad a los menús, al carrusel de videos y a la barra de progreso de los videos.",
        atm4:"Link al repositorio",
        atm5:"Link al sitio",
        contactbtn:"CONTACTO",
        contact1:"Si tienes un proyecto en mente, quieres colaborar o simplemente quieres saludar, no dudes en comunicarte.",
        contact2:"Tu mensaje es importante para mí y haré todo lo posible para responder pronto.",
        contact3:"Estoy disponible para oportunidades laborales. No dude en comunicarse si está interesado.",
        contact4:"¡Gracias por visitar mi portafolio!.",
        contactf1:"Enviame un Email",
        contactf2:"TuNombre@Email.com",
        contactf3:"Tu mensaje",
        contactfbtn:"Enviar",

    },
};

function changeLanguage(language) {
    const currentTranslations = translations[language];
    document.getElementById("tittle").innerHTML = currentTranslations.tittle;
    document.getElementById("tittle2").innerText = currentTranslations.tittle2;
    document.getElementById("tittle3").innerText = currentTranslations.tittle3;



    document.getElementById("navbar1").innerText = currentTranslations.navbar1;
    document.getElementById("navbar2").innerText = currentTranslations.navbar2;
    document.getElementById("navbar3").innerText = currentTranslations.navbar3;

    document.getElementById("aboutbtn").innerText = currentTranslations.aboutbtn;
    document.getElementById("about1").innerText = currentTranslations.about1;
    document.getElementById("about2").innerText = currentTranslations.about2;
    document.getElementById("about3").innerText = currentTranslations.about3;
    document.getElementById("about4").innerText = currentTranslations.about4;
    document.getElementById("about5").innerText = currentTranslations.about5;
    document.getElementById("about6").innerText = currentTranslations.about6;
    document.getElementById("about7").innerText = currentTranslations.about7;
    document.getElementById("about8").innerText = currentTranslations.about8;
    document.getElementById("about9").innerHTML = currentTranslations.about9;
    document.getElementById("about10").innerText = currentTranslations.about10;

    document.getElementById("moreinfobtn").innerText = currentTranslations.moreinfobtn;
    document.getElementById("stack").innerText = currentTranslations.stack;
    document.getElementById("projectsbtn").innerText = currentTranslations.projectsbtn;

    document.getElementById("atmtittle").innerText = currentTranslations.atmtittle;
    document.getElementById("atm1").innerText = currentTranslations.atm1;
    document.getElementById("atm2").innerText = currentTranslations.atm2;
    document.getElementById("atm3").innerText = currentTranslations.atm3;
    document.getElementById("atm4").innerText = currentTranslations.atm4;
    document.getElementById("atm5").innerText = currentTranslations.atm5;

    document.getElementById("contactbtn").innerText = currentTranslations.contactbtn;
    document.getElementById("contact1").innerText = currentTranslations.contact1;
    document.getElementById("contact2").innerText = currentTranslations.contact2;
    document.getElementById("contact3").innerText = currentTranslations.contact3;
    document.getElementById("contact4").innerText = currentTranslations.contact4;

    document.getElementById("contactf1").innerText = currentTranslations.contactf1;
    document.getElementById("contactf2").placeholder = currentTranslations.contactf2;
    document.getElementById("contactf3").placeholder = currentTranslations.contactf3;
    document.getElementById("contactfbtn").innerText = currentTranslations.contactfbtn;


};

  document.getElementById("englishBtn").addEventListener("click", function () {
      changeLanguage("english");
      document.documentElement.lang="en";
    this.classList.add("b-border-orange");
    this.classList.remove("b-border-gray")
    this.classList.add("scale-110")
    document.getElementById("spanishBtn").classList.remove("b-border-orange")
    document.getElementById("spanishBtn").classList.add("b-border-gray")
    document.getElementById("spanishBtn").classList.remove("scale-110")

  });

  document.getElementById("spanishBtn").addEventListener("click", function () {
    changeLanguage("spanish");
    document.documentElement.lang="es";
    this.classList.add("b-border-orange");
    this.classList.remove("b-border-gray")
    this.classList.add("scale-110")
    document.getElementById("englishBtn").classList.remove("b-border-orange")
    document.getElementById("englishBtn").classList.add("b-border-gray")
    document.getElementById("englishBtn").classList.remove("scale-110")

  });

