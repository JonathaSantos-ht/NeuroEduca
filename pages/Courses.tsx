
import React, { useState } from 'react';
import { 
    Check, PlayCircle, Star, Award, ChevronDown, ChevronUp, 
    ShieldCheck, Lock, AlertTriangle, Gift, Clock, Users, Zap, BookOpen 
} from 'lucide-react';

const Courses: React.FC = () => {
    const [openModule, setOpenModule] = useState<number | null>(0);

    const toggleModule = (index: number) => {
        setOpenModule(openModule === index ? null : index);
    };

    const modules = [
        {
            title: "Módulo 1: Desvendando o Mapa Cerebral",
            subtitle: "A Plasticidade e o Poder do Professor",
            lessons: [
                "Neuroplasticidade: Por que você é um 'arquiteto' de cérebros?",
                "Sinapses: Como o aprendizado acontece fisicamente",
                "A fundação da neurociência sem termos complicados",
                "Mitos sobre o cérebro que você precisa abandonar"
            ]
        },
        {
            title: "Módulo 2: O \"Freio\" Cerebral",
            subtitle: "Técnicas para Desenvolver Inibição e Autorregulação",
            lessons: [
                "O Giro Cingulado Anterior e o controle de impulsos",
                "Estratégias práticas para reduzir a dispersão em sala",
                "Jogos de 'Pare e Pense' para fortalecer o autocontrole",
                "Como lidar com a impulsividade de forma acolhedora"
            ]
        },
        {
            title: "Módulo 3: Memória de Trabalho na Ponta do Lápis",
            subtitle: "Maximizando a Retenção de Conteúdo",
            lessons: [
                "O 'buffer' mental: Por que eles esquecem tão rápido?",
                "Jogos e rotinas para expandir a memória de trabalho",
                "Evitando a sobrecarga cognitiva nas instruções",
                "Aplicações diretas na alfabetização e matemática"
            ]
        },
        {
            title: "Módulo 4: Flexibilidade Cognitiva",
            subtitle: "Transformando a Rigidez Mental em Criatividade",
            lessons: [
                "Combatendo a rigidez: Ajudando crianças que travam em mudanças",
                "Atividades de troca de regras e critérios",
                "Estimulando o pensamento lateral e a adaptação",
                "O cérebro criativo: Indo além da repetição"
            ]
        },
        {
            title: "Módulo 5: Da Emoção à Razão",
            subtitle: "Neurociência da Motivação e Engajamento",
            lessons: [
                "Sistema Límbico: O porteiro da aprendizagem",
                "Dopamina: Como gerar curiosidade química",
                "Segurança emocional como pré-requisito para o foco",
                "Reengajando o aluno desmotivado com ciência"
            ]
        },
        {
            title: "Módulo 6: Ambiente Neuro-Otimizado",
            subtitle: "Design de Sala de Aula que Apoia o Cérebro",
            lessons: [
                "Auditoria sensorial: Luz, ruído e cores que acalmam",
                "Organização espacial para reduzir o estresse cognitivo",
                "Criando 'cantinhos de regulação' eficientes",
                "Como o ambiente físico molda o comportamento"
            ]
        },
        {
            title: "Módulo 7: A Arte do Reforço",
            subtitle: "Feedback e Avaliação que Constroem Conexões",
            lessons: [
                "O erro como ferramenta de construção neural (não de punição)",
                "Growth Mindset: Celebrando o esforço e o processo",
                "Feedback construtivo que o cérebro aceita",
                "Avaliação formativa sob a ótica da neurociência"
            ]
        }
    ];

    return (
        <div className="animate-fade-in bg-white text-slate-800 font-sans">
            
            {/* HERO SECTION */}
            <header className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-12 md:pt-20">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neuro-teal via-slate-900 to-slate-900"></div>
                
                <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block bg-neuro-blue/20 border border-neuro-blue/50 text-neuro-blue text-xs md:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 backdrop-blur-sm">
                        Curso Online Certificado
                    </div>
                    
                    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Pare de Lutar contra o Desinteresse: <br className="hidden md:block"/>
                        Domine as <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Chaves Cerebrais</span> da Atenção.
                    </h1>
                    
                    <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Descubra o método definitivo para professores que desejam alunos engajados, calmos e aprendendo de verdade — sem perder a voz ou a paciência.
                    </p>

                    {/* VSL Simulation */}
                    <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-2 shadow-2xl shadow-neuro-teal/20 mb-12 border border-slate-700 transform hover:scale-[1.01] transition duration-500">
                        <div className="aspect-video bg-black rounded-xl relative overflow-hidden group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600" alt="Aula Preview" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-neuro-teal rounded-full flex items-center justify-center shadow-lg group-hover:bg-teal-400 transition animate-pulse">
                                    <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-white fill-current" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-sm font-medium">
                                Assista ao vídeo explicativo (02:45)
                            </div>
                        </div>
                    </div>

                    <a href="#oferta" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xl py-5 px-10 rounded-full shadow-lg hover:shadow-orange-500/50 transition transform hover:-translate-y-1">
                        Quero Transformar Minha Sala de Aula
                        <Zap className="ml-2 h-6 w-6 fill-current" />
                    </a>
                </div>
            </header>

            {/* PAIN SECTION */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-12">
                        Você se reconhece em alguma dessas situações?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: AlertTriangle, title: "Exaustão Diária", text: "Você termina o dia sem energia, sentindo que falou para as paredes e que apenas 'sobreviveu' à aula." },
                            { icon: Lock, title: "Alunos Dispersos", text: "A concorrência com as telas parece desleal. Você tenta de tudo, mas a atenção deles dura segundos." },
                            { icon: Clock, title: "Metodologia Antiga", text: "Você sente que sua formação na faculdade não te preparou para os cérebros das crianças de hoje." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 p-6 bg-blue-100/50 rounded-2xl inline-block max-w-3xl">
                        <p className="text-lg text-neuro-blue font-bold">
                            A culpa não é sua. <span className="text-slate-700 font-normal">Ninguém te ensinou como o órgão da aprendizagem (o cérebro) realmente funciona. Até agora.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* SOLUTION SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-neuro-teal font-bold tracking-wider uppercase mb-2">A Solução Definitiva</div>
                        <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Neurociência Aplicada na Prática Pedagógica</h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Este não é um curso teórico chato com termos médicos que você nunca vai usar. É um <strong>treinamento de campo</strong>.
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Vamos abrir a "caixa preta" do cérebro infantil e te entregar as ferramentas exatas para hackear a atenção, melhorar a memória e gerenciar comportamentos difíceis com empatia e ciência.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Aprenda a 'ler' o comportamento como comunicação neural",
                                "Técnicas de 2 minutos para recuperar o foco da turma",
                                "Estratégias para alunos com TDAH e dificuldades",
                                "Certificado de 40h reconhecido para progressão"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700 font-medium text-lg">
                                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-neuro-teal rounded-3xl transform rotate-3 opacity-20"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                            alt="Professora feliz" 
                            className="relative rounded-3xl shadow-xl w-full object-cover z-10"
                        />
                         {/* Floating Badge */}
                         <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <Award className="h-8 w-8 text-yellow-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Método Comprovado</p>
                                <p className="text-xs text-slate-500">Baseado em evidências</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM SECTION */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai dominar</h2>
                        <p className="text-slate-600 text-lg">Um currículo desenhado para transformar sua prática em 7 etapas estratégicas.</p>
                    </div>

                    <div className="space-y-4">
                        {modules.map((module, index) => (
                            <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition hover:border-neuro-teal/50">
                                <button 
                                    onClick={() => toggleModule(index)}
                                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition text-left focus:outline-none"
                                >
                                    <div className="flex items-start md:items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold text-lg flex-shrink-0 transition ${openModule === index ? 'bg-neuro-teal text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg md:text-xl ${openModule === index ? 'text-neuro-teal' : 'text-slate-800'}`}>
                                                {module.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 mt-1">{module.subtitle}</p>
                                        </div>
                                    </div>
                                    {openModule === index ? <ChevronUp className="text-neuro-teal flex-shrink-0 ml-4" /> : <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" />}
                                </button>
                                
                                {openModule === index && (
                                    <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                                        <ul className="grid md:grid-cols-2 gap-3 mt-4">
                                            {module.lessons.map((lesson, idx) => (
                                                <li key={idx} className="flex items-start text-slate-700 text-sm md:text-base">
                                                    <PlayCircle className="h-5 w-5 mr-2 text-neuro-blue opacity-80 flex-shrink-0 mt-0.5" />
                                                    {lesson}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a href="#oferta" className="inline-block border-b-2 border-neuro-blue text-neuro-blue font-bold pb-1 hover:text-blue-700 hover:border-blue-700 transition">
                            Ver grade completa e detalhada no ementário &rarr;
                        </a>
                    </div>
                </div>
            </section>

            {/* BONUSES SECTION */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                        Bônus Exclusivos <span className="text-yellow-400">(Grátis hoje)</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Bonus 1 */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-400 transition group">
                            <div className="bg-yellow-400/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition text-yellow-400">
                                <BookOpen className="h-8 w-8" />
                            </div>
                            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Bônus #1</div>
                            <h3 className="font-bold text-xl mb-3">E-book: 100 Atividades Neuro-Otimizadas</h3>
                            <p className="text-slate-400 text-sm mb-4">Um banco de ideias prontas para aplicar amanhã. Separadas por idade e função cognitiva.</p>
                            <p className="text-green-400 font-bold text-sm">Valor: R$ 97,00 (Grátis)</p>
                        </div>

                        {/* Bonus 2 */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-400 transition group">
                             <div className="bg-yellow-400/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition text-yellow-400">
                                <Users className="h-8 w-8" />
                            </div>
                            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Bônus #2</div>
                            <h3 className="font-bold text-xl mb-3">Comunidade VIP no WhatsApp</h3>
                            <p className="text-slate-400 text-sm mb-4">Troque experiências, tire dúvidas e receba suporte diretamente da nossa equipe e de outros alunos.</p>
                            <p className="text-green-400 font-bold text-sm">Valor: R$ 197,00 (Grátis)</p>
                        </div>

                        {/* Bonus 3 */}
                        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-400 transition group">
                             <div className="bg-yellow-400/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition text-yellow-400">
                                <Zap className="h-8 w-8" />
                            </div>
                            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Bônus #3</div>
                            <h3 className="font-bold text-xl mb-3">Sessão Q&A Gravada</h3>
                            <p className="text-slate-400 text-sm mb-4">Acesso às gravações das melhores mentorias de tira-dúvidas com a Dra. Ana Souza.</p>
                            <p className="text-green-400 font-bold text-sm">Valor: R$ 147,00 (Grátis)</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* INSTRUCTOR & SOCIAL PROOF */}
             <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Bio */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="w-full md:w-1/3">
                            <img src="https://picsum.photos/600/800?grayscale" alt="Dra Ana Souza" className="rounded-2xl shadow-2xl w-full" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-neuro-teal font-bold text-lg mb-2">Sua Mentora</h3>
                            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Dra. Ana Souza</h2>
                            <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                                Neuropsicopedagoga, Mestre em Neurociências pela USP e autora de 3 Best-Sellers na área da educação.
                            </p>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                "Minha missão não é formar cientistas, é formar professores confiantes. Depois de 15 anos em sala de aula, sei que a teoria só vale se funcionar na segunda-feira de manhã, com 25 crianças agitadas na sua frente."
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-slate-100 px-4 py-2 rounded-lg font-bold text-slate-700">15+ Anos de Prática</div>
                                <div className="bg-slate-100 px-4 py-2 rounded-lg font-bold text-slate-700">5.000+ Alunos</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <h2 className="text-center font-display text-3xl font-bold mb-12">Quem aplicou, aprovou</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { quote: "Eu estava prestes a desistir da docência. O módulo sobre Funções Executivas mudou minha visão sobre 'mau comportamento'.", author: "Carla M.", role: "Prof. Fundamental I" },
                            { quote: "Simples, direto e sem enrolação. Apliquei a técnica de contraste na mesma semana e a turma respondeu na hora.", author: "Roberto F.", role: "Educador Infantil" },
                            { quote: "O melhor investimento que fiz na minha carreira. O certificado me ajudou na progressão salarial e o conhecimento me deu paz.", author: "Juliana S.", role: "Pedagoga" }
                        ].map((t, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <div className="flex text-yellow-400 mb-4">
                                    {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                                <div className="font-bold text-slate-900">{t.author}</div>
                                <div className="text-sm text-slate-500">{t.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING & OFFER */}
            <section id="oferta" className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="bg-neuro-blue p-6 text-center text-white">
                            <h2 className="text-2xl font-bold">Oferta Especial por Tempo Limitado</h2>
                        </div>
                        <div className="p-8 md:p-12 text-center">
                            <p className="text-slate-500 mb-2 text-lg">De <span className="line-through">R$ 497,00</span> por apenas:</p>
                            <div className="flex justify-center items-end gap-2 mb-6">
                                <span className="text-6xl font-extrabold text-slate-900">R$ 297</span>
                                <span className="text-xl text-slate-500 font-medium mb-4">,00</span>
                            </div>
                            <p className="text-slate-600 mb-8">ou em até <span className="font-bold text-slate-900">12x de R$ 29,90</span> no cartão</p>

                            <button className="w-full md:w-2/3 bg-green-500 hover:bg-green-600 text-white font-extrabold text-2xl py-6 px-8 rounded-xl shadow-xl hover:shadow-green-500/30 transition transform hover:-translate-y-1 mb-6 animate-pulse-slow">
                                SIM! Quero Minha Vaga Agora
                            </button>

                            {/* Guarantee */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 p-6 bg-slate-50 rounded-xl">
                                <ShieldCheck className="h-12 w-12 text-neuro-teal" />
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900">Garantia Incondicional de 15 Dias</h4>
                                    <p className="text-sm text-slate-600">
                                        Assista às aulas, baixe os materiais. Se não amar, devolvemos 100% do seu dinheiro. Sem letras miúdas.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center gap-4 opacity-50 grayscale">
                                {/* Fake Payment Icons */}
                                <div className="h-8 w-12 bg-slate-300 rounded"></div>
                                <div className="h-8 w-12 bg-slate-300 rounded"></div>
                                <div className="h-8 w-12 bg-slate-300 rounded"></div>
                                <div className="h-8 w-12 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* FAQ (Optional but good) */}
             <div className="bg-white py-12 pb-24 text-center">
                 <p className="text-slate-500">Dúvidas? Entre em contato pelo WhatsApp no canto da tela.</p>
             </div>
        </div>
    );
};

export default Courses;
