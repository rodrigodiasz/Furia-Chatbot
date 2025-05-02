"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const userMessageRef = useRef<HTMLDivElement>(null);
  const assistantMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const headerHeight = 60;
      const scrollPosition = container.scrollHeight - container.clientHeight;

      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!res.ok) throw new Error("Erro na comunicação");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Desculpe, ocorreu um erro na comunicação.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessageContent = (content: string) => {
    return content.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-[70vh] w-full sm:w-full md:w-full min-[320px]:w-85 border-2 border-zinc-900 dark:border-black bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
      <div className="bg-black text-white p-4 text-center">
        <h2 className="text-xl font-bold">Furioso</h2>
      </div>

      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto scroll-smooth space-y-4"
      >
        {messages.length === 0 ? (
          <div className="text-black dark:text-zinc-50 text-center py-8">
            Envie uma mensagem para começar a conversa!
          </div>
        ) : (
          <>
            {messages.map((message, index) => {
              const isLast = index === messages.length - 1;
              const refProp =
                isLast && message.role === "user"
                  ? userMessageRef
                  : isLast && message.role === "assistant"
                  ? assistantMessageRef
                  : null;

              const isUser = message.role === "user";
              const avatarUrl = isUser ? "/torcida.png" : "/logo-assistant.png";

              return (
                <div
                  key={index}
                  ref={refProp}
                  className={`chat ${isUser ? "chat-end" : "chat-start"}`}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src={avatarUrl} alt="avatar" />
                    </div>
                  </div>
                  <div className="chat-header">
                    {isUser ? "Você" : "Furioso"}
                    <time className="text-xs opacity-50 ml-2">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                  <div className="chat-bubble whitespace-pre-line">
                    {formatMessageContent(message.content)}
                  </div>
                  <div className="chat-footer opacity-50">
                    {isUser ? "Enviado" : "Respondido"}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/logo.png" alt="avatar" />
                  </div>
                </div>
                <div className="chat-bubble animate-pulse">Digitando...</div>
              </div>
            )}
          </>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 dark:border-zinc-50"
      >
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 dark:border-zinc-50 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-200"
            placeholder="Digite sua mensagem..."
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || input.trim() === ""}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:bg-zinc-200 dark:disabled:bg-[#1e1e1e] dark:disabled:text-zinc-900"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
