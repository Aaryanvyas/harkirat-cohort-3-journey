import socket

def server_program():
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    server_socket.bind(("localhost", 12345))
    server_socket.listen(1)

    print("Server started. Waiting for connection...")

    conn, addr = server_socket.accept()
    print("Connected to:", addr)

    while True:
        client_message = conn.recv(1024).decode()

        if client_message.lower() == "exit":
            print("Client disconnected.")
            break

        print("Client:", client_message)

        server_message = input("Server: ")
        conn.send(server_message.encode())

    conn.close()
    server_socket.close()


if __name__ == "__main__":
    server_program()