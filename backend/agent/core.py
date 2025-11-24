class AlianciaAgent:
    def __init__(self, name: str):
        self.name = name

    def answer(self, question: str) -> str:
        # Aqui integraria com GPT ou IA customizada
        return f"Olá, {self.name}! Resposta simulada para: {question}"
