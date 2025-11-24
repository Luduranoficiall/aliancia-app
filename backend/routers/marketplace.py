from fastapi import APIRouter

router = APIRouter(prefix="/marketplace", tags=["Marketplace"])

@router.get("/")
def list_products():
    # Simulação de produtos
    return [
        {"id": 1, "nome": "Produto A", "preco": 100, "cashback": 10},
        {"id": 2, "nome": "Produto B", "preco": 200, "cashback": 20},
    ]
