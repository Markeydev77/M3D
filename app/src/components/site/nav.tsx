import { useState } from "react";

const LINKS = [
  { href: "#sluzby", label: "Služby" },
  { href: "#ukazky", label: "Ukážky" },
  { href: "#o-mne", label: "O mne" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="m3d-nav">
        <a className="m3d-nav__mark" href="/">
          <img
            alt=""
            className="m3d-nav__mark-badge"
            height={30}
            src="/assets/brand/logo-nav.png"
            style={{ borderRadius: 8, objectFit: "cover" }}
            width={30}
          />
          MARKEY 3D
        </a>

        <nav className="m3d-nav__links">
          {LINKS.map((link) => (
            <a className="m3d-nav__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-label="Menu"
          className="m3d-nav__toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="m3d-nav__toggle-bar" />
        </button>
      </header>

      {open ? (
        <div className="m3d-nav__sheet">
          {LINKS.map((link) => (
            <a
              className="m3d-nav__sheet-link"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}
