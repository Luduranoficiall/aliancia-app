from fastapi import APIRouter, Request

router = APIRouter(prefix="/whatsapp", tags=["WhatsApp"])

@router.post("/webhook")
async def whatsapp_webhook(request: Request):
    data = await request.json()
    # Aqui você pode tratar a mensagem recebida e responder
    return {"status": "received", "data": data}
