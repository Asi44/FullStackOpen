```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: browser prevents default handling of form submission
    Note right of browser: browser creates a new note 
    Note right of browser: browser adds it to the list of notes and re-renders

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: [{"message":"note created"}]
    deactivate server
