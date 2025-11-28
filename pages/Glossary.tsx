import React, { useState } from 'react';
import { Search, BookOpen, Share2 } from 'lucide-react';

const Glossary: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const terms = [
        {
            term: "Amígdala",
            definition: "Estrutura do sistema límbico responsável pelo processamento de emoções, especialmente o medo e a detecção de ameaças. Em crianças, é muito ativa e reativa.",
            application: "Em momentos de 'birra' ou medo intenso, a amígdala 'sequestra' o cérebro. Acolher a emoção ajuda a acalmá-la."
        },
        {
            term: "Córtex Pré-Frontal (CPF)",
            definition: "Região responsável pelas funções executivas: planejamento, controle de impulsos e tomada de decisão. É a última área a amadurecer (por volta dos 25 anos).",
            application: "Não espere autocontrole perfeito de uma criança pequena; o 'freio' do cérebro dela ainda está em construção."
        },
        {
            term: "Funções Executivas",
            definition: "Conjunto de habilidades cognitivas que permitem controlar comportamentos, atingir metas e resolver problemas (ex: memória de trabalho, controle inibitório).",
            application: "Jogos de regras, como 'Vivo ou Morto', são excelentes para treinar essas funções."
        },
        {
            term: "Hipocampo",
            definition: "Estrutura fundamental para a formação de novas memórias e aprendizado espacial. Muito sensível ao estresse (cortisol).",
            application: "Um ambiente seguro e afetivo protege o hipocampo e facilita a memorização."
        },
        {
            term: "Mielinização",
            definition: "Processo de revestimento dos axônios com mielina, o que aumenta a velocidade de transmissão dos impulsos nervosos.",
            application: "A coordenação motora fina melhora conforme as vias motoras são mielinizadas."
        },
        {
            term: "Neuroplasticidade",
            definition: "Capacidade do cérebro de mudar sua estrutura e função em resposta a experiências. É máxima na infância.",
            application: "Cada interação positiva que você tem com a criança ajuda a moldar fisicamente o cérebro dela."
        },
        {
            term: "Poda Neural",
            definition: "Processo natural onde o cérebro elimina conexões sinápticas pouco usadas para tornar o processamento mais eficiente.",
            application: "Estímulos frequentes fortalecem conexões; o que não é usado, é podado. A repetição é chave."
        },
        {
            term: "Sinapse",
            definition: "O ponto de comunicação entre dois neurônios, por onde passam os sinais químicos e elétricos.",
            application: "O aprendizado acontece quando novas sinapses são formadas ou fortalecidas."
        }
    ];

    const filteredTerms = terms.filter(t => 
        t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        t.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-16">
                <span className="text-neuro-teal font-bold tracking-wider uppercase text-sm">Base de Conhecimento</span>
                <h1 className="font-display text-4xl font-bold text-slate-800 mt-2 mb-4">Glossário Neuro-Pedagógico</h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    Desmistificando o "neuro-bigode". Um guia prático dos termos essenciais para educadores.
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-slate-400" />
                </div>
                <input
                    type="text"
                    placeholder="Busque por um termo (ex: Sinapse)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-neuro-teal text-lg"
                />
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredTerms.length > 0 ? (
                    filteredTerms.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display font-bold text-2xl text-neuro-blue group-hover:text-blue-700 transition">
                                    {item.term}
                                </h3>
                                <button className="text-slate-300 hover:text-neuro-teal transition" title="Compartilhar termo">
                                    <Share2 className="h-5 w-5" />
                                </button>
                            </div>
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                {item.definition}
                            </p>
                            <div className="bg-teal-50 border-l-4 border-neuro-teal p-4 rounded-r-lg">
                                <p className="text-sm text-teal-900">
                                    <span className="font-bold block mb-1">Na sala de aula:</span>
                                    {item.application}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-2 text-center py-12 text-slate-400">
                        <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-xl">Nenhum termo encontrado para "{searchTerm}".</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Glossary;