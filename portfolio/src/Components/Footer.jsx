import Socials from "./Socials";

export default function Footer({ VPW }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {VPW < 1025 && <Socials />}
      &copy; Copyright Bassil Younes, {currentYear}
    </footer>
  );
}
