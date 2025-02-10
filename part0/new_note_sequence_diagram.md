```mermaid
squenceDiagram
participant browser
participant server

browser->>server: https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
server->>browser: Redirect to notes page
deactivate server

Note right of browser: Server responded with a 302 status code to redirect to the notes page

browser->>server: https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server->>browser: HTML Document
deactivate server

browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server->>browser: CSS Document
deactivate server

browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server->>browser: JavaScript Document
deactivate server

Note right of browser: Execute the logic inside Javascript file

browser->>server: https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server->>browser: Fetch JSON data
deactivate server
```