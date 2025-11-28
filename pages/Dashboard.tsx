import React, { useState } from 'react';
import { 
    LayoutDashboard, BookOpen, Download, User, Settings, LogOut, 
    PlayCircle, Clock, Award, FileText, Bell, CreditCard, ChevronRight 
} from 'lucide-react';

interface DashboardProps {
    onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'downloads' | 'profile'>('overview');

    // Sidebar navigation item component
    const NavItem = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
        <button
            onClick={() => setActiveTab(id as any)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                activeTab === id 
                ? 'bg-neuro-teal text-white shadow-md font-bold' 
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
        >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
        </button>
    );

    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex flex-col md:flex-row animate-fade-in">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col">
                <div className="mb-8 flex items-center space-x-3 px-2">
                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                         <img src="https://picsum.photos/100/100?random=1" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-slate-800 text-sm">Fernanda Silva</div>
                        <div className="text-xs text-slate-500">Membro desde 2024</div>
                    </div>
                </div>

                <nav className="space-y-2 flex-grow">
                    <NavItem id="overview" label="Visão Geral" icon={LayoutDashboard} />
                    <NavItem id="courses" label="Meus Cursos" icon={BookOpen} />
                    <NavItem id="downloads" label="Meus Downloads" icon={Download} />
                    <NavItem id="profile" label="Meu Perfil" icon={User} />
                </nav>

