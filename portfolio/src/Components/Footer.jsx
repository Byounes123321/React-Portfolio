export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        &copy; {currentYear} bassilyounes
      </footer>
    );
  }
  