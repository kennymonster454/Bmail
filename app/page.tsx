export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="BMail home">
          <span className="brand-mark">B</span>
          <span>BMail</span>
        </a>
        <span className="phase-label">EARLY BUILD</span>
      </header>

      <section className="welcome-card">
        <div className="eyebrow">YOUR MAIL, YOUR WAY</div>
        <h1>Welcome to <span>BMail.</span></h1>
        <p className="intro">
          A fresh email app is taking shape. This is the starting point:
          the project is connected to Appwrite, and the next step is building
          accounts and message storage.
        </p>
        <div className="feature-grid">
          <article className="feature">
            <div className="feature-icon">IN</div>
            <h2>Inbox</h2>
            <p>Your received messages will appear here.</p>
          </article>
          <article className="feature">
            <div className="feature-icon">↗</div>
            <h2>Sent</h2>
            <p>Keep track of messages you send.</p>
          </article>
          <article className="feature">
            <div className="feature-icon">✎</div>
            <h2>Compose</h2>
            <p>Write a message when your account is ready.</p>
          </article>
        </div>
        <div className="next-step">
          <span className="next-step-label">NEXT BUILD STEP</span>
          <strong>Set up BMail accounts and a secure messages database.</strong>
        </div>
      </section>
      <footer> BMail is an independent project. External email delivery will be added separately.</footer>
    </main>
  );
}
