import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, Eye, BookOpen, GraduationCap, CheckCircle, 
  Stethoscope, FileText, Brain, ChevronDown, Home, 
  Baby, Activity, Thermometer, Lungs, Moon, Sun
} from "lucide-react";
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();
  
  const headerBackground = useTransform(
    scrollY, 
    [0, 100], 
    [activeTheme === 'dark' ? "rgba(23, 23, 23, 0.9)" : "rgba(255, 255, 255, 0.9)", 
     activeTheme === 'dark' ? "rgba(23, 23, 23, 0.95)" : "rgba(255, 255, 255, 0.95)"]
  );
  const headerShadow = useTransform(
    scrollY, 
    [0, 100], 
    [activeTheme === 'dark' ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "0 2px 10px rgba(0, 0, 0, 0.05)", 
     activeTheme === 'dark' ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 4px 20px rgba(0, 0, 0, 0.1)"]
  );

  // Throttle mousemove events for better performance
  const throttleMouseMove = (callback: (e: MouseEvent) => void, delay: number) => {
    let previousCall = 0;
    return (event: MouseEvent) => {
      const now = Date.now();
      if (now - previousCall >= delay) {
        previousCall = now;
        callback(event);
      }
    };
  };

  useEffect(() => {
    const handleMouseMove = throttleMouseMove((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 30); // Throttle to 30ms

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  // Check if path is active or if any dropdown item is active
  const isPathActive = (path: string) => {
    return location.pathname === path;
  };
  
  const isDropdownActive = (items: { path: string }[]) => {
    return items.some(item => location.pathname === item.path);
  };

  const toggleTheme = () => {
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    setActiveTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  // Verificar preferência do usuário e do sistema ao carregar
  useEffect(() => {
    // Force light theme on initial load
    setActiveTheme('light');
    document.documentElement.classList.remove('dark');
    // localStorage.removeItem('theme'); // Optional: Uncomment to clear any previously saved theme

    // Note: The theme toggle button will still function and save to localStorage for the session,
    // but the next page load will always start in light mode.
    // We removed the system preference listener.
  }, []);

  // Enhanced navigation items with better icons and descriptions
  const navCategories = [
    { 
      name: "Início", 
      path: "/", 
      icon: <Home size={18} />,
      dropdown: false
    },
    {
      name: "Desenvolvimento",
      icon: <Brain size={18} />,
      dropdown: true,
      items: [
        { name: "Desenvolvimento Embrionário", path: "/desenvolvimento-embrionario", icon: <Baby size={16} /> }
      ]
    },
    {
      name: "Avaliação",
      icon: <CheckCircle size={18} />,
      dropdown: true,
      items: [
        { name: "Avaliação Neonatal", path: "/avaliacao-neonatal", icon: <Thermometer size={16} /> },
        { name: "Apgar", path: "/apgar", icon: <FileText size={16} /> }
      ]
    },
    {
      name: "UTI Neonatal",
      icon: <Activity size={18} />,
      dropdown: true,
      items: [
        { name: "UTINeo", path: "/utideo", icon: <BookOpen size={16} /> },
        { name: "Patologias Neonatais", path: "/patologias-neonatais", icon: <Stethoscope size={16} /> }
      ]
    },
    { 
      name: "Simulado", 
      path: "/simulado", 
      icon: <GraduationCap size={18} />,
      dropdown: false
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <motion.header
        style={{ 
          background: headerBackground, 
          boxShadow: headerShadow,
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}
        className="w-full py-4 px-6 md:px-8 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Baby size={32} className="text-blue-600" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full" />
            </motion.div>
            <motion.h1 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.03 }}
            >
              StudyWell Neonatal
            </motion.h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navCategories.map((category) => (
              <div key={category.name} className="relative group">
                {category.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(category.name)}
                      className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
                        ${isDropdownActive(category.items) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                      <span className="mr-1.5">{category.icon}</span>
                      {category.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${openDropdown === category.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === category.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center px-4 py-3 text-sm transition-colors
                                  ${isPathActive(item.path)
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                                {isPathActive(item.path) && (
                                  <motion.div 
                                    layoutId="activeIndicator"
                                    className="ml-auto h-2 w-2 rounded-full bg-blue-600" 
                                  />
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={category.path}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${isPathActive(category.path) 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    <span className="mr-1.5">{category.icon}</span>
                    {category.name}
                    {isPathActive(category.path) && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="ml-2 h-2 w-2 rounded-full bg-blue-600" 
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {activeTheme === 'light' ? (
                <Moon size={18} className="text-gray-700" />
              ) : (
                <Sun size={18} className="text-yellow-500" />
              )}
            </button>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto py-4 px-6 flex flex-col space-y-1">
              {navCategories.map((category, index) => (
                <div key={`mobile-cat-${index}`}>
                  {category.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(category.name)}
                        className={`w-full text-left text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors px-4 py-3 rounded-lg flex items-center justify-between ${openDropdown === category.name ? 'bg-brand-50 text-brand-600' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          {category.name}
                        </div>
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === category.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openDropdown === category.name && (
                        <div className="ml-4 mt-1 border-l-2 border-brand-100 pl-4 py-1 space-y-1">
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={`mobile-item-${itemIdx}`}
                              to={item.path}
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsOpen(false);
                              }}
                              className="text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors px-4 py-3 rounded-lg flex items-center gap-3"
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      key={`mobile-link-${index}`}
                      to={category.path}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-brand-600 hover:bg-brand-50 transition-colors px-4 py-3 rounded-lg flex items-center gap-3"
                    >
                      {category.icon}
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
      
      <main className="flex-grow pt-16 overflow-x-hidden">
        {children}
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto py-12 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center space-x-2">
                <Eye className="text-brand-600" size={24} />
                <span className="text-lg font-bold font-space text-gradient">StudyWell</span>
              </Link>
              <p className="mt-2 text-gray-500 max-w-xs">
                Aprofunde-se na Fisioterapia Neonatal com conteúdo especializado para estudantes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Navegação</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <Home size={16} />
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link to="/desenvolvimento-embrionario" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <Brain size={16} />
                      Desenvolvimento Embrionário
                    </Link>
                  </li>
                  <li>
                    <Link to="/avaliacao-neonatal" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <CheckCircle size={16} />
                      Avaliação Neonatal
                    </Link>
                  </li>
                  <li>
                    <Link to="/apgar" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <FileText size={16} />
                      Apgar
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Recursos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/utideo" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <BookOpen size={16} />
                      UTINeo
                    </Link>
                  </li>
                  <li>
                    <Link to="/patologias-neonatais" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <Stethoscope size={16} />
                      Patologias Neonatais
                    </Link>
                  </li>
                  <li>
                    <Link to="/simulado" className="text-gray-600 hover:text-brand-600 transition-colors duration-300 text-sm flex items-center gap-2">
                      <GraduationCap size={16} />
                      Simulado
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Contato</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-600 text-sm">
                    <span>weelzinhox22@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-500 text-sm"> 2025 StudyWell. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors duration-300">
                Termos
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors duration-300">
                Privacidade
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
