import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Strategies from './pages/Strategies';
import Courses from './pages/Courses';
import About from './pages/About';
import Community from './pages/Community';
import Tools from './pages/Tools';
import Premium from './pages/Premium';
import Glossary from './pages/Glossary';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { PageView } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setCurrentPage(PageView.DASHBOARD);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentPage(PageView.HOME);
    };

    const renderPage = () => {
        switch (currentPage) {
            case PageView.HOME:
                return <Home setPage={setCurrentPage} />;
            case PageView.BLOG:
                return <Blog />;
            case PageView.GLOSSARY:
                return <Glossary />;
            case PageView.STRATEGIES:
                return <Strategies />;
            case PageView.TOOLS:
                return <Tools />;
            case PageView.COURSES:
                return <Courses />;
            case PageView.ABOUT:
                return <About />;
            case PageView.COMMUNITY:
                return <Community />;
            case PageView.PREMIUM:
                return <Premium />;
            case PageView.THANK_YOU:
                return <ThankYou setPage={setCurrentPage} />;
            case PageView.LOGIN:
                return <Login onLogin={handleLogin} />;
            case PageView.DASHBOARD:
                return isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />;
            default:
                return <Home setPage={setCurrentPage} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-800">
            {/* Navbar is visible on all pages except maybe Login if we wanted a standalone feel, 
                but usually good to keep it for navigation home. 
                We might hide it on Dashboard if Sidebar handles everything, but for now we keep it simple. */}
            {currentPage !== PageView.DASHBOARD && (
                <Navbar 
                    currentPage={currentPage} 
                    setPage={setCurrentPage} 
                    isLoggedIn={isLoggedIn}
                    onLogout={handleLogout}
                />
            )}
            
            <main className="flex-grow">
                {renderPage()}
            </main>

            {/* Hide Footer on Dashboard to give it an "app" feel, optional but cleaner */}
            {currentPage !== PageView.DASHBOARD && (
                <footer className="bg-slate-900 text-slate-400 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-white font-display font-bold text-xl mb-4">NeuroPedagogia Hub</h3>
                            <p className="max-w-sm mb-6">
                                Conectando ciência e afeto para transformar a educação infantil através de evidências.
                            </p>
                            <div className="flex space-x-4">
                                {/* Social Placeholders */}
                                <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-neuro-teal transition cursor-pointer flex items-center justify-center">I</div>
                                <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-neuro-blue transition cursor-pointer flex items-center justify-center">L</div>
                                <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-white hover:text-slate-900 transition cursor-pointer flex items-center justify-center">Y</div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Navegação</h4>
                            <ul className="space-y-2 text-sm">
                                <li><button onClick={() => setCurrentPage(PageView.BLOG)} className="hover:text-neuro-teal transition">O Cérebro</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.GLOSSARY)} className="hover:text-neuro-teal transition">Glossário</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.STRATEGIES)} className="hover:text-neuro-teal transition">Recursos Práticos</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.TOOLS)} className="hover:text-neuro-teal transition">Ferramentas e Testes</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.COMMUNITY)} className="hover:text-neuro-teal transition">Comunidade</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Premium</h4>
                            <ul className="space-y-2 text-sm">
                                <li><button onClick={() => setCurrentPage(PageView.PREMIUM)} className="hover:text-yellow-400 transition">Seja Membro</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.PREMIUM)} className="hover:text-yellow-400 transition">Loja</button></li>
                                <li><button onClick={() => setCurrentPage(PageView.COURSES)} className="hover:text-yellow-400 transition">Cursos</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
                        <p>© {new Date().getFullYear()} NeuroPedagogia Hub. Todos os direitos reservados.</p>
                    </div>
                </footer>
            )}
        </div>
    );
};

export default App;