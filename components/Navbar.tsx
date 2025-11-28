import React from 'react';
import { Brain, Menu, X, Crown, UserCircle, LogOut } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
    currentPage: PageView;
    setPage: (page: PageView) => void;
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, isLoggedIn, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        { label: 'Home', value: PageView.HOME },
        { label: 'Blog', value: PageView.BLOG },
        { label: 'Recursos', value: PageView.STRATEGIES }, // Mapped to strategies/resources
        { label: 'Cursos', value: PageView.COURSES },
        { label: 'Sobre', value: PageView.ABOUT },
    ];

    const handleAuthClick = () => {
        if (isLoggedIn) {
            setPage(PageView.DASHBOARD);
        } else {
            setPage(PageView.LOGIN);
        }
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center cursor-pointer" onClick={() => setPage(PageView.HOME)}>
                        <div className="bg-neuro-teal/10 p-2 rounded-lg mr-3">
                            <Brain className="h-6 w-6 text-neuro-teal" />
                        </div>
                        <span className="font-display font-bold text-xl text-slate-800 tracking-tight">NeuroEduca</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => setPage(item.value)}
                                className={`font-medium transition-colors duration-200 text-sm tracking-wide ${
                                    currentPage === item.value 
                                    ? 'text-neuro-teal font-bold' 
                                    : 'text-slate-600 hover:text-neuro-teal'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Secondary Menu Items (Extra features kept for functionality) */}
                        <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
                             <button
                                onClick={() => setPage(PageView.COMMUNITY)}
                                className={`font-medium transition-colors duration-200 text-sm ${
                                    currentPage === PageView.COMMUNITY ? 'text-neuro-teal' : 'text-slate-500 hover:text-neuro-teal'
                                }`}
                            >
                                Comunidade
                            </button>
                             <button
                                onClick={() => setPage(PageView.PREMIUM)}
                                className={`flex items-center font-bold text-sm transition-colors ${
                                    currentPage === PageView.PREMIUM ? 'text-yellow-600' : 'text-slate-700 hover:text-yellow-600'
                                }`}
                            >
                                <Crown className="h-4 w-4 mr-1 text-yellow-500" />
                                Loja
                            </button>
                        </div>
                        
                        <div className="ml-4 flex items-center space-x-2">
                            <button 
                                onClick={handleAuthClick}
                                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                                    isLoggedIn 
                                    ? 'bg-neuro-teal text-white hover:bg-teal-600' 
                                    : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}
                            >
                                <UserCircle className="h-4 w-4" />
                                <span>{isLoggedIn ? 'Meu Painel' : 'Entrar'}</span>
                            </button>
                            {isLoggedIn && (
                                <button 
                                    onClick={onLogout}
                                    title="Sair"
                                    className="p-2.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition"
                                >
                                    <LogOut className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center space-x-4">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-neuro-teal transition">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => {
                                setPage(item.value);
                                setIsMenuOpen(false);
                            }}
                            className={`block w-full text-left font-bold text-lg py-3 border-b border-slate-50 ${
                                currentPage === item.value ? 'text-neuro-teal' : 'text-slate-600'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="pt-2 space-y-3">
                        <button onClick={() => setPage(PageView.COMMUNITY)} className="block w-full text-left font-medium text-slate-600 py-2">Comunidade</button>
                        <button onClick={() => setPage(PageView.TOOLS)} className="block w-full text-left font-medium text-slate-600 py-2">Ferramentas</button>
                        <button onClick={() => setPage(PageView.GLOSSARY)} className="block w-full text-left font-medium text-slate-600 py-2">Glossário</button>
                        <button
                            onClick={() => {
                                setPage(PageView.PREMIUM);
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left font-bold py-2 text-yellow-600 flex items-center"
                        >
                            <Crown className="h-4 w-4 mr-2" />
                            Loja & Premium
                        </button>
                         <button 
                            onClick={() => {
                                handleAuthClick();
                                setIsMenuOpen(false);
                            }}
                            className="w-full mt-4 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center"
                        >
                            <UserCircle className="h-5 w-5 mr-2" />
                            {isLoggedIn ? 'Ir para Painel' : 'Área do Aluno'}
                        </button>
                        {isLoggedIn && (
                            <button 
                                onClick={() => {
                                    onLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-red-50 text-red-500 py-3 rounded-xl font-bold flex items-center justify-center"
                            >
                                <LogOut className="h-5 w-5 mr-2" />
                                Sair
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;