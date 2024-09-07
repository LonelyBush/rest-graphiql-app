import { useEffect, useState, useRef } from 'react';
import { NavLink } from '@remix-run/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ToggleLanguages from '../toggle-languages/toggle-languages';
import styles from './header.module.scss';
import { auth, logout } from '../../../utils/firebase-auth/firebase';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] },
    );

    const currentHeader = headerRef.current;

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, []);

  return (
    <>
      <div ref={headerRef} />
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? styles.logo : isActive ? styles.logoActive : styles.logo
          }
        />
        <nav className={styles.navHeader}>
          <ToggleLanguages />
          {user ? (
            <button
              type="button"
              className={styles.iconLogOut}
              aria-label="Log out"
              onClick={() => {
                logout();
              }}
            />
          ) : (
            <>
              <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.iconSignUp
                    : isActive
                      ? styles.iconSignUpActive
                      : styles.iconSignUp
                }
              />
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.iconSignIn
                    : isActive
                      ? styles.iconSignInActive
                      : styles.iconSignIn
                }
              />
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;