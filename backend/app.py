from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import members, network, cashback, ideas, auri, predict, whatsapp, agent, marketplace



app = FastAPI(
    title="ALIANCI.A API",
    description="API oficial do ecossistema ALIANCI.A — cashback, IA, networking, marketplace e painel do membro.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas principais


# Rotas principais
app.include_router(members.router)
app.include_router(network.router)
app.include_router(cashback.router)
app.include_router(ideas.router)
app.include_router(auri.router)
app.include_router(predict.router)
app.include_router(whatsapp.router)
app.include_router(agent.router)
app.include_router(marketplace.router)

@app.get("/")
def root():
    return {"message": "Bem-vindo à API ALIANCI.A!"}
