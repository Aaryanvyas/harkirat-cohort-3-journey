import socket

def client_program():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    client_socket.connect(("localhost", 12345))

    print("Connected to the server.")

    while True:
        client_message = input("Client: ")
        client_socket.send(client_message.encode())

        if client_message.lower() == "exit":
            print("Disconnected from the server.")
            break

        server_message = client_socket.recv(1024).decode()
        print("Server:", server_message)

    client_socket.close()


if __name__ == "__main__":
    client_program()