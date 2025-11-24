from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Member

router = APIRouter(prefix="/members", tags=["Members"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register_member(name: str, email: str, referral_code: str = None, db: Session = Depends(get_db)):
    member = Member(name=name, email=email, referral_code=referral_code)
    db.add(member)
    db.commit()
    db.refresh(member)
    return {"id": member.id, "name": member.name, "email": member.email, "referral_code": member.referral_code}

@router.get("/")
def list_members(db: Session = Depends(get_db)):
    return db.query(Member).all()
