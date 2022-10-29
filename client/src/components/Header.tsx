import { Link } from "react-router-dom";
import Logo from "/logo.jpg";

const navigation = [
  { name: "Carros", href: "/" },
  { name: "Preços", href: "/" },
  { name: "Contato", href: "/" },
];

const Header = () => {
  return (
    <header className="bg-blue-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Softmakers</span>
              <img className="h-10 w-auto rounded-full" src={Logo} alt="Logo da softmakers" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-blue-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link to="/car" className="inline-block bg-blue-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              Adicionar um Carro
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-blue-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
