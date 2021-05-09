const Header = () => {
  return (
    <header className="flex flex-column">
      <h1>C19Tracker</h1>
      <p>Stay home, Stay safe</p>
      <p>{new Date().toDateString()}</p>
    </header>
  );
};

export default Header;
