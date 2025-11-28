import React, { useState } from 'react';
import { generateActivity } from '../services/geminiService';
import { Activity } from '../types';
import { Bot, CheckCircle, ChevronRight, Layers, Loader2, Play, PlayCircle, Video } from 'lucide-react';

const Strategies: React.FC = () => {
    const [ageGroup, setAgeGroup] = useState<string>('3-4 anos');
    const [focusArea, setFocusArea] = useState<string>('Funções Executivas');
    const [loading, setLoading] = useState(false);
    const [activity, setActivity] = useState<Activity | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        const result = await generateActivity(ageGroup, focusArea);
        setActivity(result);
        setLoading(false);
    };

    const ageOptions = ['0-18 meses', '18-36 meses', '3-4 anos', '5-6 anos'];
    const focusOptions = ['Coordenação Motora Fina', 'Funções Executivas', 'Regulação Emocional', 'Linguagem', 'Processamento Sensorial'];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
             <div className="text-center mb-12">
                <span className="text-neuro-teal font-bold tracking-wider uppercase text-sm">Recursos Práticos</span>
                <h1 className="font-display text-3xl font-bold text-slate-800 mt-2 mb-4">Caixa de Ferramentas do Educador</h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-20">
                {/* Control Panel */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neuro-teal to-neuro-blue"></div>
                        <div className="flex items-center mb-6 text-neuro-teal">
                            <Bot className="mr-2" />
                            <h2 className="font-display font-bold text-xl text-slate-800">IA Geradora de Estratégias</h2>
                        </div>
                        <p className="text-slate-600 mb-6 text-sm">
                            Selecione a faixa etária e o foco de desenvolvimento para gerar uma estratégia personalizada pela nossa IA.
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Faixa Etária</label>
                                <select 
                                    value={ageGroup} 
                                    onChange={(e) => setAgeGroup(e.target.value)}
                                    className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-neuro-teal"
                                >
                                    {ageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Foco do Desenvolvimento</label>
                                <select 
                                    value={focusArea} 
                                    onChange={(e) => setFocusArea(e.target.value)}
                                    className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-neuro-teal"
                                >
                                    {focusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full py-4 bg-neuro-teal text-white font-bold rounded-xl hover:bg-teal-600 transition flex items-center justify-center disabled:opacity-70 mt-4 shadow-md"
                            >
                                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Gerar Estratégia'}
                            </button>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h3 className="font-bold text-amber-800 mb-2 flex items-center"><Layers className="h-4 w-4 mr-2"/> Nota Importante</h3>
                        <p className="text-sm text-amber-900/80">
                            Todas as atividades são sugestões baseadas em princípios gerais. Adapte sempre à realidade e necessidades específicas de cada criança.
                        </p>
                    </div>
                </div>

                {/* Results Display */}
                <div className="lg:col-span-2">
                    {loading ? (
                        <div className="h-full flex flex-col items-center justify-center min-h-[400px] text-slate-400">
                            <Loader2 className="h-12 w-12 animate-spin mb-4 text-neuro-teal" />
                            <p>Consultando banco de dados neurocientífico...</p>
                        </div>
                    ) : activity ? (
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 animate-fade-in-up">
                            <div className="bg-neuro-blue p-8 text-white relative">
                                <div className="absolute top-4 right-4 opacity-20">
                                    <BrainIcon size={100} color="white" />
                                </div>
                                <div className="flex items-center space-x-2 text-blue-200 text-sm font-bold uppercase tracking-wider mb-2 relative z-10">
                                    <span>{activity.ageGroup}</span>
                                    <span>•</span>
                                    <span>{focusArea}</span>
                                </div>
                                <h2 className="font-display text-3xl font-bold relative z-10 leading-tight">{activity.title}</h2>
                            </div>
                            
                            <div className="p-8 space-y-8">
                                
                                <div>
                                    <h3 className="flex items-center font-bold text-lg text-slate-800 mb-3">
                                        <Layers className="text-neuro-teal mr-2 h-5 w-5" />
                                        Objetivo
                                    </h3>
                                    <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                                        {activity.objective}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800 mb-3">Materiais</h3>
                                        <ul className="space-y-2">
                                            {activity.materials.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-slate-600">
                                                    <span className="h-2 w-2 mt-2 rounded-full bg-neuro-yellow mr-3 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800 mb-3">Conexão Neural</h3>
                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-900 leading-relaxed">
                                            {activity.neuroConcept}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-4">Passo a Passo</h3>
                                    <div className="space-y-4">
                                        {activity.steps.map((step, idx) => (
                                            <div key={idx} className="flex">
                                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-neuro-teal text-white flex items-center justify-center font-bold mr-4 shadow-sm">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-slate-600 pt-1 leading-relaxed">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 text-slate-400">
                            <Layers className="h-16 w-16 mb-4 opacity-50" />
                            <p className="text-lg font-medium">Selecione as opções e gere uma estratégia.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Video Gallery Section */}
            <div className="border-t border-slate-200 pt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-2xl font-bold text-slate-800 flex items-center">
                        <Video className="mr-2 text-red-500" />
                        Minuto Neuro-Dica
                    </h2>
                    <button className="text-slate-500 hover:text-neuro-teal font-medium text-sm">Ver todos os vídeos</button>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { title: "Como acalmar uma birra em 60s", views: "12k", color: "bg-red-100" },
                        { title: "O que é Poda Neural?", views: "8.5k", color: "bg-blue-100" },
                        { title: "Música e Memória", views: "5k", color: "bg-green-100" },
                        { title: "Rotina do Sono", views: "15k", color: "bg-purple-100" }
                    ].map((video, idx) => (
                         <div key={idx} className="group cursor-pointer">
                            <div className={`aspect-[9/16] rounded-xl relative overflow-hidden shadow-sm mb-3 ${video.color} flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
                                <PlayCircle className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition duration-300" />
                                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded font-bold">0:59</span>
                            </div>
                            <h3 className="font-bold text-slate-800 leading-tight group-hover:text-neuro-teal transition">{video.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">{video.views} visualizações</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Simple Icon component
const BrainIcon = ({ size, color }: { size: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={color ? `text-${color}` : ''} xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2C9.5 2.82843 8.82843 3.5 8 3.5C7.17157 3.5 6.5 2.82843 6.5 2C6.5 1.17157 7.17157 0.5 8 0.5C8.82843 0.5 9.5 1.17157 9.5 2ZM10.5 5.5C10.5 6.60457 9.60457 7.5 8.5 7.5C7.39543 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 7.39543 3.5 8.5 3.5C9.60457 3.5 10.5 4.39543 10.5 5.5ZM13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4ZM17 4.5C17 6.15685 15.6569 7.5 14 7.5C12.3431 7.5 11 6.15685 11 4.5C11 2.84315 12.3431 1.5 14 1.5C15.6569 1.5 17 2.84315 17 4.5ZM19 8C19 9.38071 17.8807 10.5 16.5 10.5C15.1193 10.5 14 9.38071 14 8C14 6.61929 15.1193 5.5 16.5 5.5C17.8807 5.5 19 6.61929 19 8ZM22 10.5C22 12.1569 20.6569 13.5 19 13.5C17.3431 13.5 16 12.1569 16 10.5C16 8.84315 17.3431 7.5 19 7.5C20.6569 7.5 22 8.84315 22 10.5ZM10 10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10C6 8.89543 6.89543 8 8 8C9.10457 8 10 8.89543 10 10ZM5.5 8C5.5 9.38071 4.38071 10.5 3 10.5C1.61929 10.5 0.5 9.38071 0.5 8C0.5 6.61929 1.61929 5.5 3 5.5C4.38071 5.5 5.5 6.61929 5.5 8ZM8 15C8 16.6569 6.65685 18 5 18C3.34315 18 2 16.6569 2 15C2 13.3431 3.34315 12 5 12C6.65685 12 8 13.3431 8 15ZM12 14.5C12 15.8807 10.8807 17 9.5 17C8.11929 17 7 15.8807 7 14.5C7 13.1193 8.11929 12 9.5 12C10.8807 12 12 13.1193 12 14.5ZM15 18.5C15 20.1569 13.6569 21.5 12 21.5C10.3431 21.5 9 20.1569 9 18.5C9 16.8431 10.3431 15.5 12 15.5C13.6569 15.5 15 16.8431 15 18.5ZM19 16.5C19 17.8807 17.8807 19 16.5 19C15.1193 19 14 17.8807 14 16.5C14 15.1193 15.1193 14 16.5 14C17.8807 14 19 15.1193 19 16.5ZM21.5 21C21.5 21.8284 20.8284 22.5 20 22.5C19.1716 22.5 18.5 21.8284 18.5 21C18.5 20.1716 19.1716 19.5 20 19.5C20.8284 19.5 21.5 20.1716 21.5 21Z" />
    </svg>
);

export default Strategies;