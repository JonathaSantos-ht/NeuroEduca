import { GoogleGenAI, Type } from "@google/genai";
import { Activity } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateActivity = async (ageGroup: string, focusArea: string): Promise<Activity | null> => {
    if (!apiKey) {
        console.warn("API Key not found. Returning mock data.");
        return {
            title: "Caixa Sensorial da Natureza (Mock)",
            ageGroup: ageGroup,
            objective: "Estimular o processamento tátil e a curiosidade.",
            materials: ["Caixa de sapato", "Folhas secas", "Pedras lisas", "Areia"],
            steps: ["Encha a caixa com os itens.", "Peça para a criança identificar objetos de olhos fechados."],
            neuroConcept: "Integração sensorial e fortalecimento de sinapses táteis."
        };
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Crie uma atividade pedagógica baseada em neurociência para crianças de ${ageGroup} com foco em ${focusArea}.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        ageGroup: { type: Type.STRING },
                        objective: { type: Type.STRING },
                        materials: { type: Type.ARRAY, items: { type: Type.STRING } },
                        steps: { type: Type.ARRAY, items: { type: Type.STRING } },
                        neuroConcept: { type: Type.STRING, description: "Explicação breve do conceito de neurociência aplicado nesta atividade." }
                    },
                    required: ["title", "ageGroup", "objective", "materials", "steps", "neuroConcept"]
                }
            }
        });

        const text = response.text;
        if (!text) return null;
        return JSON.parse(text) as Activity;

    } catch (error) {
        console.error("Error generating activity:", error);
        return null;
    }
};

export const explainConcept = async (concept: string): Promise<string> => {
    if (!apiKey) return "API Key ausente. A plasticidade cerebral refere-se à capacidade do cérebro de mudar e se adaptar como resultado da experiência.";

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Explique o conceito de neurociência "${concept}" para um professor de educação infantil de forma simples, acolhedora e prática em um parágrafo curto.`,
        });
        return response.text || "Não foi possível gerar a explicação.";
    } catch (error) {
        console.error("Error explaining concept:", error);
        return "Erro ao comunicar com o serviço de IA.";
    }
};