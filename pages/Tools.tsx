import React, { useState } from 'react';
import { CheckSquare, HelpCircle, RefreshCw, Check, AlertTriangle, Lightbulb } from 'lucide-react';

const Tools: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'quiz' | 'checklist'>('quiz');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <span className="text-neuro-teal font-bold tracking-wider uppercase text-sm">Autoavaliação e Testes</span>
                <h2 className="font-display text-3xl font-bold text-slate-800 mt-2 mb-4">Ferramentas Interativas</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                    Avalie seus conhecimentos e o ambiente da sua sala de aula com nossas ferramentas baseadas em neurociência.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-slate-100 p-1 rounded-xl inline-flex">
                    <button
                        onClick={() => setActiveTab('quiz')}
                        className={`px-6 py-3 rounded-lg font-bold text-sm transition ${
                            activeTab === 'quiz' 
                            ? 'bg-white text-neuro-blue shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <div className="flex items-center">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Quiz: Neuromitos
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('checklist')}
                        className={`px-6 py-3 rounded-lg font-bold text-sm transition ${
                            activeTab === 'checklist' 
                            ? 'bg-white text-neuro-teal shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <div className="flex items-center">
                            <CheckSquare className="mr-2 h-4 w-4" />
                            Checklist da Sala de Aula
                        </div>
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-3xl mx-auto">
                {activeTab === 'quiz' ? <QuizComponent /> : <ChecklistComponent />}
            </div>
        </div>
    );
};

// --- Sub-components ---

