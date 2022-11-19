# Imports
import psycopg
import logging
from psycopg.errors import ProgrammingError


# Service methods
def execute(conn, query):
    try:
        with conn.cursor() as cur:
            cur.execute(query)
            row = cur.fetchone()
            conn.commit()
            return row
    except ProgrammingError:
        return "Error"


# Creates an event and adds it to the database
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


# Creates an event and adds it to the database
def getEventDetails(eventID):
    # Connect to db
    conn = psycopg.connect(
        "postgresql://fdurca:5kk6SvI9LGmNRosjvP03CA@hackwestern9-6731.5xj.cockroachlabs.cloud:26257/HackWestern9?sslmode=verify-full",
        application_name="$ select_db")

    # Create DB
    query = "SELECT meetingName, slide FROM event WHERE meetingID='" + eventID + "'"

    # Run queries
    reply = execute(conn, query)

    # Close connection
    conn.close()

    # Return reply
    return reply


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
        "INSERT INTO event (meetingID, meetingName, slide) VALUES ('3cbd3999-c314-409b-bac0-4cca90d1b6ec', 'TestName', 'TestSlide')",
    ]

    # Run queries
    for query in queries:
        execute(conn, query)

    # Close connection
    conn.close()


# Test DB
def tester():
    reinit()
    print(getEventDetails('3cbd3999-c314-409b-bac0-4cca90d1b6ec'))
