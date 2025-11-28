import React, { useState } from 'react';
import { ArrowRight, Brain, CheckCircle, Mail, Lock, User } from 'lucide-react';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate authentication delay
        setTimeout(() => {
            onLogin();
        }, 800);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row animate-fade-in">
            {/* Left Side - Visual & Value */}
            <div className="md:w-1/2 bg-slate-900 text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                
                <div className="relative z-10 max-w-md mx-auto">
                    <div className="bg-neuro-teal/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                        <Brain className="h-8 w-8 text-neuro-teal" />
                    </div>
                    <h2 className="font-display text-4xl font-bold mb-6">
                        Bem-vindo à Comunidade <span className="text-neuro-teal">NeuroEduca</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Acesse seus cursos, materiais exclusivos e conecte-se com milhares de educadores que estão transformando a sala de aula através da neurociência.
                    </p>
                    
                    <ul className="space-y-4">
                        {[
                            "Acesso vitalício aos cursos adquiridos",
                            "Materiais complementares para download",
                            "Certificados com validação digital",
                            "Fórum exclusivo de dúvidas"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-slate-300">
                                <CheckCircle className="h-5 w-5 text-neuro-teal mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center items-center">
                <div className="max-w-md w-full">
                    <div className="text-center mb-10">
                        <h3 className="font-display text-3xl font-bold text-slate-800 mb-2">
                            {isLoginView ? 'Acesse sua conta' : 'Crie sua conta'}
                        </h3>
                        <p className="text-slate-500">
                            {isLoginView ? 'Preencha seus dados para entrar.' : 'Comece sua jornada gratuitamente.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLoginView && (
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input 
                                        type="text" 
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neuro-teal transition"
                                        placeholder="Seu nome"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neuro-teal transition"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-bold text-slate-700">Senha</label>
                                {isLoginView && <a href="#" className="text-xs text-neuro-blue font-bold hover:underline">Esqueceu a senha?</a>}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input 
                                    type="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-neuro-teal transition"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-neuro-teal text-white font-bold py-4 rounded-xl hover:bg-teal-600 transition shadow-lg flex items-center justify-center group"
                        >
                            {isLoginView ? 'Entrar na Plataforma' : 'Criar Conta Grátis'}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-600">
                            {isLoginView ? 'Ainda não tem conta?' : 'Já tem uma conta?'}
                            <button 
                                onClick={() => setIsLoginView(!isLoginView)}
                                className="ml-2 text-neuro-blue font-bold hover:underline focus:outline-none"
                            >
                                {isLoginView ? 'Inscreva-se agora' : 'Fazer Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;