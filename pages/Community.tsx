import React from 'react';
import { Calendar, MessageCircle, User, MapPin, Star, ThumbsUp, Quote, PlusCircle } from 'lucide-react';

const Community: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="bg-neuro-blue py-16 text-white text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="font-display text-4xl font-bold mb-4">Comunidade NeuroPedagogia</h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Conecte-se com outros educadores, compartilhe experiências e participe de eventos exclusivos. Juntos transformamos a educação.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                
                {/* Events Calendar Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-2xl font-bold text-slate-800 flex items-center">
                            <Calendar className="mr-2 text-neuro-teal" />
                            Próximos Eventos
                        </h2>
                        <button className="text-neuro-blue font-semibold hover:underline">Ver agenda completa</button>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { day: '15', month: 'OUT', title: 'Neurociência do Brincar', type: 'Workshop Online', loc: 'Zoom' },
                            { day: '02', month: 'NOV', title: 'Congresso de Educação Infantil', type: 'Presencial', loc: 'São Paulo, SP' },
                            { day: '10', month: 'NOV', title: 'Roda de Conversa: TDAH', type: 'Live Gratuita', loc: 'YouTube' }
                        ].map((event, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-start hover:shadow-md transition cursor-pointer">
                                <div className="bg-blue-50 text-neuro-blue rounded-lg p-3 text-center min-w-[70px] mr-4">
                                    <div className="font-bold text-xl">{event.day}</div>
                                    <div className="text-xs font-bold uppercase">{event.month}</div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-neuro-teal uppercase tracking-wide">{event.type}</span>
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight mt-1 mb-2">{event.title}</h3>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {event.loc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Q&A Forum Section */}
                <section className="bg-warm-bg rounded-3xl p-8 border border-amber-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h2 className="font-display text-2xl font-bold text-slate-800 flex items-center mb-2">
                                <MessageCircle className="mr-2 text-amber-500" />
                                Fórum de Educadores
                            </h2>
                            <p className="text-slate-600">Tire dúvidas e compartilhe suas práticas de sala de aula.</p>
                        </div>
                        <button className="mt-4 md:mt-0 bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition flex items-center shadow-sm">
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Novo Tópico
                        </button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: 'Como lidar com birras usando a técnica do "Cérebro no Andar de Cima"?', author: 'Mariana S.', role: 'Prof. Infantil', replies: 12, likes: 34, tag: 'Regulação Emocional' },
                            { title: 'Adaptação escolar: sugestões para criar vínculo seguro nos primeiros dias', author: 'Carlos E.', role: 'Pedagogo', replies: 8, likes: 21, tag: 'Apego Seguro' },
                            { title: 'Dicas de atividades sensoriais para crianças hipersensíveis', author: 'Ana Paula', role: 'Mãe', replies: 25, likes: 56, tag: 'Integração Sensorial' }
                        ].map((post, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 hover:border-neuro-teal/30 transition cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full font-bold">{post.tag}</span>
                                    <span className="text-slate-400 text-xs">há 2 horas</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-neuro-teal transition">{post.title}</h3>
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            <span className="font-medium text-slate-700">{post.author}</span>
                                            <span className="mx-1">•</span>
                                            <span className="text-xs">{post.role}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <MessageCircle className="h-4 w-4 mr-1" />
                                            {post.replies}
                                        </div>
                                        <div className="flex items-center">
                                            <ThumbsUp className="h-4 w-4 mr-1" />
                                            {post.likes}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-6">
                        <button className="text-slate-600 font-semibold hover:text-neuro-teal">Ver todas as discussões</button>
                    </div>
                </section>

                {/* Case Studies / Testimonials Detail */}
                <section>
                    <h2 className="font-display text-2xl font-bold text-slate-800 flex items-center mb-8">
                        <Quote className="mr-2 text-neuro-blue" />
                        Estudos de Caso & Histórias Reais
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4"></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <img src="https://picsum.photos/100/100?random=20" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" alt="User" />
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800">Escola Pequenos Passos</h4>
                                        <p className="text-sm text-neuro-teal font-bold">Implementação Curricular</p>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-4">"Reduzimos conflitos em 40% com estratégias de regulação"</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    Implementamos o "Cantinho da Calma" baseado nas sugestões do NeuroPedagogia Hub em todas as salas de 4 anos. Em 3 meses, observamos uma redução drástica em comportamentos agressivos e maior autonomia das crianças.
                                </p>
                                <a href="#" className="text-neuro-blue font-bold text-sm hover:underline">Ler estudo completo &rarr;</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -mr-4 -mt-4"></div>
                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <img src="https://picsum.photos/100/100?random=21" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" alt="User" />
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-800">Juliana M.</h4>
                                        <p className="text-sm text-neuro-teal font-bold">Mãe e Educadora Parental</p>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-4">"Compreender o cérebro imaturo mudou minha maternidade"</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    O curso sobre Funções Executivas me ajudou a entender que meu filho não estava sendo "teimoso", mas que seu córtex pré-frontal ainda estava em desenvolvimento. Mudei minha abordagem e nossa conexão fortaleceu.
                                </p>
                                <a href="#" className="text-neuro-blue font-bold text-sm hover:underline">Ler relato completo &rarr;</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Community;