```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server->>browser: HTML Document
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server->>browser: CSS Document
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server->>browser: JavaScript Document
    deactivate server

    Note right of browser: Execute js code form spa.js

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: Fetch JSON Data
    deactivate server
    Note right of browser: Fetch the data and populate the page with that data
```