/* cases.html — self-contained.
   Holds its own EN/ES dictionary plus the shared nav/reveal behaviour so the
   page works standalone. Keep the nav/hamburger/reveal blocks in sync with
   js/main.js if you change them there. */
(function () {

  /* ── Translations ── */
  var T = {
    en: {
      'nav.professional': 'Professional',
      'nav.cases': 'Cases',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.books': 'Books',
      'nav.horizon': 'Horizon',
      'nav.contact': 'Contact',

      'cases.label': '// success cases · 2019 — 2026',
      'cases.h1': 'Seven years turning slow processes into systems.',
      'cases.sub': "Six projects across five companies. Every one started the same way: something critical was slow, manual, or impossible to trust. Here's what I built — and what changed.",
      'cases.meta1': '6 cases',
      'cases.meta2': '5 companies',

      'case.problem': 'The problem',
      'case.built': 'What I built',
      'case.result': 'Result',
      'case.current': 'Current',
      'case.n1': 'Case 01',
      'case.n2': 'Case 02',
      'case.n3': 'Case 03',
      'case.n4': 'Case 04',
      'case.n5': 'Case 05',
      'case.n6': 'Case 06',

      'c1.title': 'Geospatial automation at national scale',
      'c1.role': 'Technical Marketing Engineer · GIS Advisor',
      'c1.problem': "Colombia's national census arrived as raw, inconsistent extracts that had to be hand-cleaned and joined to cartography before anyone could put it on a map. Each delivery took weeks, and every refresh started from zero. COVID-19 raised the stakes: case data had to reach a public map every single day.",
      'c1.built': 'Python pipelines that normalized the census tables, validated every record-to-geometry join and published map-ready layers automatically — built on ArcPy and the ArcGIS API for Python, with R and Bash handling the heavier reshaping. For COVID-19, a scheduled job read the daily case feed, reshaped it and pushed it straight into a REST feature service with no human in the loop.',
      'c1.mv1': 'Weeks → 1 day',
      'c1.m1': 'Census processing',
      'c1.m2': 'Daily COVID-19 update',
      'c1.m3': 'Manual steps in the refresh',

      'c2.title': 'From NiFi to Spark: a six-hour batch in twenty minutes',
      'c2.role': 'Data Engineer',
      'c2.problem': 'Batch ingestion ran on Apache NiFi. A full cycle took around six hours, which meant the business opened its day without fresh data — and the flow-based setup was hard to scale, hard to observe, and hard to reason about when a run failed at 4 a.m.',
      'c2.built': 'I migrated the batch path to Apache Spark jobs on AWS Glue, orchestrated by Apache Airflow. That brought partitioned and incremental loads, dependency-aware scheduling, retries, and real visibility into every run — feeding the Snowflake data marts used by BI, Data Science and Operations. NiFi came out of the batch path entirely.',
      'c2.m1': '~18× faster ingestion',
      'c2.m2': 'Processed per day',
      'c2.m3': 'Rows on peak days',

      'c3.title': 'The data behind a banking license',
      'c3.role': 'Data Engineer',
      'c3.problem': 'RappiPay was applying for a banking license in Colombia. That meant regulatory reports in exactly the formats the regulator expects, on a fixed calendar, assembled by hand every cycle — and cardholders who needed their credit-card statement records in near real time, not the next morning.',
      'c3.built': "I modeled the regulatory reports in Snowflake — dimensional models plus stored procedures — and automated the whole chain end to end: generation, formatting, and delivery of the report files into the government's shared folder. Alongside it, a streaming path built on Apache NiFi and Apache Kafka delivered credit-card statement records in near real time.",
      'c3.mv1': 'Manual → scheduled',
      'c3.m1': 'Auditable regulatory reporting',
      'c3.mv2': 'Near real time',
      'c3.m2': 'Card statement records',
      'c3.mv3': 'A licensed bank',
      'c3.m3': 'Still operating today',

      'c4.title': 'A lakehouse that feeds a client-facing app',
      'c4.role': 'Semi Senior Data Engineer',
      'c4.problem': 'A conflict-of-interest application needed to answer questions spanning around ten disconnected sources — Oracle, PostgreSQL and flat files — with relationship traversal between entities and instant per-company lookup. None of that infrastructure existed yet.',
      'c4.built': 'The first end-to-end pipeline on the account: ingestion from every source into a multi-layer data lake on Apache Iceberg — raw, curated and consumption — processed with Spark on AWS Glue, queried through Athena and orchestrated with Step Functions, Glue and Lambda. From the consumption layer I bulk-loaded into Amazon Neptune for the relationship graph and OpenSearch for fast per-company lookups: the two engines the .NET application reads from.',
      'c4.m1': 'Ingested from ~10 sources',
      'c4.mv2': 'Graph + search',
      'c4.m2': 'Serving a live product',
      'c4.mv3': 'First of its kind',
      'c4.m3': 'End-to-end pipeline on the account',

      'c5.title': 'A services model built — and traceable — inside Snowflake',
      'c5.role': 'Semi Senior Advanced Data Engineer',
      'c5.problem': "A consultancy's services business had no shared data model. Every report was rebuilt from scratch, a full reporting run took around ten hours, and when a number looked wrong nobody could trace where it came from.",
      'c5.built': 'I designed and developed the facts and dimensions for the services model natively in Snowflake — roughly 20 models across ~50 tables — with ingestion automated through Airbyte, orchestration in Airflow, and transformation in Snowpark scripts and stored procedures, all inside the Snowflake ecosystem. Then I built a Streamlit app that renders lineage, so an analyst can trace any metric back to its source table instead of asking an engineer.',
      'c5.m1': 'Reporting run time',
      'c5.m2': 'Largest tables consolidated',
      'c5.m3': 'Rows loaded per day',

      'c6.title': 'Glue scripts out, governed ELT in',
      'c6.role': 'Senior Data Integration Engineer',
      'c6.problem': 'A business-critical platform ran its ELT as hand-written Spark jobs on AWS Glue, with legacy SSIS packages still sitting in the path. It was expensive, memory-bound, opaque when it broke — and one critical pipeline took eight hours to finish.',
      'c6.built': 'I completed the migration to a governed ELT stack: Airbyte for extract and load, dbt for transformation, Amazon Redshift as the warehouse — infrastructure deployed with Terraform and everything orchestrated by Airflow. Around 10 GB/day now flows in from Oracle, SQL Server, OpenEdge and IBM DB2. SSIS packages were replaced with Airflow DAGs, and the Spark pipelines that stayed were re-engineered to eliminate memory bottlenecks.',
      'c6.m1': '16× faster critical pipeline',
      'c6.m2': 'From 4 source systems',
      'c6.mv3': 'Fully as code',
      'c6.m3': 'Infrastructure via Terraform',

      'pattern.label': 'The throughline',
      'pattern.h2': 'What repeats across all six.',
      'pattern.t1': 'Migrations that pay for themselves',
      'pattern.d1': "NiFi to Spark, Glue to dbt, SSIS to Airflow. The pattern isn't chasing new tools — it's finding the bottleneck that costs hours every day and removing it, then proving the number.",
      'pattern.t2': 'Models people can trace',
      'pattern.d2': "A pipeline nobody trusts is worse than no pipeline. Dimensional models, tested transformations, lineage an analyst can read without opening a ticket — that's what makes the data a product.",
      'pattern.t3': 'Automation that removes the human',
      'pattern.d3': "Census cleaning, COVID-19 publishing, regulatory filings, infrastructure deploys. If a person does it every cycle by hand, it's a script waiting to be written.",

      'contact.label': 'Get in touch',
      'cases.contact.h2': "If one of these looks like the problem you're facing, let's talk.",
      'cases.contact.sub': 'Happy to walk through the architecture behind any of them in detail.',
      'cases.back.label': 'Back to',
      'cases.back.value': 'Full profile',
      'footer.title': 'Senior Data Engineer'
    },

    es: {
      'nav.professional': 'Profesional',
      'nav.cases': 'Casos',
      'nav.skills': 'Habilidades',
      'nav.about': 'Sobre mí',
      'nav.books': 'Libros',
      'nav.horizon': 'Horizonte',
      'nav.contact': 'Contacto',

      'cases.label': '// casos de éxito · 2019 — 2026',
      'cases.h1': 'Siete años convirtiendo procesos lentos en sistemas.',
      'cases.sub': 'Seis proyectos en cinco empresas. Todos empezaron igual: algo crítico era lento, manual o imposible de confiar. Esto es lo que construí — y qué cambió.',
      'cases.meta1': '6 casos',
      'cases.meta2': '5 empresas',

      'case.problem': 'El problema',
      'case.built': 'Lo que construí',
      'case.result': 'Resultado',
      'case.current': 'Actual',
      'case.n1': 'Caso 01',
      'case.n2': 'Caso 02',
      'case.n3': 'Caso 03',
      'case.n4': 'Caso 04',
      'case.n5': 'Caso 05',
      'case.n6': 'Caso 06',

      'c1.title': 'Automatización geoespacial a escala nacional',
      'c1.role': 'Technical Marketing Engineer · Asesor GIS',
      'c1.problem': 'El censo nacional de Colombia llegaba como extractos crudos e inconsistentes que había que limpiar a mano y unir con la cartografía antes de poder llevarlos a un mapa. Cada entrega tomaba semanas, y cada actualización empezaba de cero. El COVID-19 subió la exigencia: los datos de casos tenían que llegar a un mapa público todos los días.',
      'c1.built': 'Pipelines en Python que normalizaban las tablas censales, validaban cada unión registro-geometría y publicaban capas listas para mapear de forma automática — sobre ArcPy y la ArcGIS API for Python, con R y Bash para las transformaciones más pesadas. Para COVID-19, un job programado leía el feed diario de casos, lo reestructuraba y lo enviaba directo a un feature service REST sin intervención humana.',
      'c1.mv1': 'Semanas → 1 día',
      'c1.m1': 'Procesamiento del censo',
      'c1.m2': 'Actualización diaria de COVID-19',
      'c1.m3': 'Pasos manuales en el refresco',

      'c2.title': 'De NiFi a Spark: un batch de seis horas en veinte minutos',
      'c2.role': 'Data Engineer',
      'c2.problem': 'La ingesta por lotes corría sobre Apache NiFi. Un ciclo completo tomaba unas seis horas, así que el negocio abría el día sin datos frescos — y el esquema basado en flujos era difícil de escalar, difícil de observar y difícil de entender cuando una corrida fallaba a las 4 a.m.',
      'c2.built': 'Migré el camino batch a jobs de Apache Spark sobre AWS Glue, orquestados con Apache Airflow. Eso trajo cargas particionadas e incrementales, scheduling consciente de dependencias, reintentos y visibilidad real de cada corrida — alimentando los data marts en Snowflake que usan BI, Ciencia de Datos y Operaciones. NiFi salió por completo del camino batch.',
      'c2.m1': 'Ingesta ~18× más rápida',
      'c2.m2': 'Procesados por día',
      'c2.m3': 'Filas en días pico',

      'c3.title': 'Los datos detrás de una licencia bancaria',
      'c3.role': 'Data Engineer',
      'c3.problem': 'RappiPay estaba tramitando su licencia bancaria en Colombia. Eso significaba informes regulatorios en los formatos exactos que exige el regulador, en un calendario fijo, armados a mano cada ciclo — y tarjetahabientes que necesitaban los registros de sus extractos de tarjeta de crédito casi en tiempo real, no a la mañana siguiente.',
      'c3.built': 'Modelé los informes regulatorios en Snowflake — modelos dimensionales más procedimientos almacenados — y automaticé toda la cadena de punta a punta: generación, formato y entrega de los archivos en la carpeta compartida del gobierno. En paralelo, un camino de streaming con Apache NiFi y Apache Kafka entregaba los registros de extractos de tarjeta casi en tiempo real.',
      'c3.mv1': 'Manual → programado',
      'c3.m1': 'Reporte regulatorio auditable',
      'c3.mv2': 'Casi en tiempo real',
      'c3.m2': 'Registros de extractos de tarjeta',
      'c3.mv3': 'Un banco con licencia',
      'c3.m3': 'Sigue operando hoy',

      'c4.title': 'Un lakehouse que alimenta una app de cara al cliente',
      'c4.role': 'Semi Senior Data Engineer',
      'c4.problem': 'Una aplicación de conflictos de interés necesitaba responder preguntas que cruzaban unas diez fuentes desconectadas — Oracle, PostgreSQL y archivos planos — con recorrido de relaciones entre entidades y búsqueda instantánea por empresa. Nada de esa infraestructura existía todavía.',
      'c4.built': 'El primer pipeline end-to-end de la cuenta: ingesta desde cada fuente hacia un data lake multicapa sobre Apache Iceberg — raw, curated y consumption — procesado con Spark en AWS Glue, consultado vía Athena y orquestado con Step Functions, Glue y Lambda. Desde la capa de consumo hice bulk load hacia Amazon Neptune para el grafo de relaciones y OpenSearch para búsquedas rápidas por empresa: los dos motores que lee la aplicación .NET.',
      'c4.m1': 'Ingeridos desde ~10 fuentes',
      'c4.mv2': 'Grafo + búsqueda',
      'c4.m2': 'Sirviendo un producto en vivo',
      'c4.mv3': 'Primero de su tipo',
      'c4.m3': 'Pipeline end-to-end en la cuenta',

      'c5.title': 'Un modelo de servicios construido — y trazable — dentro de Snowflake',
      'c5.role': 'Semi Senior Advanced Data Engineer',
      'c5.problem': 'El negocio de servicios de una consultora no tenía un modelo de datos compartido. Cada informe se reconstruía desde cero, una corrida completa de reportes tomaba unas diez horas, y cuando un número se veía raro nadie podía rastrear de dónde salía.',
      'c5.built': 'Diseñé y desarrollé los hechos y dimensiones del modelo de servicios de forma nativa en Snowflake — unos 20 modelos sobre ~50 tablas — con ingesta automatizada vía Airbyte, orquestación en Airflow y transformación en scripts de Snowpark y procedimientos almacenados, todo dentro del ecosistema Snowflake. Después construí una app en Streamlit que renderiza el linaje, para que un analista pueda rastrear cualquier métrica hasta su tabla origen sin abrir un ticket.',
      'c5.m1': 'Tiempo de corrida de reportes',
      'c5.m2': 'Tablas más grandes consolidadas',
      'c5.m3': 'Filas cargadas por día',

      'c6.title': 'Fuera los scripts de Glue, dentro un ELT gobernado',
      'c6.role': 'Senior Data Integration Engineer',
      'c6.problem': 'Una plataforma crítica de negocio corría su ELT como jobs de Spark escritos a mano sobre AWS Glue, con paquetes SSIS heredados todavía en el camino. Era costosa, limitada por memoria, opaca cuando fallaba — y un pipeline crítico tardaba ocho horas en terminar.',
      'c6.built': 'Completé la migración a un stack ELT gobernado: Airbyte para extract y load, dbt para transformación, Amazon Redshift como warehouse — infraestructura desplegada con Terraform y todo orquestado por Airflow. Hoy entran ~10 GB/día desde Oracle, SQL Server, OpenEdge e IBM DB2. Los paquetes SSIS fueron reemplazados por DAGs de Airflow, y los pipelines de Spark que quedaron se re-diseñaron para eliminar los cuellos de botella de memoria.',
      'c6.m1': 'Pipeline crítico 16× más rápido',
      'c6.m2': 'Desde 4 sistemas fuente',
      'c6.mv3': 'Todo como código',
      'c6.m3': 'Infraestructura vía Terraform',

      'pattern.label': 'El hilo conductor',
      'pattern.h2': 'Lo que se repite en los seis.',
      'pattern.t1': 'Migraciones que se pagan solas',
      'pattern.d1': 'De NiFi a Spark, de Glue a dbt, de SSIS a Airflow. El patrón no es perseguir herramientas nuevas — es encontrar el cuello de botella que cuesta horas todos los días, quitarlo, y demostrar el número.',
      'pattern.t2': 'Modelos que la gente puede rastrear',
      'pattern.d2': 'Un pipeline en el que nadie confía es peor que ningún pipeline. Modelos dimensionales, transformaciones testeadas y linaje que un analista puede leer sin abrir un ticket — eso es lo que convierte los datos en producto.',
      'pattern.t3': 'Automatización que saca al humano del ciclo',
      'pattern.d3': 'Limpieza censal, publicación de COVID-19, entregas regulatorias, despliegues de infraestructura. Si una persona lo hace a mano cada ciclo, es un script esperando a ser escrito.',

      'contact.label': 'Contáctame',
      'cases.contact.h2': 'Si alguno de estos se parece al problema que tienes, hablemos.',
      'cases.contact.sub': 'Con gusto recorro la arquitectura detrás de cualquiera de ellos en detalle.',
      'cases.back.label': 'Volver a',
      'cases.back.value': 'Perfil completo',
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
    onScroll();
  }

  window.setLang = setLang;
  window.toggleLang = function () { setLang(currentLang === 'en' ? 'es' : 'en'); };

  var ltEn = document.getElementById('lt-en');
  var ltEs = document.getElementById('lt-es');
  if (ltEn) ltEn.addEventListener('click', function () { setLang('en'); });
  if (ltEs) ltEs.addEventListener('click', function () { setLang('es'); });

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
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(reveal);
  }

  setTimeout(function () {
    document.querySelectorAll('[data-reveal]').forEach(reveal);
  }, 2800);

  /* ── Timeline rail ── */
  var cases = [].slice.call(document.querySelectorAll('.case'));
  var stops = [].slice.call(document.querySelectorAll('.rail-stop'));
  var railScroll = document.querySelector('.rail-scroll');
  var railProgress = document.getElementById('railProgress');
  var activeIdx = -1;

  function absTop(el) {
    return el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
  }

  function updateRail() {
    if (!cases.length || !stops.length) return;
    var y = window.scrollY || window.pageYOffset || 0;
    var marker = y + 190;           /* just below the sticky rail */
    var mid = y + window.innerHeight * 0.42;

    /* progress fill across the whole case flow */
    if (railProgress) {
      var start = absTop(cases[0]);
      var last = cases[cases.length - 1];
      var end = absTop(last) + last.offsetHeight;
      var p = (mid - start) / Math.max(end - start, 1);
      p = p < 0 ? 0 : (p > 1 ? 1 : p);
      railProgress.style.width = (p * 100).toFixed(2) + '%';
    }

    /* active stop */
    var idx = 0;
    for (var i = 0; i < cases.length; i++) {
      if (absTop(cases[i]) <= marker) idx = i;
    }
    if (idx === activeIdx) return;
    activeIdx = idx;

    stops.forEach(function (s, i) {
      if (i === idx) s.classList.add('is-active');
      else s.classList.remove('is-active');
    });

    /* keep the active stop visible when the rail scrolls horizontally */
    if (railScroll && railScroll.scrollWidth > railScroll.clientWidth + 4) {
      var s = stops[idx];
      var target = s.offsetLeft - (railScroll.clientWidth - s.offsetWidth) / 2;
      if (railScroll.scrollTo) railScroll.scrollTo({ left: target, behavior: 'smooth' });
      else railScroll.scrollLeft = target;
    }
  }

  /* ── Scroll effects (parallax + nav state) ── */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    var stars = document.getElementById('heroStars');
    if (stars) stars.style.transform = 'translateY(' + (y * 0.24) + 'px)';

    var hero = document.getElementById('casesHero');
    var hh = hero ? hero.offsetHeight : 700;
    var nav = document.getElementById('nav');
    if (!nav) return;

    var scrolled = y > hh * 0.7;
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

    updateRail();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { activeIdx = -1; onScroll(); });
  onScroll();

})();
