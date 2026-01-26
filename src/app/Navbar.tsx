
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPlane,
  FaHotel,
  FaHome,
  FaSuitcaseRolling,
  FaTrain,
  FaBus,
  FaInfoCircle,
  FaMapMarkedAlt
} from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import styles from './home.module.css';

interface NavItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  
  { href: '/hotel',     label: 'Hotels',            icon: <FaHotel /> },
  { href: '/packages',   label: 'Holiday Packages',  icon: <FaSuitcaseRolling /> },
  { href: '/train',     label: 'trains',            icon: <FaTrain /> },
  { href: '/bus',      label: 'Buses',             icon: <FaBus /> },
  { href: '/about', label: 'About Us', icon: <FaInfoCircle /> },
  
];

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/imag.png"
            alt="Logo"
            width={140}
            height={90}
            className={styles.logoImage}
          />
        </Link>
      </div>

      <ul className={styles.navItems}>
        {navItems.map(({ href, label, icon }) => (
          <li key={href} className={styles.navItem}>
            <Link href={href} className={styles.link}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.label}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.authLinks}>
        <Link href="/login" className={styles.authButton}>
          Login
        </Link>
        <span className={styles.authDivider}>/</span>
        <Link href="/login" className={styles.authButton}>
          Create Account
        </Link>
      </div>
    </nav>
  );
}
