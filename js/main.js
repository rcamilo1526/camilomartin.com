(function () {

  /* ── Tech pill style (reused in translated HTML strings) ── */
  var pill = "font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;color:#2f6fe0;background:rgba(47,111,224,.08);border:1px solid rgba(47,111,224,.18);border-radius:3px;padding:1px 7px;white-space:nowrap";

  /* ── Translations ── */
  var T = {
    en: {
      'nav.professional': 'Professional',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.books': 'Books',
      'nav.horizon': 'Horizon',
      'nav.contact': 'Contact',

      'hero.label': '// senior data engineer',

      'pro.label': '01 / Professional life',
      'pro.h2': 'From legacy bottlenecks to platforms that move in minutes.',
      'pro.desc': 'Senior Data Engineer with 5+ years designing and delivering end-to-end data platforms across fintech, e-commerce, and enterprise environments — scalable, cost-efficient pipelines on AWS, Snowflake, Spark, dbt & Python, with a consistent track record of turning slow, legacy processes into fast, reliable ones.',

      'stat.years': 'Years engineering data',
      'stat.speed': 'Pipeline speed-up · 8h→30m',
      'stat.tables': 'Largest tables consolidated',
      'stat.records': 'Records processed daily',

      'epam.date': 'Nov 2025 – Present · Remote',
      'epam.client': 'Client: foodservice equipment & supplies distribution (USA)',
      'epam.b1': 'Leading the modernization of a business-critical platform — migrating ELT from Spark-based AWS Glue to <span style="' + pill + '">Airbyte + dbt + Redshift</span>, integrating ~10 GB/day from Oracle, SQL Server, OpenEdge &amp; IBM DB2.',
      'epam.b2': 'Re-engineered legacy Spark pipelines to eliminate memory bottlenecks — cutting a critical pipeline from <span style="' + pill + '">8 h → 30 min</span> <span style="' + pill + '">16× faster</span>.',
      'epam.b3': 'Replaced legacy SSIS packages with <span style="' + pill + '">Airflow DAGs</span> for observability, maintainability &amp; scheduling control.',
      'epam.b4': 'Rolling out <span style="' + pill + '">Claude — skills, agents &amp; MCP servers</span> as a developer-productivity and incident-response accelerator across dbt, Terraform, SQL &amp; Airflow.',

      'glob1.client': 'Enterprise data consolidation into Snowflake',
      'glob1.b1': 'Consolidated large on-prem &amp; Amazon RDS Oracle databases into Snowflake — including <span style="' + pill + '">~3 TB tables · 50M+ rows/day</span> — via ETL, ELT &amp; Reverse-ETL.',
      'glob1.b2': 'Redesigned the data model from scratch (~20 models across ~50 tables) — reporting <span style="' + pill + '">10 h → 5 min</span>.',
      'glob1.b3': 'Built Snowflake stored procedures and high-volume load patterns with Snowflake + Airflow + Airbyte; enhanced pipelines with SnowPark via Notebooks, Worksheets &amp; Streamlit.',

      'glob2.client': 'End-to-end data lakehouse on AWS',
      'glob2.b1': 'Built end-to-end pipelines for a conflict-of-interest application — ~10 sources at <span style="' + pill + '">~40 GB/day</span> into a .NET app.',
      'glob2.b2': 'Architected the data layer with AWS Neptune (entity-relationship logic) and OpenSearch (fast per-company lookups).',
      'glob2.b3': 'Implemented a data lake with Apache Spark + Iceberg on AWS Glue &amp; Athena; orchestrated with Step Functions, Glue &amp; Lambda. Earlier: documented IBM DataStage ETL and automated XML extraction in Python.',

      'rappi.b1': 'Built data marts in Snowflake for BI, Data Science &amp; Operations — <span style="' + pill + '">~60 GB/day · peak ~150M rows</span>.',
      'rappi.b2': 'Migrated batch ingestion from Apache NiFi to Spark on AWS Glue — <span style="' + pill + '">6 h → 20 min</span>.',
      'rappi.b3': "Built ETL/ELT for the legal &amp; regulatory reporting behind RappiPay's banking-license process in Colombia — contributing to a new bank that remains in operation today. Added Apache Kafka streaming for near-real-time statements.",

      'esri.b1': 'Built Python, R &amp; Bash geospatial pipelines — a census-cleaning script that did in <span style="' + pill + '">1 day what took weeks</span>, and COVID-19 automation <span style="' + pill + '">15 h → 15 min</span>.',
      'esri.b2': 'Developed on-demand geospatial tooling for internal clients and supported ArcGIS / ArcGIS Online through demos and technical talks.',

      'about.label': '02 / About me',
      'about.h2': 'Beyond the pipelines.',
      'about.desc': "Away from the data platforms, I'm happiest in motion — traveling to new places, hiking trails, and playing sport. I currently train <strong style=\"color:#16202e;font-weight:500\">CrossFit at an intermediate level</strong> and run regularly. Sport keeps the same discipline I bring to engineering: show up, measure, improve.",
      'about.lang': 'Languages',
      'about.lang.native': 'Native',
      'about.lang.fullpro': 'Full Professional',
      'about.lang.elem': 'Elementary',
      'about.sports': 'Sports I play',
      'about.intermediate': 'INTERMEDIATE',
      'about.current': 'CURRENT',
      'sport.swim': 'Swimming',
      'sport.tennis': 'Tennis',
      'sport.basketball': 'Basketball',
      'sport.pingpong': 'Ping Pong',
      'about.travel': 'Travel',
      'about.travel.desc': 'New places, new perspectives.',
      'about.hiking': 'Hiking',
      'about.hiking.desc': 'Trails, elevation, quiet.',

      'skills.label': '03 / Skills',
      'skills.h2': 'The stack I build on.',
      'skill.de': 'Data Engineering',
      'skill.cloud': 'Cloud & Warehouses',
      'skill.proc': 'Processing & Orchestration',
      'skill.langs': 'Languages & Tooling',
      'skill.ai': 'AI / ML',

      'creds.certs': 'Certifications',
      'creds.edu': 'Education',
      'edu.degree1': 'Cadastral &amp; Geodetic Engineering',
      'edu.degree2': 'Software Systems Technician',

      'books.label': '04 / Reading',
      'books.h2': 'Books I recommend.',
      'books.desc': 'A short shelf on stoicism, mindset, and the practice of staying present.',
      'book.tag.stoicism': 'Stoicism',
      'book.tag.humility': 'Humility',
      'book.tag.presence': 'Presence',
      'book.tag.growth': 'Growth',
      'book.tag.freedom': 'Freedom',
      'book.tag.scale': 'Scale',
      'book.tag.info': 'Information',
      'book.tag.focus': 'Focus',
      'book.tag.virtue': 'Virtue',
      'book.tag.literacy': 'Literacy',
      'book.stoic.sub': 'Courage · Temperance · Justice · Wisdom',

      'horizon.label': '05 / Horizon',
      'horizon.h2': "Eyes on what's next.",
      'horizon.desc': 'Beyond the data stack, I follow the frontiers that will reshape how we live and work — from autonomous machines to the expansion of human presence beyond Earth. The same mindset that drives good engineering drives curiosity about what comes next.',
      'hz.rob.title': 'Robotics',
      'hz.rob.desc': 'Humanoid and industrial robots moving from labs into real supply chains. I track embodied AI, locomotion breakthroughs, and the data infrastructure these machines will demand at scale.',
      'hz.space.title': 'Space Exploration',
      'hz.space.desc': 'Return to the Moon, Mars ambitions, reusable launch vehicles — science fiction becoming engineering timelines. Mission telemetry and deep-space data pipelines are among the hardest problems in the field.',
      'hz.energy.title': 'Energy & Climate Tech',
      'hz.energy.desc': 'Fusion, next-gen batteries, smart grids. Energy is foundational infrastructure, and the transition to cleaner systems generates genuinely hard real-time data problems worth solving.',
      'hz.quantum.title': 'Quantum Computing',
      'hz.quantum.desc': "Qubits, superposition, and entanglement are moving from physics papers into early commercial hardware. Quantum's implications for cryptography, optimization, and eventually data processing make it one of the most consequential bets of the decade.",

      'contact.label': 'Get in touch',
      'contact.h2': "Let's check your data architecture to implement AI effectively or Let's build platforms that run in minutes.",
      'contact.sub': 'Eager to shape the future with data.',
      'contact.email': 'Email',
      'footer.title': 'Senior Data Engineer'
    },

    es: {
      'nav.professional': 'Profesional',
      'nav.about': 'Sobre mí',
      'nav.skills': 'Habilidades',
      'nav.books': 'Libros',
      'nav.horizon': 'Horizonte',
      'nav.contact': 'Contacto',

      'hero.label': '// ingeniero senior de datos',

      'pro.label': '01 / Vida profesional',
      'pro.h2': 'De cuellos de botella heredados a plataformas que se mueven en minutos.',
      'pro.desc': 'Ingeniero Senior de Datos con más de 5 años diseñando y entregando plataformas de datos end-to-end en fintech, e-commerce y entornos empresariales — pipelines escalables y de bajo costo en AWS, Snowflake, Spark, dbt y Python, con un historial consistente de convertir procesos lentos y obsoletos en sistemas rápidos y confiables.',

      'stat.years': 'Años en ingeniería de datos',
      'stat.speed': 'Aceleración de pipeline · 8h→30m',
      'stat.tables': 'Tablas más grandes consolidadas',
      'stat.records': 'Registros procesados diariamente',

      'epam.date': 'Nov 2025 – Presente · Remoto',
      'epam.client': 'Cliente: distribución de equipos y suministros para restaurantes (EE.UU.)',
      'epam.b1': 'Liderando la modernización de una plataforma crítica de negocio — migrando ELT de AWS Glue basado en Spark a <span style="' + pill + '">Airbyte + dbt + Redshift</span>, integrando ~10 GB/día desde Oracle, SQL Server, OpenEdge e IBM DB2.',
      'epam.b2': 'Re-ingeniería de pipelines Spark heredados para eliminar cuellos de botella de memoria — reduciendo un pipeline crítico de <span style="' + pill + '">8 h → 30 min</span> <span style="' + pill + '">16× más rápido</span>.',
      'epam.b3': 'Reemplazo de paquetes SSIS heredados con <span style="' + pill + '">DAGs de Airflow</span> para mayor observabilidad, mantenibilidad y control de programación.',
      'epam.b4': 'Implementando <span style="' + pill + '">Claude — skills, agents y MCP servers</span> como acelerador de productividad para desarrolladores y respuesta a incidentes en dbt, Terraform, SQL y Airflow.',

      'glob1.client': 'Consolidación de datos empresariales en Snowflake',
      'glob1.b1': 'Consolidación de grandes bases de datos Oracle on-prem y Amazon RDS en Snowflake — incluyendo <span style="' + pill + '">~3 TB · 50M+ filas/día</span> — vía ETL, ELT y Reverse-ETL.',
      'glob1.b2': 'Rediseño del modelo de datos desde cero (~20 modelos en ~50 tablas) — reportes de <span style="' + pill + '">10 h → 5 min</span>.',
      'glob1.b3': 'Construcción de procedimientos almacenados en Snowflake y patrones de carga de alto volumen con Snowflake + Airflow + Airbyte; mejora de pipelines con SnowPark vía Notebooks, Worksheets y Streamlit.',

      'glob2.client': 'Data lakehouse end-to-end en AWS',
      'glob2.b1': 'Construcción de pipelines end-to-end para una aplicación de conflictos de interés — ~10 fuentes a <span style="' + pill + '">~40 GB/día</span> hacia una app .NET.',
      'glob2.b2': 'Diseño de la capa de datos con AWS Neptune (lógica de relaciones entre entidades) y OpenSearch (búsquedas rápidas por empresa).',
      'glob2.b3': 'Implementación de un data lake con Apache Spark + Iceberg en AWS Glue y Athena; orquestado con Step Functions, Glue y Lambda. Anteriormente: documentación de ETL IBM DataStage y automatización de extracción XML en Python.',

      'rappi.b1': 'Construcción de data marts en Snowflake para BI, Ciencia de Datos y Operaciones — <span style="' + pill + '">~60 GB/día · pico ~150M filas</span>.',
      'rappi.b2': 'Migración de ingestión por lotes de Apache NiFi a Spark en AWS Glue — <span style="' + pill + '">6 h → 20 min</span>.',
      'rappi.b3': 'Construcción de ETL/ELT para los informes legales y regulatorios del proceso de licencia bancaria de RappiPay en Colombia — contribuyendo a un banco que sigue operando hoy. Se añadió streaming con Apache Kafka para estados de cuenta en tiempo casi real.',

      'esri.b1': 'Construcción de pipelines geoespaciales en Python, R y Bash — un script de limpieza censal que hizo en <span style="' + pill + '">1 día lo que tomaba semanas</span>, y automatización COVID-19 <span style="' + pill + '">15 h → 15 min</span>.',
      'esri.b2': 'Desarrollo de herramientas geoespaciales a demanda para clientes internos y soporte a ArcGIS / ArcGIS Online mediante demos y charlas técnicas.',

      'about.label': '02 / Sobre mí',
      'about.h2': 'Más allá de los pipelines.',
      'about.desc': 'Lejos de las plataformas de datos, estoy más feliz en movimiento — viajando a nuevos lugares, recorriendo senderos y practicando deporte. Actualmente entreno <strong style="color:#16202e;font-weight:500">CrossFit a nivel intermedio</strong> y corro regularmente. El deporte mantiene la misma disciplina que traigo a la ingeniería: presentarse, medir, mejorar.',
      'about.lang': 'Idiomas',
      'about.lang.native': 'Nativo',
      'about.lang.fullpro': 'Profesional completo',
      'about.lang.elem': 'Básico',
      'about.sports': 'Deportes que practico',
      'about.intermediate': 'INTERMEDIO',
      'about.current': 'ACTUAL',
      'sport.swim': 'Natación',
      'sport.tennis': 'Tenis',
      'sport.basketball': 'Baloncesto',
      'sport.pingpong': 'Ping Pong',
      'about.travel': 'Viajes',
      'about.travel.desc': 'Nuevos lugares, nuevas perspectivas.',
      'about.hiking': 'Senderismo',
      'about.hiking.desc': 'Senderos, altura, silencio.',

      'skills.label': '03 / Habilidades',
      'skills.h2': 'El stack con el que construyo.',
      'skill.de': 'Ingeniería de Datos',
      'skill.cloud': 'Nube y Almacenes',
      'skill.proc': 'Procesamiento y Orquestación',
      'skill.langs': 'Lenguajes y Herramientas',
      'skill.ai': 'IA / ML',

      'creds.certs': 'Certificaciones',
      'creds.edu': 'Educación',
      'edu.degree1': 'Ingeniería Catastral y Geodésica',
      'edu.degree2': 'Técnico en Sistemas de Software',

      'books.label': '04 / Lecturas',
      'books.h2': 'Libros que recomiendo.',
      'books.desc': 'Una pequeña estantería sobre estoicismo, mentalidad y el arte de mantenerse presente.',
      'book.tag.stoicism': 'Estoicismo',
      'book.tag.humility': 'Humildad',
      'book.tag.presence': 'Presencia',
      'book.tag.growth': 'Crecimiento',
      'book.tag.freedom': 'Libertad',
      'book.tag.scale': 'Escala',
      'book.tag.info': 'Información',
      'book.tag.focus': 'Enfoque',
      'book.tag.virtue': 'Virtud',
      'book.tag.literacy': 'Cultura empresarial',
      'book.stoic.sub': 'Coraje · Templanza · Justicia · Sabiduría',

      'horizon.label': '05 / Horizonte',
      'horizon.h2': 'Con la vista en lo que viene.',
      'horizon.desc': 'Más allá del stack de datos, sigo las fronteras que van a redefinir cómo vivimos y trabajamos — desde máquinas autónomas hasta la expansión de la presencia humana más allá de la Tierra. La misma mentalidad que impulsa la buena ingeniería impulsa la curiosidad sobre lo que viene.',
      'hz.rob.title': 'Robótica',
      'hz.rob.desc': 'Robots humanoides e industriales pasando de los laboratorios a cadenas de suministro reales. Sigo la IA encarnada, los avances en locomoción y la infraestructura de datos que estas máquinas demandarán a escala.',
      'hz.space.title': 'Exploración Espacial',
      'hz.space.desc': 'Regreso a la Luna, ambiciones en Marte, vehículos de lanzamiento reutilizables — la ciencia ficción convirtiéndose en plazos de ingeniería. La telemetría de misiones y los pipelines de datos en el espacio profundo están entre los problemas más difíciles del campo.',
      'hz.energy.title': 'Energía y Tecnología Climática',
      'hz.energy.desc': 'Fusión, baterías de nueva generación, redes inteligentes. La energía es infraestructura fundamental, y la transición hacia sistemas más limpios genera problemas de datos en tiempo real genuinamente difíciles y que vale la pena resolver.',
      'hz.quantum.title': 'Computación Cuántica',
      'hz.quantum.desc': 'Los qubits, la superposición y el entrelazamiento están pasando de los artículos de física al hardware comercial temprano. Las implicaciones de la computación cuántica para la criptografía, la optimización y el procesamiento de datos la convierten en una de las apuestas más trascendentales de la década.',

      'contact.label': 'Contáctame',
      'contact.h2': 'Revisemos tu arquitectura de datos para implementar IA de manera efectiva o construyamos plataformas que se ejecuten en minutos.',
      'contact.sub': 'Con ganas de moldear el futuro con datos.',
      'contact.email': 'Correo',
      'footer.title': 'Ingeniero Senior de Datos'
    }
  };

  var currentLang = 'en';

  /* ── i18n ── */
  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    var dict = T[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    var enBtn = document.getElementById('lt-en');
    var esBtn = document.getElementById('lt-es');
    if (enBtn && esBtn) {
      enBtn.className = lang === 'en' ? 'lt-active' : 'lt-inactive';
      esBtn.className = lang === 'es' ? 'lt-active' : 'lt-inactive';
    }
  }

  window.setLang = setLang;
  window.toggleLang = function () { setLang(currentLang === 'en' ? 'es' : 'en'); };

  /* ── Hamburger menu ── */
  var hbBtn = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hbBtn && navLinks) {
    hbBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hbBtn.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hbBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll reveal ── */
  function reveal(el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  }

  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(reveal);
  }

  setTimeout(function () {
    document.querySelectorAll('[data-reveal]').forEach(reveal);
  }, 2800);

  /* ── Scroll effects (parallax + nav state) ── */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    var stars = document.getElementById('heroStars');
    var earth = document.getElementById('heroEarth');
    if (stars) stars.style.transform = 'translateY(' + (y * 0.28) + 'px)';
    if (earth) earth.style.transform = 'translateX(-50%) translateY(' + (y * 0.12) + 'px)';

    var hero = document.getElementById('hero');
    var hh = hero ? hero.offsetHeight : 800;
    var nav = document.getElementById('nav');
    if (!nav) return;

    var scrolled = y > hh * 0.62;
    if (scrolled) {
      nav.style.background = 'rgba(238,241,246,.82)';
      nav.style.backdropFilter = 'saturate(160%) blur(12px)';
      nav.style.webkitBackdropFilter = 'saturate(160%) blur(12px)';
      nav.style.borderBottomColor = '#e2e7ee';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.webkitBackdropFilter = 'none';
      nav.style.borderBottomColor = 'transparent';
    }

    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var brand = a.getAttribute('data-brand');
      a.style.color = scrolled
        ? (brand ? '#16202e' : '#41506a')
        : (brand ? '#eaf1ff' : 'rgba(210,225,255,.72)');
    });

    var hbColor = scrolled ? 'rgba(65,80,106,.9)' : 'rgba(210,225,255,.8)';
    document.querySelectorAll('.hamburger span').forEach(function (s) { s.style.background = hbColor; });

    /* Lang toggle tracks scroll */
    var lt = document.getElementById('langToggle');
    if (lt) lt.style.borderColor = scrolled ? 'rgba(65,80,106,.3)' : 'rgba(210,225,255,.28)';
    document.querySelectorAll('#langToggle button.lt-active').forEach(function (b) {
      b.style.color = scrolled ? '#16202e' : '#fff';
      b.style.background = scrolled ? 'rgba(22,32,46,.12)' : 'rgba(255,255,255,.22)';
    });
    document.querySelectorAll('#langToggle button.lt-inactive').forEach(function (b) {
      b.style.color = scrolled ? 'rgba(65,80,106,.35)' : 'rgba(210,225,255,.28)';
      b.style.background = '';
    });
    document.querySelectorAll('#langToggle .lt-sep').forEach(function (s) {
      s.style.color = scrolled ? 'rgba(65,80,106,.2)' : 'rgba(210,225,255,.18)';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
