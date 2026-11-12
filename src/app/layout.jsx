// Stylesheets load once, here, in the order the components used to import
// them, so the cascade is identical on every page. global.css (tokens and base
// styles) comes first so component rules win on equal specificity.
import '../css/global.css';
import '../css/themeToggle.css';
import '../css/navbar.css';
import '../css/hero.css';
import '../css/about.css';
import '../css/skills.css';
import '../css/professional.css';
import '../css/projects.css';
import '../css/contact.css';
import '../css/footer.css';
import '../css/contact-form.css';
import '../css/allProjects.css';

const title = 'Mezbaur Are Rafi — Software Engineer';

export const metadata = {
    title,
    description: 'Software engineer working on production web applications, Learning Management Systems and eCommerce platforms — full-stack JavaScript, REST APIs, integrations and Linux infrastructure.',
    openGraph: {
        type: 'website',
        title,
        description: 'Software engineer working on production web applications, Learning Management Systems and eCommerce platforms.',
    },
};

// Resolve the theme before first paint so there is no flash of the wrong one.
// Mirrors the logic in src/others/useTheme.js. data-theme-pref lets the theme
// toggle show the stored choice before React has hydrated.
const themeScript = `(function () {
  var root = document.documentElement;
  try {
    var stored = localStorage.getItem('theme');
    var preference = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    var dark = preference === 'dark'
      || (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    root.setAttribute('data-theme-pref', preference);
    root.style.colorScheme = dark ? 'dark' : 'light';
  } catch (error) {
    root.setAttribute('data-theme', 'dark');
  }
})();`;

// Without JavaScript nothing would ever mark the scroll-reveal elements as
// visible, so show them as they are once revealed.
const noScriptStyles = '.reveal,.heading-reveal .eyebrow,.heading-reveal .section-title,.heading-reveal .section-sub{opacity:1;transform:none}';

const favicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230b1220'/><path d='M25 21 15 32l10 11M39 21l10 11-10 11' stroke='%233b82f6' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>";

// The theme script sets data-theme on <html> before React hydrates, hence
// suppressHydrationWarning. data-scroll-behavior keeps the smooth scrolling
// for in-page anchors but jumps straight to the top on route changes.
const RootLayout = ({ children }) => (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            <noscript>
                <style>{noScriptStyles}</style>
            </noscript>
            {/* Updated by useTheme when the theme changes; the layout never
                re-renders it, so the value it sets survives navigation. */}
            <meta name="theme-color" content="#131924" />
            <link rel="icon" href={favicon} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
                rel="stylesheet"
            />
            {/* Font Awesome kit (CSS/webfont mode): loads before first paint,
                as it did before, so icons are styled from the start. */}
            <script src="https://kit.fontawesome.com/b8ff67c0e1.js" crossOrigin="anonymous" />
        </head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
