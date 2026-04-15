export default function WideBanner() {
  return (
    <section style={{ padding: '0 0 16px' }}>
      <div className="container">
        <a href="#" className="wide-banner__link" aria-label="عروض خاصة">
          <img
            className="wide-banner__img"
            src="/assets/banner-wide.webp"
            alt="عروض خاصة شذايا"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
