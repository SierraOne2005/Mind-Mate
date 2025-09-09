from fastapi import APIRouter, HTTPException
from app.schemas.chat import UserInput, ChatResponse
from app.models.chatbot import chatbot_instance 

router = APIRouter()

origins = [
    "http://localhost:3000",
    "http://192.168.1.5:3000"
]

@router.post("/chat", response_model=ChatResponse)
async def handle_chat(user_input: UserInput):
   
    if not user_input.message:
        raise HTTPException(status_code=400, detail="Message cannot be empty.")
    
    try:
        reply = chatbot_instance.generate_response(user_input.message)
        return ChatResponse(reply=reply)
    
    except Exception as e:
        print(f"An error occurred in the chat endpoint: {e}")
        raise HTTPException(status_code=500, detail="Failed to get a response")