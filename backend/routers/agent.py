from fastapi import APIRouter

router = APIRouter(prefix="/agent", tags=["Agente IA"])

@router.post("/ask")
def ask_agent(question: str):
    # Aqui integraria com GPT ou IA customizada
    return {"answer": f"Resposta simulada para: {question}"}
