import { portfolio } from './portfolioData.js';

function ButtonLink({ href, children, variant = 'dark' }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="На главную">
        V_D
      </a>
      <nav className="nav" aria-label="Основная навигация">
        {portfolio.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <SiteHeader />
      <div className="hero__media" aria-hidden="true">
        <div className="portrait portrait--large" />
      </div>
      <div className="hero__content">
        <p className="eyebrow">{portfolio.hero.eyebrow}</p>
        <h1 id="hero-title">
          {portfolio.hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p>{portfolio.hero.text}</p>
        <ButtonLink href={portfolio.hero.cta.href}>{portfolio.hero.cta.label}</ButtonLink>
      </div>
    </section>
  );
}

function EditorialIntro() {
  return (
    <section className="intro section" id="intro" aria-labelledby="intro-title">
      <h2 id="intro-title" className="sr-only">
        Подход к дизайну
      </h2>
      <div className="intro__images" aria-hidden="true">
        {portfolio.intro.images.map((image, index) => (
          <figure className={`scrap scrap--${index + 1}`} key={image.src}>
            <img src={image.src} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
      <blockquote>
        <span>"</span>
        {portfolio.intro.quote}
        <span>"</span>
      </blockquote>
      <p>{portfolio.intro.note}</p>
    </section>
  );
}

function Cases() {
  return (
    <section className="section cases" id="cases" aria-labelledby="cases-title">
      <div className="section-heading">
        <h2 id="cases-title">КЕЙСЫ</h2>
        <ButtonLink href="#contact" variant="dark">
          обсудить проект
        </ButtonLink>
      </div>
      <div className="cases__grid">
        {portfolio.cases.map((item, index) => (
          <article className="case-card" key={item.title}>
            <div className={`case-card__thumb ${item.image ? 'case-card__thumb--image' : ''}`} aria-hidden="true">
              {item.image ? <img src={item.image.src} alt="" loading="lazy" /> : null}
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="case-card__meta">
              <span>{item.type}</span>
              <span>{item.year}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        <a className="case-cta" href="#contact">
          <span>здесь может быть ваш проект</span>
        </a>
      </div>
    </section>
  );
}

function Achievement() {
  const achievement = portfolio.achievement;

  return (
    <section className="section achievement" id="achievement" aria-labelledby="achievement-title">
      <div className="achievement__label">
        <span>новая часть</span>
        <span>{achievement.place}</span>
      </div>
      <div className="achievement__main">
        <p className="accent-line">достижение</p>
        <h2 id="achievement-title">{achievement.team}</h2>
        <p className="achievement__contest">{achievement.contest}</p>
        <figure className="achievement__photo">
          <img src={achievement.image.src} alt={achievement.image.alt} loading="lazy" />
          <figcaption>{achievement.participant} / {achievement.team}</figcaption>
        </figure>
        <p>{achievement.text}</p>
        <dl className="achievement__facts">
          <div>
            <dt>участник</dt>
            <dd>{achievement.participant}</dd>
          </div>
          <div>
            <dt>университет</dt>
            <dd>{achievement.university}</dd>
          </div>
          <div>
            <dt>награда</dt>
            <dd>{achievement.place}, {achievement.prize}</dd>
          </div>
        </dl>
        <ButtonLink href={achievement.source} variant="light">
          источник
        </ButtonLink>
      </div>
    </section>
  );
}

function Service() {
  return (
    <section className="section service" id="service" aria-labelledby="service-title">
      <div className="service__side">
        {portfolio.service.details.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
      <div className="service__main">
        <p className="accent-line">{portfolio.service.kicker}</p>
        <h2 id="service-title">{portfolio.service.title}</h2>
        <p className="price">{portfolio.service.price}</p>
        <p>{portfolio.service.text}</p>
        <ButtonLink href="#contact">заказать лендинг</ButtonLink>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <h2 id="process-title">Создание качественного веб-дизайна — это понятный процесс</h2>
      <div className="process__grid">
        {portfolio.process.map((step) => (
          <article className="process-card" data-tilt key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Collaboration() {
  return (
    <section className="section collaboration" id="collaboration" aria-labelledby="collaboration-title">
      <div className="collaboration__image" aria-hidden="true" />
      <div className="collaboration__copy">
        <h2 id="collaboration-title">{portfolio.collaboration.title}</h2>
        <p>{portfolio.collaboration.text}</p>
        <ul>
          {portfolio.collaboration.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <p className="logo-mark">V_D</p>
      <h2 id="contact-title">{portfolio.contact.title}</h2>
      <a className="email" href={`mailto:${portfolio.contact.email}`}>
        {portfolio.contact.email}
      </a>
      <div className="contact__actions">
        {portfolio.contact.actions.map((action, index) => (
          <ButtonLink href={action.href} variant={index === 2 ? 'dark' : 'light'} key={action.label}>
            {action.label}
          </ButtonLink>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>©2026 VICTORIIAAA_DSGN</span>
      <a href="#hero">наверх</a>
    </footer>
  );
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#cases">
        Перейти к содержимому
      </a>
      <main className="page">
        <Hero />
        <EditorialIntro />
        <Achievement />
        <Cases />
        <Service />
        <Process />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
