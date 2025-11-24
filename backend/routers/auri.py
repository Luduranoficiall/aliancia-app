from fastapi import APIRouter

router = APIRouter(prefix="/auri", tags=["AURI.A"])

@router.get("/")
def get_auri():
    return {"message": "Funcionalidade AURI.A em desenvolvimento."}
