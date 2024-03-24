import pyodbc

def connect_to_tally():
    try:
        # Establish connection to Tally
        connection = pyodbc.connect('DSN=TallyODBC_9000;')
        print("Connected to Tally successfully!")
        return connection
    except pyodbc.Error as e:
        print("Error connecting to Tally:", e)
        return None

def fetch_ledger_data(connection):
    try:
        if connection:
            # Create a cursor
            cursor = connection.cursor()

            # Example: Fetching data from Tally's LEDGER table
            cursor.execute("SELECT * FROM LEDGER")

            # Fetch the results
            rows = cursor.fetchall()

            # Process the fetched data
            for row in rows:
                print(row)

            cursor.close()
        else:
            print("Connection to Tally is not established.")
    except pyodbc.Error as e:
        print("Error fetching ledger data:", e)

def main():
    # Connect to Tally
    connection = connect_to_tally()

    # Fetch ledger data
    fetch_ledger_data(connection)

    # Close the connection
    if connection:
        connection.close()
        print("Connection to Tally closed.")

if __name__ == "__main__":
    main()
