# This class is used to summarize the notes of each slide
# Imports
import requests
import speech_recognition as sr
import cohere
import time
import pandas as pd
from punctuator import Punctuator

# Global variables
api_key = "RG7HNjYkf3BPA7KkdWrb6VdqvVZXWNA78mNTwyvN"
co = cohere.Client(api_key)


# Convert speech to text
def speechToText(audio):
    # Initialize speech recognizer
    r = sr.Recognizer()

    # Load in the file
    filename = audio

    # Open the file and convert all recognized speech
    with sr.AudioFile(filename) as source:
        audioData = r.listen(source, 100, 100)
        return r.recognize_google(audioData)


# Create a summary using cohere
def summary(audio):
    # Translate the audio to text
    text = speechToText(audio)

    # Punctuate data
    punc = Punctuator('model.pcl')
    text = punc.punctuate(text)

    # Leverage cohere to generate summary
    sumText = co.generate(
        model='large',
        prompt=text,
        return_likelihoods='GENERATION'
    )

    # Return summary
    return sumText[0]

print(summary("test.wav"))