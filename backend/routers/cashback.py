from fastapi import APIRouter

router = APIRouter(prefix="/cashback", tags=["Cashback"])

@router.get("/")
def get_cashback():
    return {"message": "Funcionalidade de cashback em desenvolvimento."}
