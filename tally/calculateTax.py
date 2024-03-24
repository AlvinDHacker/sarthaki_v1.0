import pandas as pd

# Function to calculate tax
def calculate_tax(income):
    if income <= 250000:
        return 0
    elif income <= 500000:
        return 0.05 * (income - 250000)
    elif income <= 1000000:
        return 12500 + 0.2 * (income - 500000)
    else:
        return 12500 + 100000 + 0.3 * (income - 1000000)

# Function to calculate GST
def calculate_gst(amount, gst_rate):
    return amount * (gst_rate / 100)

# Read input from Excel file
def read_input(filename):
    try:
        df = pd.read_excel(filename)
        return df
    except Exception as e:
        print("Error reading input file:", e)
        return None

# Process data and calculate tax and GST
def process_data(df):
    if df is not None:
        try:
            df['Tax'] = df['Income'].apply(calculate_tax)
            df['GST'] = df.apply(lambda row: calculate_gst(row['Amount'], row['GST Rate']), axis=1)
            return df
        except Exception as e:
            print("Error processing data:", e)
            return None
    else:
        return None

# Write output to Excel file
def write_output(df, filename):
    try:
        df.to_excel(filename, index=False)
        print("Output saved to", filename)
    except Exception as e:
        print("Error writing output file:", e)

def main():
    # Input and output filenames
    input_file = "input.xlsx"
    output_file = "output.xlsx"

    # Read input data
    data = read_input(input_file)

    # Process data and calculate tax and GST
    if data is not None:
        processed_data = process_data(data)
        if processed_data is not None:
            # Write output to Excel file
            write_output(processed_data, output_file)
        else:
            print("Error processing data. Exiting...")
    else:
        print("Error reading input data. Exiting...")

if __name__ == "__main__":
    main()
