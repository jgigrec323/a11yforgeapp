import ModeSwitcher from "../mode-switcher/mode-switcher";
const navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ModeSwitcher></ModeSwitcher>
      </div>
    </nav>
  );
};

export default navbar;
