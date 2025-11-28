import React, { useState } from 'react';
import { Crown, Check, Book, ShoppingBag, Video, MessageSquare, Star, X, Zap, Brain, ChevronRight, Lock, ListChecks } from 'lucide-react';

const Premium: React.FC = () => {
    const [showPreview, setShowPreview] = useState(false);
    const checkoutUrl = "https://pay.kiwify.com.br/Kjy93JN";

    const handleBuy = () => {
        window.open(checkoutUrl, '_blank');
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="bg-slate-900 py-16 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <Crown className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Clube NeuroPedagogia <span className="text-yellow-400">Premium</span></h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Acelere sua carreira com acesso exclusivo a mentorias, materiais avançados e uma rede de elite de educadores.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {/* Free Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Visitante</h3>
                        <div className="text-4xl font-bold text-slate-900 mb-6">Grátis</div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-slate-600"><Check className="h-5 w-5 text-green-500 mr-3" /> Acesso ao Blog</li>
                            <li className="flex items-center text-slate-600"><Check className="h-5 w-5 text-green-500 mr-3" /> Gerador de Estratégias (Limitado)</li>
                            <li className="flex items-center text-slate-600"><Check className="h-5 w-5 text-green-500 mr-3" /> Fórum da Comunidade (Leitura)</li>
                        </ul>
                        <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-400 transition">
                            Seu plano atual
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-yellow-400 relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">Recomendado</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                            <Crown className="h-5 w-5 text-yellow-500 mr-2" />
                            Membro PRO
                        </h3>
                        <div className="text-4xl font-bold text-slate-900 mb-2">R$ 29,90<span className="text-lg text-slate-500 font-normal">/mês</span></div>
                        <p className="text-slate-500 text-sm mb-6">Cancele quando quiser.</p>
                        
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-slate-700 font-medium"><Check className="h-5 w-5 text-yellow-500 mr-3" /> Tudo do Grátis</li>
                            <li className="flex items-center text-slate-700 font-medium"><Video className="h-5 w-5 text-yellow-500 mr-3" /> Mentoria Mensal ao Vivo (Q&A)</li>
                            <li className="flex items-center text-slate-700 font-medium"><Book className="h-5 w-5 text-yellow-500 mr-3" /> Artigos de Profundidade (PDFs)</li>
                            <li className="flex items-center text-slate-700 font-medium"><MessageSquare className="h-5 w-5 text-yellow-500 mr-3" /> Acesso VIP ao Fórum</li>
                        </ul>
                        <button className="w-full py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition shadow-lg">
                            Assinar Agora
                        </button>
                    </div>
                </div>

                {/* TRIPWIRE OFFER (High Value / Low Cost) */}
                <div className="mb-20 bg-amber-50 rounded-3xl p-8 border border-amber-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-md">OFERTA ESPECIAL</div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 min-w-[200px] flex flex-col items-center text-center">
                         <ListChecks className="h-16 w-16 text-amber-500 mb-2" />
                         <span className="font-bold text-slate-800">Checklist Digital</span>
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-display font-bold text-2xl text-slate-800 mb-2">Checklist de Rotinas Cerebrais</h3>
                        <p className="text-slate-600 mb-4">
                            Não sabe por onde começar? Baixe nosso checklist definitivo com 50 micro-hábitos para transformar sua sala de aula em um ambiente neuro-compatível.
                        </p>
                        <ul className="text-sm text-slate-600 mb-4 space-y-1">
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> PDF Interativo</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Modelos de Planner Diário</li>
                        </ul>
                    </div>
                    <div className="min-w-[200px] text-center">
                        <span className="text-slate-400 line-through text-sm">De R$ 67,90</span>
                        <div className="text-3xl font-bold text-slate-800 mb-3">R$ 9,90</div>
                        <button 
                            onClick={handleBuy}
                            className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-700 transition"
                        >
                            Comprar Agora
                        </button>
                    </div>
                </div>

                {/* FEATURED EBOOK SECTION */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display text-3xl font-bold text-slate-800 flex items-center">
                            <ShoppingBag className="mr-3 text-neuro-blue" />
                            Loja NeuroPedagogia
                        </h2>
                    </div>

                    <div className="bg-gradient-to-r from-neuro-teal to-teal-700 rounded-3xl overflow-hidden shadow-2xl mb-12 text-white relative">
                        <div className="absolute top-0 right-0 p-40 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
                        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center relative z-10">
                            <div className="order-2 md:order-1">
                                <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                                    Lançamento
                                </span>
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                    10 Estratégias Neuro-Inovadoras
                                </h3>
                                <p className="text-teal-50 text-lg mb-6 leading-relaxed">
                                    Um guia prático para transformar sua sala de aula. Atividades passo-a-passo com explicação científica detalhada para cada estímulo cognitivo.
                                </p>
                                <ul className="space-y-2 mb-8 text-teal-100">
                                    <li className="flex items-center"><Brain className="h-5 w-5 mr-2" /> Explicação do que acontece no cérebro</li>
                                    <li className="flex items-center"><Zap className="h-5 w-5 mr-2" /> Dicas do "Neuro-Inovador"</li>
                                    <li className="flex items-center"><Check className="h-5 w-5 mr-2" /> Pronto para aplicar amanhã</li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={handleBuy}
                                        className="bg-white text-teal-800 font-bold py-3 px-8 rounded-xl hover:bg-teal-50 transition shadow-lg"
                                    >
                                        Comprar por R$ 9,90
                                    </button>
                                    <button 
                                        onClick={() => setShowPreview(true)}
                                        className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition flex items-center justify-center"
                                    >
                                        Ver Prévia do Conteúdo
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center">
                                <div className="relative w-64 md:w-80 aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 flex flex-col overflow-hidden group cursor-pointer">
                                    <div className="h-full bg-slate-100 p-6 flex flex-col border-l-8 border-slate-300">
                                        <div className="flex-grow flex flex-col justify-center items-center text-center border-4 border-double border-slate-300 p-4">
                                            <Brain className="h-20 w-20 text-neuro-teal mb-4" />
                                            <h4 className="font-display font-bold text-2xl text-slate-800 leading-tight mb-2">NEURO PRÁTICA</h4>
                                            <p className="text-slate-500 text-sm uppercase tracking-widest">Guia Definitivo</p>
                                        </div>
                                        <div className="mt-auto text-center pt-4">
                                            <p className="text-xs text-slate-400">NeuroPedagogia Hub Edições</p>
                                        </div>
                                    </div>
                                    {/* Shine effect */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Other Products Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProductCard 
                            image="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
                            title="Planner do Educador 2024"
                            price="R$ 9,90"
                            badge="Digital"
                            url={checkoutUrl}
                        />
                         <ProductCard 
                            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
                            title="Kit Cartões de Emoções"
                            price="R$ 9,90"
                            badge="Digital"
                            url={checkoutUrl}
                        />
                        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 p-8 hover:bg-slate-100 transition cursor-pointer">
                            <ShoppingBag className="h-10 w-10 mb-4 opacity-50" />
                            <p className="font-bold">Ver mais produtos</p>
                        </div>
                    </div>
                </div>

                {/* Affiliate Section */}
                <div className="bg-warm-bg rounded-3xl p-8 md:p-12 border border-slate-100">
                    <h2 className="font-display text-2xl font-bold text-slate-800 mb-8 text-center">Biblioteca Recomendada (Parceiros)</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition text-center group">
                                <div className="h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
                                     <img 
                                        src={`https://picsum.photos/300/400?random=${i + 30}`} 
                                        alt="Book Cover" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <h4 className="font-bold text-slate-800 text-sm mb-1">O Cérebro da Criança</h4>
                                <p className="text-xs text-slate-500 mb-3">Daniel Siegel</p>
                                <button className="w-full py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded hover:bg-slate-200 transition">
                                    Ver na Amazon
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-400 text-xs mt-8">
                        *Como associados Amazon, ganhamos com compras qualificadas. Isso ajuda a manter o site no ar.
                    </p>
                </div>
            </div>

            {/* EBOOK PREVIEW MODAL */}
            {showPreview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div>
                                <h3 className="font-display font-bold text-xl text-slate-800">Índice do E-book</h3>
                                <p className="text-slate-500 text-sm">Prévia das 10 Atividades Práticas</p>
                            </div>
                            <button onClick={() => setShowPreview(false)} className="text-slate-400 hover:text-slate-600 transition">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        
                        <div className="overflow-y-auto p-6 bg-white">
                            <div className="space-y-6">
                                {ebookContent.map((item, index) => (
                                    <div key={index} className="border border-slate-100 rounded-xl p-5 hover:border-neuro-teal/30 hover:bg-slate-50 transition group">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center">
                                                <span className="bg-neuro-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                                                    {index + 1}
                                                </span>
                                                <h4 className="font-bold text-lg text-slate-800 group-hover:text-neuro-teal transition">{item.title}</h4>
                                            </div>
                                            {index > 2 && <Lock className="h-4 w-4 text-slate-300" />}
                                        </div>
                                        
                                        {index <= 2 ? (
                                            <div className="ml-11">
                                                <p className="text-slate-600 mb-3 text-sm">{item.desc}</p>
                                                <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-900 mb-2 flex items-start">
                                                    <Brain className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                                                    <span className="font-bold mr-1">Neurociência:</span> {item.neuro}
                                                </div>
                                                <div className="bg-yellow-50 p-3 rounded-lg text-xs text-yellow-900 flex items-start">
                                                    <Zap className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                                                    <span className="font-bold mr-1">Dica Inovadora:</span> {item.tip}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="ml-11 filter blur-[2px] opacity-50 select-none">
                                                <p className="text-slate-600 mb-2">Conteúdo exclusivo disponível na versão completa do e-book.</p>
                                                <div className="bg-slate-100 h-8 w-3/4 rounded mb-2"></div>
                                                <div className="bg-slate-100 h-8 w-1/2 rounded"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                            <p className="text-slate-500 text-sm hidden sm:block">Acesso imediato após a compra (PDF).</p>
                            <button 
                                onClick={handleBuy}
                                className="w-full sm:w-auto bg-neuro-teal text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-600 transition shadow-lg flex items-center justify-center"
                            >
                                <ShoppingBag className="h-5 w-5 mr-2" />
                                Comprar Agora - R$ 9,90
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProductCard = ({ image, title, price, badge, url }: { image: string, title: string, price: string, badge: string, url: string }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition">
        <div className="h-56 overflow-hidden relative">
            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                {badge}
            </span>
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
        </div>
        <div className="p-6">
            <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-neuro-teal">{price}</span>
                <button 
                    onClick={() => window.open(url, '_blank')}
                    className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-800 transition"
                >
                    Comprar
                </button>
            </div>
        </div>
    </div>
);

const ebookContent = [
    {
        title: "A Dança do Semáforo",
        desc: "Crianças se movimentam ao ritmo de uma música. Quando o professor mostra o verde, elas dançam rápido; amarelo, andam devagar; vermelho, congelam.",
        neuro: "Estimula o Giro Cingulado Anterior: A capacidade de inibir um movimento impulsivo e mudar de foco rapidamente, fundamental para a autorregulação.",
        tip: "Varie o tempo dos sinais para desafiar a atenção."
    },
    {
        title: "O Caminho da Memória de Trabalho",
        desc: "Crie um caminho no chão. Antes de iniciar, diga uma sequência de 3 cores que a criança deve tocar na ordem, memorizando enquanto se move.",
        neuro: "Estimula o Córtex Pré-Frontal (CPF): Fortalece a Memória de Trabalho, pois a criança precisa reter informações enquanto executa outra tarefa motora.",
        tip: "Aumente a sequência conforme a criança domina (3, 4, 5 cores)."
    },
    {
        title: "Caixa Sensorial de Classificação",
        desc: "Use uma caixa com diversos objetos e peça para classificar usando critérios mutáveis (ex: 1º por cor, 2º por textura).",
        neuro: "Estimula a Flexibilidade Cognitiva: A mudança constante de critério ajuda o cérebro a 'desapegar' de uma estratégia e adotar uma nova.",
        tip: "Use objetos do cotidiano para facilitar a conexão."
    },
    {
        title: "História Sem Fim (Criação Colaborativa)",
        desc: "O professor começa uma frase. Cada criança adiciona uma frase baseada na anterior.",
        neuro: "Estimula a Coerência Narrativa e Atenção Sustentada: Exige foco no outro para manter a lógica.",
        tip: "Grave a história e escutem juntos depois."
    },
    {
        title: "O Chef de Receitas Falsas",
        desc: "Crianças criam 'receitas' imaginárias, listando ingredientes e ordem de preparo.",
        neuro: "Estimula o Planejamento e Sequenciamento: Organizar pensamentos em etapas lógicas.",
        tip: "Peça para desenharem o prato final antes da receita."
    },
    {
        title: "Busca pelo Tesouro (Instruções Duplas)",
        desc: "Dê uma instrução de busca com duas partes independentes (ex: 'Traga algo vermelho e que faça barulho').",
        neuro: "Estimula o Foco Dividido (Atenção Seletiva): Processar dois atributos simultaneamente.",
        tip: "Torne divertido com um cronômetro."
    },
    {
        title: "Música e Regulação Emocional",
        desc: "Use músicas com ritmos variados. Crianças expressam como se sentem com movimentos.",
        neuro: "Estimula Sistema Límbico e CPF: Liga emoção à cognição e facilita a regulação.",
        tip: "Use lenços coloridos para ampliar o movimento."
    },
    {
        title: "Quebra-Cabeça do Corpo",
        desc: "Monte um 'esqueleto' de partes do corpo desenhadas em cartolina no chão.",
        neuro: "Estimula o Córtex Parietal: Consciência Espacial e Corporal.",
        tip: "Faça em tamanho real contornando uma criança."
    },
    {
        title: "O Jogo dos Contrastes",
        desc: "Apresente imagens opostas (quente/frio) e peça para associarem objetos da sala.",
        neuro: "Estimula Pensamento Abstrato e Categorização.",
        tip: "Comece com contrastes físicos táteis."
    },
    {
        title: "O Telefone Sem Fio Complexo",
        desc: "Sussurre uma instrução de 3 etapas em vez de uma frase.",
        neuro: "Estimula Audição Seletiva e Retenção.",
        tip: "Peça para a última criança executar a ação, não falar."
    }
];

export default Premium;