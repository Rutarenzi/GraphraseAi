import { useCallback } from "react";
import { ToastError } from "@/utils/toast";

const callApiAi = () => {
    const CHATGPT_API_KEY = "your_openai_api_key_here";

    // Function to handle different tasks (paraphrase, simplify, grammar-check)
    const graparaphrase = useCallback(async (category, note) => {
        if (!note || !category) {
            return null;
        }

        const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";
        let systemMessage = "";
        let userMessage = "";

        // Setting up system messages based on the task category
        switch (category) {
            case "paraphrase":
                systemMessage = "You are a helpful assistant that paraphrases text.";
                userMessage = `Paraphrase the following text:\n\n${note}`;
                break;
            case "simplify":
                systemMessage = "You are a helpful assistant that simplify text.";
                userMessage = `simplify the following text:\n\n${note}`;
                break;
            case "grammar-check":
                systemMessage = "You are a helpful assistant that checks grammar.";
                userMessage = `Check the grammar and suggest corrections for the following text:\n\n${note}`;
                break;
        }

        const data = {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: userMessage },
            ],
            temperature: 0.7,
        };

        try {
            const response = await fetch(CHATGPT_API_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHATGPT_API_KEY}`,
                },
                body: JSON.stringify(data),
            });

         if(!response.ok) {
            console.error("API request failed:", response.statusText);
            ToastError(`API request failed:${response.statusText}`)
             return null;
        }

            const respo = await response.json();
            return respo.choices[0].message.content.trim();
        } catch (error) {
            console.error("API request error:", error);
            return null;
        }
    }, []);

    return { graparaphrase };
};

export default callApiAi;

















