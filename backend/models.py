from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from database import Base
import datetime


class Member(Base):
    __tablename__ = "members"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    referral_code = Column(String, unique=True, index=True)
    upline_id = Column(Integer, ForeignKey("members.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    cashback = relationship("Cashback", back_populates="member")
    purchases = relationship("Purchase", back_populates="member")
    referrals = relationship("Referral", back_populates="member")


class Cashback(Base):
    __tablename__ = "cashbacks"
    id = Column(Integer, primary_key=True, index=True)
    member_id = Column(Integer, ForeignKey("members.id"))
    amount = Column(Float, default=0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    member = relationship("Member", back_populates="cashback")

class Purchase(Base):
    __tablename__ = "purchases"
    id = Column(Integer, primary_key=True, index=True)
    member_id = Column(Integer, ForeignKey("members.id"))
    value = Column(Float, default=0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    member = relationship("Member", back_populates="purchases")

class Referral(Base):
    __tablename__ = "referrals"
    id = Column(Integer, primary_key=True, index=True)
    member_id = Column(Integer, ForeignKey("members.id"))
    referred_id = Column(Integer, ForeignKey("members.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    member = relationship("Member", foreign_keys=[member_id], back_populates="referrals")
