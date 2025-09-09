from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
import torch
import torch

class Chatbot:
    def __init__(self):
        model_id = "KNipun/whisper-psychology-gemma-3-1b"
        
        print("Loading tokenizer...")
        self.tokenizer = AutoTokenizer.from_pretrained(model_id)
        
        print("Loading model...")
        if torch.cuda.is_available():
            from transformers import BitsAndBytesConfig
            quantization_config = BitsAndBytesConfig(load_in_4bit=True)
            self.model = AutoModelForCausalLM.from_pretrained(
                model_id,
                device_map="auto",
                dtype=torch.bfloat16,
                quantization_config=quantization_config
            )
        else:
            self.model = AutoModelForCausalLM.from_pretrained(
                model_id,
                device_map="auto",
                dtype=torch.bfloat16
            )
        
        print("Creating text-generation pipeline...")
        self.pipeline = pipeline(
            "text-generation",
            model=self.model,
            tokenizer=self.tokenizer,
            device_map="auto"
        )
        print("Chatbot model loaded successfully!")

    def generate_response(self, user_input: str) -> str:
        prompt = f"User: {user_input}\nAssistant:"
        
        try:
            sequences = self.pipeline(
                prompt,
                max_new_tokens=200,
                temperature=0.7,
                top_p=0.9,
                do_sample=True,
                num_return_sequences=1,
            )
            
            generated_text = sequences[0]["generated_text"]
            reply = generated_text.split("Assistant:")[-1].strip()
            return reply
        
        except Exception as e:
            print(f"Error during response generation: {e}")
            return "I'm sorry, I encountered an error. Please try again."

chatbot_instance = Chatbot()


