import { NextRequest, NextResponse } from "next/server";
import { furiaMenu } from "../../constants";

// Novo: Detectar opção do menu principal
function detectarMenuOpcao(message: string): string | null {
  const msg = message.toLowerCase().trim();

  // Primeiro tenta encontrar números de múltiplos dígitos
  const multiDigitMatch = msg.match(/\d+/);
  if (multiDigitMatch) {
    const number = multiDigitMatch[0];
    if (number === "10") return "10";
    if (number === "11") return "11";
    if (number === "12") return "12";
    if (number === "13") return "13";
    if (number === "14") return "14";
  }

  // Depois tenta encontrar palavras-chave
  if (["1", "jogos ao vivo"].some((k) => msg.includes(k))) return "1";
  if (["2", "clipadores", "campeonato"].some((k) => msg.includes(k)))
    return "2";
  if (["3", "calendário", "agenda", "jogos"].some((k) => msg.includes(k)))
    return "3";
  if (["4", "loja", "lojinha", "pantera"].some((k) => msg.includes(k)))
    return "4";
  if (["5", "notícias", "news", "trend"].some((k) => msg.includes(k)))
    return "5";
  if (["6", "criadores", "streamers"].some((k) => msg.includes(k))) return "6";
  if (["7", "cash", "furia cash"].some((k) => msg.includes(k))) return "7";
  if (["8", "bate papo", "chat"].some((k) => msg.includes(k))) return "8";
  if (["9", "história", "historia"].some((k) => msg.includes(k))) return "9";
  if (["10", "line-up", "lineup", "elenco"].some((k) => msg.includes(k)))
    return "10";
  if (["11", "ranking", "conquistas"].some((k) => msg.includes(k))) return "11";
  if (["12", "patrocinadores", "parceiros"].some((k) => msg.includes(k)))
    return "12";
  if (["13", "style", "estilo"].some((k) => msg.includes(k))) return "13";
  if (["14", "eventos", "próximos"].some((k) => msg.includes(k))) return "14";

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1].content
      .toLowerCase()
      .trim();

    // Respostas simples diretas
    const respostasSimples: Record<string, string> = {
      "boa noite": "Boa noite! 👊 Digite /menu para ver as opções.",
      "bom dia": "Bom dia! ☀️ Quer ver o que posso fazer? Digite /menu.",
      "boa tarde": "Boa tarde! 🚀 Use /menu para explorar as opções.",
      tchau: "Até mais! 👋",
      valeu: "Tamo junto! 🔥",
      obrigado: "De nada! Qualquer coisa, é só digitar /menu.",
    };

    if (respostasSimples[lastMessage]) {
      return NextResponse.json({ message: respostasSimples[lastMessage] });
    }

    // Menu principal
    if (lastMessage === "/menu") {
      return NextResponse.json({ message: furiaMenu.menuPrincipal });
    }

    // Opção escolhida no menu
    type MenuOpcao = keyof typeof furiaMenu.opcoes;

    const opcaoSelecionada = detectarMenuOpcao(lastMessage);
    const opcaoNumerica = opcaoSelecionada
      ? (Number(opcaoSelecionada) as MenuOpcao)
      : null;

    if (opcaoNumerica && furiaMenu.opcoes[opcaoNumerica]) {
      return NextResponse.json({
        message: `${furiaMenu.opcoes[opcaoNumerica]}\n\nDigite /menu para voltar ao menu principal.`,
      });
    }

    // Fallback final
    return NextResponse.json({
      message:
        "Desculpe, não entendi. 🤔 Tente digitar /menu para ver as opções disponíveis.",
    });
  } catch (err) {
    console.error("Erro:", err);
    return NextResponse.json(
      { error: "Erro interno ao processar sua solicitação." },
      { status: 500 }
    );
  }
}
