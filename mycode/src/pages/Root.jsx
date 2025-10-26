import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.isActive : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? styles.isActive : undefined
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.isActive : undefined
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