                <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-neuro-blue transition rounded-xl hover:bg-slate-50">
                        <Settings className="h-5 w-5" />
                        <span>Suporte</span>
                    </button>
                    <button 
                        onClick={onLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 transition rounded-xl"
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Sair</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-6 md:p-12 overflow-y-auto">
                
                {/* --- OVERVIEW TAB --- */}
                {activeTab === 'overview' && (
                    <div className="animate-fade-in">
                        <div className="mb-8">
                            <h1 className="font-display text-3xl font-bold text-slate-800 mb-2">Olá, Fernanda! 👋</h1>
                            <p className="text-slate-600">Que bom te ver por aqui. Continue sua jornada de aprendizado.</p>
                        </div>

                        {/* Continue Watching Block */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
                            <h2 className="font-bold text-xl text-slate-800 mb-6 flex items-center">
                                <PlayCircle className="mr-2 text-neuro-teal" />
                                Em Progresso
                            </h2>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 aspect-video bg-slate-900 rounded-xl relative overflow-hidden group cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Curso" className="w-full h-full object-cover opacity-70" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle className="h-12 w-12 text-white opacity-90 group-hover:scale-110 transition" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">12:45</div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold text-lg text-slate-800">Neurociência Aplicada na Prática</h3>
                                        <span className="text-neuro-teal font-bold text-sm">45%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3 mb-4">
                                        <div className="bg-neuro-teal h-3 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-4">Módulo 3: Memória de Trabalho • Aula 2/5</p>
                                    <button className="bg-neuro-teal text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition">
                                        Continuar Aula
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Recent Downloads */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                                    <Download className="mr-2 text-neuro-blue" />
                                    Seus Materiais
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "E-book: 10 Estratégias", type: "PDF" },
                                        { title: "Checklist Sala de Aula", type: "PDF" },
                                        { title: "Planner Semanal", type: "Excel" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 cursor-pointer">
                                            <div className="flex items-center">
                                                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                                    <FileText className="h-5 w-5 text-neuro-blue" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-700 text-sm">{item.title}</div>
                                                    <div className="text-xs text-slate-400">{item.type}</div>
                                                </div>
                                            </div>
                                            <Download className="h-4 w-4 text-slate-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Community Feed Snippet */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                                    <Award className="mr-2 text-yellow-500" />
                                    Destaques da Comunidade
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { user: "Carlos M.", action: "postou uma dúvida", topic: "TDAH em sala" },
                                        { user: "Ana Paula", action: "comentou em", topic: "Rotinas de Sono" },
                                        { user: "NeuroEduca", action: "publicou", topic: "Novo evento ao vivo" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center text-sm p-3 border-b border-slate-50 last:border-0">
                                            <div className="w-2 h-2 rounded-full bg-neuro-teal mr-3"></div>
                                            <p className="text-slate-600">
                                                <span className="font-bold text-slate-800">{item.user}</span> {item.action} <span className="text-neuro-blue font-medium">"{item.topic}"</span>
                                            </p>
                                        </div>
                                    ))}
                                    <button className="w-full text-center text-sm text-neuro-blue font-bold mt-2 hover:underline">
                                        Ir para a Comunidade
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- COURSES TAB --- */}
                {activeTab === 'courses' && (
                     <div className="animate-fade-in">
                        <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Meus Cursos</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group cursor-pointer hover:shadow-md transition">
                                <div className="h-40 bg-slate-800 relative">
                                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Course" className="w-full h-full object-cover opacity-60" />
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                                        <div className="bg-neuro-teal h-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-neuro-teal transition">Neurociência Aplicada</h3>
                                    <p className="text-sm text-slate-500 mb-4">Módulo 3 de 7 • 12 aulas restantes</p>
                                    <button className="w-full py-2 border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition text-sm">
                                        Continuar
                                    </button>
                                </div>
                            </div>

                             {/* Placeholder for future courses */}
                             <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                                <BookOpen className="h-10 w-10 text-slate-300 mb-4" />
                                <h3 className="font-bold text-slate-600">Descubra novos cursos</h3>
                                <p className="text-sm text-slate-400 mb-4">Expanda seu conhecimento com nossos novos módulos.</p>
                                <button className="text-neuro-blue font-bold text-sm hover:underline">
                                    Ver Catálogo
                                </button>
                            </div>
                        </div>
                     </div>
                )}

                 {/* --- DOWNLOADS TAB --- */}
                 {activeTab === 'downloads' && (
                     <div className="animate-fade-in">
                        <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Biblioteca de Downloads</h2>
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            {[
                                { name: "O Guia do Professor Neuro-Inovador", date: "12/10/2023", size: "2.4 MB" },
                                { name: "Checklist de Rotinas Cerebrais", date: "15/10/2023", size: "1.1 MB" },
                                { name: "Planner Pedagógico 2024 (Template)", date: "15/10/2023", size: "4.5 MB" }
                            ].map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition">
                                    <div className="flex items-center">
                                        <div className="bg-neuro-teal/10 p-3 rounded-lg mr-4">
                                            <FileText className="h-6 w-6 text-neuro-teal" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{file.name}</h4>
                                            <p className="text-xs text-slate-500">Adquirido em {file.date} • {file.size}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 text-neuro-blue hover:bg-blue-50 rounded-full transition">
                                        <Download className="h-5 w-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                     </div>
                 )}

                 {/* --- PROFILE TAB --- */}
                 {activeTab === 'profile' && (
                     <div className="animate-fade-in max-w-2xl">
                        <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">Configurações da Conta</h2>
                        
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <User className="mr-2 h-5 w-5 text-slate-400" />
                                Dados Pessoais
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                                    <input type="text" defaultValue="Fernanda Silva" className="w-full p-3 rounded-lg border border-slate-200" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                                    <input type="email" defaultValue="fernanda.silva@email.com" className="w-full p-3 rounded-lg border border-slate-200" />
                                </div>
                                <div className="pt-2">
                                    <button className="bg-slate-900 text-white font-bold py-2 px-6 rounded-lg text-sm hover:bg-slate-800">
                                        Salvar Alterações
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <CreditCard className="mr-2 h-5 w-5 text-slate-400" />
                                Histórico de Compras
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-slate-500">
                                            <th className="pb-2 font-medium">Produto</th>
                                            <th className="pb-2 font-medium">Data</th>
                                            <th className="pb-2 font-medium">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        <tr className="border-b border-slate-50">
                                            <td className="py-3">Checklist Rotinas Cerebrais</td>
                                            <td className="py-3">15/10/2023</td>
                                            <td className="py-3 font-bold">R$ 19,90</td>
                                        </tr>
                                         <tr>
                                            <td className="py-3">Curso Neurociência Aplicada</td>
                                            <td className="py-3">10/10/2023</td>
                                            <td className="py-3 font-bold">R$ 297,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <h3 className="font-bold text-lg mb-4 flex items-center">
                                <Bell className="mr-2 h-5 w-5 text-slate-400" />
                                Notificações
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Novidades sobre cursos</span>
                                    <div className="w-10 h-6 bg-neuro-teal rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Lembretes de aula</span>
                                    <div className="w-10 h-6 bg-neuro-teal rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                     </div>
                 )}

            </main>
        </div>
    );
};

export default Dashboard;