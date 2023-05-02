export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        &copy; Copyright Bassil Younes, {currentYear} 
      </footer>
    );
  }
  