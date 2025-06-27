
from fastapi import FastAPI
from faster_whisper import WhisperModel
from fastapi import UploadFile, File
import tempfile

model_size="tiny"
model = WhisperModel(model_size, device="cpu", compute_type="int8")
app = FastAPI()



@app.get("/")
def read_root():
    return {"Hello": "World"}



@app.post("/transcribe/stt")
async def transcribe_audio(audio: UploadFile = File(...)):
    print(f"Received audio file: {audio.filename}")
    print(f"Content type: {audio.content_type}")
    content = await audio.read()
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".webm")
    temp_file.write(content)
    temp_file_path = temp_file.name

    try:
        segments, info = model.transcribe(temp_file_path)
        print(f"Transcription info: {info}")
        transcription = " ".join([segment.text for segment in segments])
        return {"transcription": transcription}
    except Exception as e:
        return {"error": str(e)}
    finally:

