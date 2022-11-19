# Imports
import psycopg
import logging
from psycopg.errors import ProgrammingError

# Service methods
# Actually does the work here
# Example
def execute(conn, query):
    try:
        with conn.cursor() as cur:
            cur.execute(query)
            row = cur.fetchone()
            conn.commit()
            if row:
                print(row[0])
    except ProgrammingError:
        return "Error"


def createEvent(eventName, slides):
    # Connect to db
    conn = psycopg.connect(
        "postgresql://fdurca:5kk6SvI9LGmNRosjvP03CA@hackwestern9-6731.5xj.cockroachlabs.cloud:26257/HackWestern9?sslmode=verify-full",
        application_name="$ init_db")

    # Create DB
    query = "INSERT INTO event ('" + eventName + "', '" + slides + "')"

    # Run queries
    execute(conn, query)

    # Close connection
    conn.close()
    
# Init db
def reinit():
    # Connect to db
    conn = psycopg.connect(
        "postgresql://fdurca:5kk6SvI9LGmNRosjvP03CA@hackwestern9-6731.5xj.cockroachlabs.cloud:26257/HackWestern9?sslmode=verify-full",
        application_name="$ init_db")

    # Create DB
    queries = [
        # Clear out any existing data
        "DROP TABLE IF EXISTS event",
        # CREATE the messages table
        "CREATE TABLE IF NOT EXISTS event (meetingID UUID PRIMARY KEY DEFAULT gen_random_uuid(), meetingName STRING, slide STRING)",
        # INSERT a row into the messages table
        "INSERT INTO event (meetingID, slide) VALUES ('See!', 'Kill Yourself')",
        # SELECT a row from the messages table
        "SELECT slide FROM event"
    ]

    # Run queries
    for query in queries:
        print("Query - ", end="")
        execute(conn, query)

    # Close connection
    conn.close()


reinit()
print("Queries ran")
