import React, { useState } from 'react';
import { ArrowRight, BookOpen, Lightbulb, Award, Download, Star, ChevronRight, Mail, Layout, CheckCircle } from 'lucide-react';
import { PageView } from '../types';

interface HomeProps {
    setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if(email) setSubscribed(true);
    };

    return (
        <div className="animate-fade-in font-sans text-slate-800">
            {/* HERO SECTION - A VITRINE */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Copy */}
                    <div className="md:w-1/2 text-left animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-neuro-teal/10 border border-neuro-teal/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-neuro-teal animate-pulse"></span>
                            <span className="text-xs font-bold tracking-wider text-teal-700 uppercase">Neurociência & Educação</span>
                        </div>
                        
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Neurociência <span className="text-transparent bg-clip-text bg-gradient-to-r from-neuro-blue to-teal-500">Descomplicada</span>
                        </h1>
                        
                        <p className="font-sans text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                            O Guia Prático para o Desenvolvimento Cerebral na Educação Infantil. Para professores, pedagogos e pais que desejam métodos baseados em evidências.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button 
                                onClick={() => setPage(PageView.THANK_YOU)}
                                className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all transform bg-neuro-teal rounded-xl shadow-lg hover:bg-teal-600 hover:shadow-teal-500/30 hover:-translate-y-1 group"
                            >
                                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                Baixe Grátis: Guia Prático
                            </button>
                            <button 
                                onClick={() => setPage(PageView.ABOUT)}
                                className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-neuro-blue hover:text-neuro-blue transition"
                            >
                                Saiba Mais
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=1" alt="User" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=2" alt="User" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=3" alt="User" />
                            </div>
                            <p className="font-medium">+10.000 educadores já baixaram</p>
                        </div>
                    </div>
                    
                    {/* Visual / Mockup */}
                    <div className="md:w-1/2 relative flex justify-center perspective-1000">
                        {/* Abstract blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100/50 to-yellow-100/50 rounded-full blur-3xl -z-10"></div>
                        
                        {/* Book Mockup */}
                        <div className="relative w-64 md:w-80 aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition duration-700 ease-out cursor-pointer group border-l-4 border-slate-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-r-2xl rounded-l-md overflow-hidden flex flex-col p-8 text-white relative">
                                <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                <div className="mt-8 mb-auto">
                                    <div className="flex items-center space-x-2 mb-6 opacity-80">
                                        <Layout className="w-6 h-6 text-neuro-teal" />
                                        <span className="text-xs font-bold tracking-widest uppercase">E-book Oficial</span>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl leading-tight mb-2">
                                        O Professor <br/><span className="text-neuro-teal">Neuro-Inovador</span>
                                    </h3>
                                    <p className="text-slate-400 text-sm">Volume 1 • 2ª Edição</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="w-12 h-12 bg-neuro-teal rounded-full flex items-center justify-center mb-4">
                                        <Lightbulb className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-xs text-slate-300">NeuroEduca Publications</p>
                                </div>
                            </div>
                            {/* Spine shadow */}
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTHORITY / TRUST STRIP */}
            <section className="bg-white py-10 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Método utilizado por professores das melhores instituições</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                        {/* Placeholder Logos */}
                        <div className="flex items-center space-x-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                            <span>UniPedagogia</span>
                        </div>
                        <div className="flex items-center space-x-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 bg-slate-800 rounded-md"></div>
                            <span>Escola Futuro</span>
                        </div>
                        <div className="flex items-center space-x-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 bg-slate-800 rounded-tl-xl rounded-br-xl"></div>
                            <span>EduNeuro</span>
                        </div>
                        <div className="flex items-center space-x-2 font-display font-bold text-xl text-slate-700">
                            <div className="w-8 h-8 bg-slate-800 rounded-full border-4 border-white shadow-sm"></div>
                            <span>Instituto Saber</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE 3 PILLARS - SEU CAMINHO */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Seu Caminho no NeuroEduca</h2>
                        <div className="w-24 h-1 bg-neuro-teal mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neuro-blue transition">
                                <BookOpen className="w-8 h-8 text-neuro-blue group-hover:text-white transition" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-slate-800 mb-3">Aprender & Entender</h3>
                            <p className="text-slate-600 mb-8 flex-grow">
                                Mergulhe em artigos e estudos de caso que traduzem a ciência complexa em linguagem simples.
                            </p>
                            <button 
                                onClick={() => setPage(PageView.BLOG)}
                                className="text-neuro-blue font-bold flex items-center hover:underline"
                            >
                                Ler Artigos
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-neuro-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neuro-teal transition">
                                <Lightbulb className="w-8 h-8 text-neuro-teal group-hover:text-white transition" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-slate-800 mb-3">Aplicar & Transformar</h3>
                            <p className="text-slate-600 mb-8 flex-grow">
                                Acesse checklists, atividades práticas e ferramentas para aplicar amanhã na sala de aula.
                            </p>
                            <button 
                                onClick={() => setPage(PageView.STRATEGIES)}
                                className="text-neuro-teal font-bold flex items-center hover:underline"
                            >
                                Baixar Recursos
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                         {/* Pillar 3 */}
                         <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col">
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition">
                                <Award className="w-8 h-8 text-yellow-600 group-hover:text-slate-900 transition" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-slate-800 mb-3">Domínio Profissional</h3>
                            <p className="text-slate-600 mb-8 flex-grow">
                                Certificações completas para quem deseja se tornar uma referência em Neurociência Pedagógica.
                            </p>
                            <button 
                                onClick={() => setPage(PageView.COURSES)}
                                className="text-yellow-600 font-bold flex items-center hover:underline"
                            >
                                Ver Certificações
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOG TEASER */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-neuro-teal font-bold tracking-wider uppercase text-sm">Atualizações</span>
                            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">Últimas do Blog</h2>
                        </div>
                        <button onClick={() => setPage(PageView.BLOG)} className="hidden md:flex text-slate-500 font-bold hover:text-neuro-blue items-center">
                            Ver tudo <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Por que as crianças não te escutam?", date: "12 OUT", category: "Comportamento", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600" },
                            { title: "A Neurociência da Alfabetização", date: "08 OUT", category: "Cognição", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" },
                            { title: "Sono e Aprendizagem: A Conexão Oculta", date: "01 OUT", category: "Saúde", img: "https://images.unsplash.com/photo-1505685679686-2490cab6217d?auto=format&fit=crop&q=80&w=600" }
                        ].map((post, idx) => (
                            <div key={idx} onClick={() => setPage(PageView.BLOG)} className="group cursor-pointer">
                                <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition z-10"></div>
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full z-20">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-bold mb-2">{post.date}</div>
                                <h3 className="font-bold text-xl text-slate-800 group-hover:text-neuro-blue transition leading-tight">
                                    {post.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEWSLETTER FOOTER CTA */}
            <section className="bg-slate-900 py-20 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <Mail className="w-12 h-12 text-neuro-teal mx-auto mb-6" />
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        Junte-se à revolução da NeuroEducação
                    </h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Receba dicas semanais, resumos de artigos e ofertas exclusivas. Sem spam, apenas ciência.
                    </p>
                    
                    {!subscribed ? (
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input 
                                type="email" 
                                placeholder="Seu melhor e-mail" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow px-6 py-4 rounded-xl text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                                required
                            />
                            <button 
                                type="submit"
                                className="px-8 py-4 bg-neuro-teal text-white font-bold rounded-xl hover:bg-teal-500 transition shadow-lg whitespace-nowrap"
                            >
                                Inscrever-se
                            </button>
                        </form>
                    ) : (
                         <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-flex items-center text-white animate-fade-in border border-white/20">
                            <CheckCircle className="h-6 w-6 mr-3 text-green-400" />
                            <span className="font-bold text-lg">Obrigado! Verifique seu e-mail.</span>
                        </div>
                    )}
                 </div>
            </section>
        </div>
    );
};

export default Home;