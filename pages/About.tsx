import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-slate-800 mb-6">Quem Somos</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Somos apaixonados por conectar a ciência complexa do cérebro com a prática diária da sala de aula, de forma simples, humana e acolhedora.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200">
                        <img 
                            src="https://picsum.photos/600/600?grayscale" 
                            alt="Fundadora" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-neuro-yellow text-slate-900 p-6 rounded-xl shadow-lg hidden md:block">
                        <p className="font-bold text-lg">Dra. Ana Souza</p>
                        <p className="text-sm">Neuropsicopedagoga</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-display text-2xl font-bold text-slate-800 mb-4">Nossa Missão</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Acreditamos que todo educador merece ter acesso ao conhecimento sobre como o cérebro aprende. Fundado em 2023, o NeuroPedagogia Hub nasceu da necessidade de traduzir artigos científicos densos em estratégias que funcionam no chão da escola.
                    </p>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Já impactamos mais de 5.000 professores e pais através de nossos conteúdos gratuitos e cursos online, promovendo uma educação mais empática e eficiente.
                    </p>

                    <div className="flex space-x-4">
                        <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-neuro-teal hover:text-white transition">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-neuro-blue hover:text-white transition">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-800 hover:text-white transition">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;