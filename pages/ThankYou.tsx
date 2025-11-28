import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Download, Instagram, MessageCircle, ArrowRight, FileText, Lock } from 'lucide-react';
import { PageView } from '../types';

interface ThankYouProps {
    setPage: (page: PageView) => void;
}

const ThankYou: React.FC<ThankYouProps> = ({ setPage }) => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleBuy = () => {
        window.open('https://pay.kiwify.com.br/Kjy93JN', '_blank');
    };

    return (
        <div className="animate-fade-in font-sans text-slate-800">
            {/* SUCCESS HEADER */}
            <div className="bg-green-600 text-white py-12 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Sucesso! Seu Guia Neuro-Inovador está a caminho.
                    </h1>
                    <p className="text-green-100 text-lg mb-8">
                        Verifique sua caixa de entrada (ou spam). O e-mail chegará em até 2 minutos.
                    </p>
                    <button className="text-sm text-green-200 hover:text-white underline font-medium">
                        Se não chegar, clique aqui para baixar instantaneamente (Backup)
                    </button>
                </div>
            </div>

            {/* TRIPWIRE OFFER SECTION */}
            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10 pb-20">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-500 animate-pulse-border">
                    {/* Urgency Bar */}
                    <div className="bg-red-500 text-white py-3 px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
                        <div className="flex items-center font-bold animate-pulse">
                            <Lock className="h-5 w-5 mr-2" />
                            ESPERE! OFERTA ÚNICA PARA NOVOS MEMBROS
                        </div>
                        <div className="flex items-center bg-red-700/50 px-3 py-1 rounded-lg">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                    Não sabe por onde começar a aplicar a Neurociência?
                                </h2>
                                <p className="text-slate-600 mb-6 text-lg">
                                    Enquanto seu e-book chega, aproveite esta oportunidade exclusiva. O <span className="font-bold text-neuro-blue">Kit de Implementação Rápida</span> remove a adivinhação e te dá o plano exato.
                                </p>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-800">Checklist de Rotinas Cerebrais</h4>
                                            <p className="text-sm text-slate-500">50 micro-hábitos para sala de aula.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-800">Planner Neuro-Pedagógico</h4>
                                            <p className="text-sm text-slate-500">Template editável para suas aulas.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-slate-800">Bônus: Aula "O Cérebro Ansioso"</h4>
                                            <p className="text-sm text-slate-500">Vídeo exclusivo de 20min.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center relative">
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                                    -70% OFF
                                </div>
                                <FileText className="h-24 w-24 text-neuro-blue mx-auto mb-4 opacity-80" />
                                <h3 className="font-bold text-xl text-slate-800 mb-2">Kit Neuro-Implementação</h3>
                                <div className="text-sm text-slate-400 line-through mb-1">De R$ 67,90</div>
                                <div className="text-4xl font-extrabold text-slate-900 mb-6 text-green-600">
                                    R$ 9,90
                                </div>
                                <button 
                                    onClick={handleBuy}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg hover:shadow-green-500/40 transition transform hover:-translate-y-1 mb-4 flex items-center justify-center"
                                >
                                    Adicionar ao Meu Pedido
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <p className="text-xs text-slate-500">
                                    Pagamento único. Acesso vitalício imediato.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-100 p-4 text-center text-sm text-slate-500 border-t border-slate-200">
                        Não, obrigado. Quero apenas o e-book gratuito e perder essa oferta.
                    </div>
                </div>
            </div>

            {/* COMMUNITY STEP */}
            <div className="text-center pb-20 px-4">
                <h3 className="font-display text-2xl font-bold text-slate-800 mb-8">
                    Próximo Passo: Junte-se à Tribo
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button 
                        onClick={() => setPage(PageView.COMMUNITY)}
                        className="flex items-center justify-center px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-pink-500 hover:text-pink-600 transition group"
                    >
                        <Instagram className="h-6 w-6 mr-3 text-pink-500" />
                        <div className="text-left">
                            <div className="text-xs text-slate-500 font-bold uppercase">Siga no Instagram</div>
                            <div className="font-bold text-slate-800 group-hover:text-pink-600">@NeuroEduca</div>
                        </div>
                    </button>
                    <button 
                         onClick={() => setPage(PageView.COMMUNITY)}
                         className="flex items-center justify-center px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-green-500 hover:text-green-600 transition group"
                    >
                        <MessageCircle className="h-6 w-6 mr-3 text-green-500" />
                        <div className="text-left">
                            <div className="text-xs text-slate-500 font-bold uppercase">Grupo VIP</div>
                            <div className="font-bold text-slate-800 group-hover:text-green-600">WhatsApp Educadores</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;