# Imports
import os
import psycopg

# Service methods
# Actually does the work here
# Example
def createEvent(eventName, slides):
    # code
    print("get fucked")

    connection = psycopg.connect(os.environ["DATABASE_URL"], application_name="$ docs_quickstart_python")