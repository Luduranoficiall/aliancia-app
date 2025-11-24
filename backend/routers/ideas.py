from fastapi import APIRouter

router = APIRouter(prefix="/ideas", tags=["Ideas"])

@router.get("/")
def get_ideas():
    return {"message": "Funcionalidade de ideias em desenvolvimento."}
