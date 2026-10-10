import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import snapshot from "../../src/generated/services-nav.json";

const OPEN_DELAY = 60;
const CLOSE_DELAY = 160;

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const openSoon = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
  }, [clearTimers]);

  const openNow = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, [clearTimers]);

  const closeSoon = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, [clearTimers]);

  const closeNow = useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers]);

  const onKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      closeNow();
      if (triggerRef.current) triggerRef.current.focus();
    }
  };

  const onBlur = (event) => {
    if (!rootRef.current || !rootRef.current.contains(event.relatedTarget)) {
      closeNow();
    }
  };

  const onTriggerClick = (event) => {
    const touch =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: none)").matches;
    if (touch && !open) {
      event.preventDefault();
      clearTimers();
      setOpen(true);
    }
  };

  return (
    <li
      ref={rootRef}
      className={`nav-item mega-nav${open ? " is-open" : ""}`}
      onMouseEnter={openSoon}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <Link
        ref={triggerRef}
        href="/services"
        className="nav-link mega-nav__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onTriggerClick}
      >
        Solutions
      </Link>
      <div className="mega-nav__panel">
        {snapshot.groups.map((group) => (
          <div className="mega-nav__col" key={group.heading}>
            <p className="mega-nav__heading">{group.heading}</p>
            <ul className="mega-nav__list">
              {group.links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="mega-nav__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {snapshot.industries && snapshot.industries.length > 0 && (
          <div className="mega-nav__col">
            <p className="mega-nav__heading">SEO by industry</p>
            <ul className="mega-nav__list">
              {snapshot.industries.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="mega-nav__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mega-nav__all">
          <Link href="/services" className="mega-nav__link mega-nav__link--all">
            All solutions
          </Link>
        </div>
      </div>
    </li>
  );
};

export default MegaMenu;
