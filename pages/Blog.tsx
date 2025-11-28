import React, { useState } from 'react';
import { Search, Sparkles, Mic, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { explainConcept } from '../services/geminiService';
import { Article } from '../types';

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [explanation, setExplanation] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const articles: Article[] = [
        {
            id: '1',
            title: 'Plasticidade Cerebral: O Superpoder da Infância',
            excerpt: 'ARTIGO COMPLETO: Entenda como as experiências nos primeiros anos de vida moldam a arquitetura do cérebro para sempre.',
            category: 'Neurociência Básica',
            image: 'https://picsum.photos/400/250?random=1'
        },
        {
            id: '2',
            title: 'Funções Executivas: O Maestro do Cérebro',
            excerpt: 'Como ajudar crianças a desenvolverem autocontrole, memória de trabalho e flexibilidade cognitiva.',
            category: 'Desenvolvimento Cognitivo',
            image: 'https://picsum.photos/400/250?random=2'
        },
        {
            id: '3',
            title: 'A Importância do Brincar Livre',
            excerpt: 'O brincar não é apenas diversão; é a forma como a natureza ensina o cérebro a resolver problemas.',
            category: 'Práticas Pedagógicas',
            image: 'https://picsum.photos/400/250?random=3'
        }
    ];

    const interviews = [
        {
            id: 'i1',
            name: 'Dr. Roberto Lent',
            role: 'Neurocientista',
            topic: 'Mitos sobre o cérebro na educação',
            image: 'https://picsum.photos/100/100?random=10'
        },
        {
            id: 'i2',
            name: 'Dra. Suzana Herculano',
            role: 'Bióloga e Neurocientista',
            topic: 'A evolução do cérebro humano',
            image: 'https://picsum.photos/100/100?random=11'
        }
    ];

    const handleExplain = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        
        setLoading(true);
        setExplanation(null);
        const result = await explainConcept(searchTerm);
        setExplanation(result);
        setLoading(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-16">
                <h2 className="font-display text-3xl font-bold text-slate-800 mb-4">O Cérebro na Infância</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Artigos aprofundados para desvendar os mistérios da mente infantil.
                </p>
            </div>

            {/* AI Explainer Section */}
            <div className="bg-gradient-to-r from-neuro-blue to-blue-600 rounded-3xl p-8 mb-16 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center mb-4">
                        <Sparkles className="text-yellow-300 mr-2 h-6 w-6" />
                        <h3 className="font-display font-bold text-2xl">Dicionário Neuro-Pedagógico IA</h3>
                    </div>
                    <p className="mb-6 text-blue-100">
                        Encontrou um termo difícil? Digite abaixo (ex: "Sinapse", "Mielinização", "Córtex Pré-frontal") e nossa IA explicará de forma didática.
                    </p>
                    
                    <form onSubmit={handleExplain} className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Digite um conceito..." 
                            className="flex-grow px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button 
                            type="submit"
                            disabled={loading}
                            className="bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50"
                        >
                            {loading ? 'Consultando...' : 'Explicar'}
                        </button>
                    </form>

                    {explanation && (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-fade-in">
                            <h4 className="font-bold text-lg mb-2 text-yellow-300">Explicação Simplificada:</h4>
                            <p className="leading-relaxed">{explanation}</p>
                        </div>
                    )}
                </div>
                {/* Background decoration */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <BrainIcon size={400} />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                     <h3 className="font-bold text-xl text-slate-800 border-l-4 border-neuro-teal pl-3">Artigos em Destaque</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {articles.map((article) => (
                            <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-slate-100 flex flex-col group">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <button className="bg-white/90 p-2 rounded-full hover:text-blue-600"><Facebook size={16} /></button>
                                        <button className="bg-white/90 p-2 rounded-full hover:text-blue-400"><Twitter size={16} /></button>
                                        <button className="bg-white/90 p-2 rounded-full hover:text-green-500"><Share2 size={16} /></button>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-neuro-teal uppercase tracking-wider mb-2">{article.category}</span>
                                    <h3 className="font-display font-bold text-xl text-slate-800 mb-3">{article.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{article.excerpt}</p>
                                    <button className="text-neuro-blue font-semibold hover:text-blue-700 transition self-start">
                                        Ler artigo completo &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Interviews Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="flex items-center font-bold text-lg text-slate-800 mb-6">
                            <Mic className="text-neuro-teal mr-2 h-5 w-5" />
                            Entrevistas com Especialistas
                        </h3>
                        <div className="space-y-6">
                            {interviews.map(interview => (
                                <div key={interview.id} className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition">
                                    <img src={interview.image} alt={interview.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm leading-tight">{interview.name}</h4>
                                        <p className="text-xs text-neuro-blue font-semibold mb-1">{interview.role}</p>
                                        <p className="text-xs text-slate-500 italic">"{interview.topic}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 text-center text-sm font-bold text-neuro-blue hover:underline">
                            Ver todas as entrevistas
                        </button>
                    </div>

                    {/* Newsletter Box */}
                    <div className="bg-neuro-yellow/10 p-6 rounded-2xl border border-neuro-yellow/20">
                        <h3 className="font-bold text-lg text-slate-800 mb-2">Não perca nada!</h3>
                        <p className="text-sm text-slate-600 mb-4">Receba nossos artigos exclusivos diretamente no seu e-mail.</p>
                        <input type="email" placeholder="Seu e-mail..." className="w-full p-3 rounded-lg border border-slate-200 mb-2 text-sm" />
                        <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition text-sm">
                            Inscrever-se
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Icon component for background
const BrainIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2ZM10.5 5.5C10.5 6.60457 9.60457 7.5 8.5 7.5C7.39543 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 7.39543 3.5 8.5 3.5C9.60457 3.5 10.5 4.39543 10.5 5.5ZM13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4ZM17 4.5C17 6.15685 15.6569 7.5 14 7.5C12.3431 7.5 11 6.15685 11 4.5C11 2.84315 12.3431 1.5 14 1.5C15.6569 1.5 17 2.84315 17 4.5ZM19 8C19 9.38071 17.8807 10.5 16.5 10.5C15.1193 10.5 14 9.38071 14 8C14 6.61929 15.1193 5.5 16.5 5.5C17.8807 5.5 19 6.61929 19 8ZM22 10.5C22 12.1569 20.6569 13.5 19 13.5C17.3431 13.5 16 12.1569 16 10.5C16 8.84315 17.3431 7.5 19 7.5C20.6569 7.5 22 8.84315 22 10.5ZM10 10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10C6 8.89543 6.89543 8 8 8C9.10457 8 10 8.89543 10 10ZM5.5 8C5.5 9.38071 4.38071 10.5 3 10.5C1.61929 10.5 0.5 9.38071 0.5 8C0.5 6.61929 1.61929 5.5 3 5.5C4.38071 5.5 5.5 6.61929 5.5 8ZM8 15C8 16.6569 6.65685 18 5 18C3.34315 18 2 16.6569 2 15C2 13.3431 3.34315 12 5 12C6.65685 12 8 13.3431 8 15ZM12 14.5C12 15.8807 10.8807 17 9.5 17C8.11929 17 7 15.8807 7 14.5C7 13.1193 8.11929 12 9.5 12C10.8807 12 12 13.1193 12 14.5ZM15 18.5C15 20.1569 13.6569 21.5 12 21.5C10.3431 21.5 9 20.1569 9 18.5C9 16.8431 10.3431 15.5 12 15.5C13.6569 15.5 15 16.8431 15 18.5ZM19 16.5C19 17.8807 17.8807 19 16.5 19C15.1193 19 14 17.8807 14 16.5C14 15.1193 15.1193 14 16.5 14C17.8807 14 19 15.1193 19 16.5ZM21.5 21C21.5 21.8284 20.8284 22.5 20 22.5C19.1716 22.5 18.5 21.8284 18.5 21C18.5 20.1716 19.1716 19.5 20 19.5C20.8284 19.5 21.5 20.1716 21.5 21Z" />
    </svg>
);

export default Blog;