const QuizComponent: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const questions = [
        {
            question: "Usamos apenas 10% do nosso cérebro.",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Este é um neuromito clássico! Usamos 100% do cérebro, mesmo que não todas as áreas estejam ativas simultaneamente com a mesma intensidade."
        },
        {
            question: "O cérebro da criança é mais 'plástico' (moldável) do que o do adulto.",
            options: ["Verdadeiro", "Falso"],
            correct: 0,
            explanation: "Verdadeiro. A neuroplasticidade é mais intensa nos primeiros anos de vida, facilitando a aprendizagem rápida."
        },
        {
            question: "Ouvir Mozart faz bebês ficarem mais inteligentes.",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Falso. Ouvir música é benéfico, mas não existe evidência científica de que o 'Efeito Mozart' aumente o QI permanentemente."
        },
        {
            question: "O estresse tóxico pode prejudicar o desenvolvimento cerebral.",
            options: ["Verdadeiro", "Falso"],
            correct: 0,
            explanation: "Verdadeiro. O cortisol em excesso pode afetar negativamente o hipocampo e o córtex pré-frontal."
        },
        {
            question: "Existem pessoas 'cérebro esquerdo' (lógicas) e 'cérebro direito' (criativas).",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Falso. Embora existam funções lateralizadas (como a linguagem), os dois hemisférios trabalham juntos constantemente. Ninguém é dominado biológicamente por apenas um lado."
        },
        {
            question: "Adaptar o ensino estritamente aos 'Estilos de Aprendizagem' (Visual, Auditivo, Cinestésico) melhora resultados.",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Falso. Pesquisas mostram que, embora tenhamos preferências, ensinar exclusivamente no 'estilo' do aluno não melhora o aprendizado. Abordagens multissensoriais são melhores para todos."
        },
        {
            question: "O cérebro consegue realizar multitarefas (focar em duas coisas ao mesmo tempo) com eficiência.",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Falso. O cérebro não faz multitarefa real com atenção focada; ele alterna rapidamente (switch-tasking), o que gasta mais energia, aumenta erros e reduz a retenção."
        },
        {
            question: "O sono é um estado passivo onde o cérebro apenas 'desliga'.",
            options: ["Verdadeiro", "Falso"],
            correct: 1,
            explanation: "Falso. O sono é altamente ativo! É quando ocorre a consolidação da memória de longo prazo e a 'limpeza' metabólica do cérebro."
        }
    ];

    const handleAnswer = (optionIndex: number) => {
        if (isAnswered) return;
        setSelectedAnswer(optionIndex);
        setIsAnswered(true);
        if (optionIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        const nextQ = currentQuestion + 1;
        if (nextQ < questions.length) {
            setCurrentQuestion(nextQ);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    if (showScore) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-slate-100">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Quiz Concluído!</h3>
                <p className="text-lg text-slate-600 mb-6">
                    Você acertou <span className="font-bold text-neuro-blue">{score}</span> de <span className="font-bold">{questions.length}</span> perguntas.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl mb-8 text-sm text-blue-800">
                    {score === questions.length 
                        ? "Parabéns! Você domina os conceitos básicos e não cai em neuromitos!" 
                        : "Bom trabalho! Continue explorando nossos artigos para aprender mais sobre como o cérebro funciona."}
                </div>
                <button 
                    onClick={resetQuiz}
                    className="bg-neuro-blue text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-600 transition flex items-center justify-center mx-auto"
                >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Refazer Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl text-slate-800">Mito ou Verdade?</h3>
                <span className="text-sm font-semibold text-slate-400">
                    Pergunta {currentQuestion + 1}/{questions.length}
                </span>
            </div>
            
            <div className="mb-8">
                <h4 className="text-lg font-medium text-slate-700 mb-6">{questions[currentQuestion].question}</h4>
                <div className="grid grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className={`py-4 px-6 rounded-xl font-bold border-2 transition ${
                                isAnswered
                                    ? idx === questions[currentQuestion].correct
                                        ? "bg-green-100 border-green-500 text-green-800"
                                        : idx === selectedAnswer
                                            ? "bg-red-100 border-red-500 text-red-800"
                                            : "bg-slate-50 border-slate-200 text-slate-400"
                                    : "bg-white border-slate-200 hover:border-neuro-blue hover:text-neuro-blue text-slate-600"
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {isAnswered && (
                <div className="animate-fade-in mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-slate-700">
                        <span className="font-bold mr-2">Explicação:</span>
                        {questions[currentQuestion].explanation}
                    </p>
                </div>
            )}

            {isAnswered && (
                <div className="flex justify-end">
                    <button 
                        onClick={nextQuestion}
                        className="bg-neuro-teal text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-600 transition"
                    >
                        {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
                    </button>
                </div>
            )}
        </div>
    );
};

const ChecklistComponent: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
    
    const checklistItems = [
        "A iluminação da sala é natural ou suave (evitando luzes fluorescentes piscantes)?",
        "O nível de ruído é controlado para não sobrecarregar o processamento auditivo?",
        "Existem 'cantinhos de refúgio' para crianças que precisam de autorregulação?",
        "Os materiais estão na altura das crianças para promover autonomia?",
        "As paredes têm um equilíbrio visual (não superestimulantes com muitas cores/cartazes)?",
        "Há espaço para movimentação livre e desenvolvimento motor grosso?",
        "A rotina visual está exposta para dar previsibilidade ao cérebro?",
        "Existem elementos naturais (plantas, madeira, pedras) no ambiente?"
    ];

    const toggleItem = (index: number) => {
        const newSet = new Set(checkedItems);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        setCheckedItems(newSet);
    };

    const percentage = Math.round((checkedItems.size / checklistItems.length) * 100);

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
            <div className="bg-neuro-teal p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Auditoria Neuro-Compatível</h3>
                <p className="text-teal-100 text-sm">Marque os itens que já existem na sua sala de aula.</p>
            </div>
            
            <div className="p-8">
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-bold text-slate-700">Seu Score</span>
                        <span className="font-bold text-2xl text-neuro-teal">{percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                        <div 
                            className="bg-neuro-teal h-3 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="space-y-4">
                    {checklistItems.map((item, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => toggleItem(idx)}
                            className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition ${
                                checkedItems.has(idx) 
                                ? 'border-neuro-teal bg-teal-50' 
                                : 'border-slate-100 hover:border-slate-200'
                            }`}
                        >
                            <div className={`mt-1 h-5 w-5 rounded border flex items-center justify-center mr-4 flex-shrink-0 transition ${
                                checkedItems.has(idx) ? 'bg-neuro-teal border-neuro-teal text-white' : 'border-slate-300 bg-white'
                            }`}>
                                {checkedItems.has(idx) && <Check className="h-3 w-3" />}
                            </div>
                            <span className={`text-sm md:text-base ${checkedItems.has(idx) ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {percentage < 50 && checkedItems.size > 0 && (
                    <div className="mt-8 bg-amber-50 p-4 rounded-xl flex items-start text-amber-800 text-sm">
                        <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <p>Sua sala pode estar gerando estresse cognitivo. Considere começar reduzindo o excesso de estímulos visuais nas paredes.</p>
                    </div>
                )}
                
                {percentage >= 80 && (
                    <div className="mt-8 bg-green-50 p-4 rounded-xl flex items-start text-green-800 text-sm">
                        <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                        <p>Excelente! Seu ambiente está otimizado para promover segurança emocional e foco.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tools;