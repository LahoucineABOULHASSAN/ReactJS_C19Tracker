const Footer = () => {
  return (
    <footer className="flex flex-column">
      <p>
        API from{" "}
        <a href="https://covid19api.com" target="_blank" rel="noreferrer">
          covid19api.com
        </a>
      </p>
      <p>
        Copyright &copy; {new Date().getFullYear()} ||
        <span>
          <a
            href="https://aboulhassan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Lahoucine Aboulhassan
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
