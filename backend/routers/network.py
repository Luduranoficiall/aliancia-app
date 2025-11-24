from fastapi import APIRouter

router = APIRouter(prefix="/network", tags=["Network"])

@router.get("/")
def get_network():
    return {"message": "Funcionalidade de rede em 3 níveis em desenvolvimento."}
