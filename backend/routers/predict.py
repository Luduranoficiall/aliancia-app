from fastapi import APIRouter

router = APIRouter(prefix="/predict", tags=["PREDITIVI.A"])

@router.get("/")
def get_predict():
    return {"message": "Funcionalidade PREDITIVI.A em desenvolvimento."}
