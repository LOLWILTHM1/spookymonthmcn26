const history =
    document.getElementById("history");

const terminalScreen =
    document.getElementById("terminal-screen");

const loadingArea =
    document.getElementById("loading-area");

const loadingProgress =
    document.getElementById("loading-progress");

const loadingPercent =
    document.getElementById("loading-percent");


const platform =
    navigator.platform || "UNKNOWN";

const language =
    navigator.language || "UNKNOWN";

const timezone =
    Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone || "UNKNOWN";

const screenSize =
    `${screen.width}x${screen.height}`;


const positions = [
    "0%",
    "35%",
    "70%"
];

let currentPosition = 0;
let currentBlock = null;
let currentLineCount = 0;

const maxLines = 12;


function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


function createBlock() {

    const block =
        document.createElement("div");

    block.className = "block";

    block.style.left =
        positions[currentPosition];

    history.appendChild(block);

    currentBlock = block;

    currentLineCount = 0;
}


function moveToNextPosition() {

    currentPosition++;

    if (currentPosition >= positions.length) {
        currentPosition = 0;
    }

    createBlock();
}


function addLine(
    text,
    type = "normal"
) {

    if (!currentBlock) {
        createBlock();
    }

    if (currentLineCount >= maxLines) {
        moveToNextPosition();
    }

    const line =
        document.createElement("div");

    line.className =
        `line ${type}`;

    line.textContent =
        text;

    currentBlock.appendChild(line);

    currentLineCount++;
}


async function loading(text, duration) {

    const label =
        document.getElementById("loading-label");

    loadingArea.style.opacity = "1";

    label.textContent = text;

    loadingProgress.style.width = "0%";
    loadingPercent.textContent = "0%";

    const steps = 100;
    const interval = duration / steps;

    for (let i = 0; i <= steps; i++) {

        loadingProgress.style.width =
            i + "%";

        loadingPercent.textContent =
            i + "%";

        await wait(interval);
    }
}


async function begin() {

    createBlock();

    document.body.classList.add(
        "processing"
    );


    await wait(800);

    addLine(
        "> BOOT_SEQUENCE",
        "dim"
    );

    await wait(500);

    addLine(
        "CORE SYSTEM ................. ONLINE"
    );

    await wait(450);

    addLine(
        "MEMORY ALLOCATION ........... OK"
    );

    await wait(450);

    addLine(
        "PROCESS MANAGER ............. OK"
    );

    await wait(450);

    addLine(
        "SYSTEM CLOCK ................. SYNC"
    );

    await wait(600);

    addLine(
        "DATABASE SERVICE ............ STARTING",
        "bright"
    );

    await wait(900);


    await loading(
        "INITIALIZING DATABASE",
        2200
    );


    await wait(500);

    addLine(
        "> ENVIRONMENT CHECK",
        "dim"
    );

    await wait(400);

    addLine(
        "PLATFORM .................... " + platform
    );

    await wait(400);

    addLine(
        "DISPLAY ..................... " + screenSize
    );

    await wait(400);

    addLine(
        "LANGUAGE .................... " + language
    );

    await wait(500);

    addLine(
        "RUNTIME ENVIRONMENT .......... VALID",
        "bright"
    );

    await wait(800);


    await loading(
        "READING ENVIRONMENT",
        1800
    );


    await wait(500);

    addLine(
        "> REGIONAL CONFIGURATION",
        "dim"
    );

    await wait(500);

    addLine(
        "TIMEZONE .................... " + timezone
    );

    await wait(600);

    addLine(
        "LOCALE ...................... " + language
    );

    await wait(600);

    addLine(
        "LOCATION SERVICE ............ UNAVAILABLE",
        "warning"
    );

    await wait(900);

    addLine(
        "LOCATION .................... UNKNOWN",
        "warning"
    );

    await wait(700);

    addLine(
        "REGIONAL OFFSET ............. UNRESOLVED",
        "warning"
    );

    await wait(1000);


    await loading(
        "VALIDATING CONFIGURATION",
        1600
    );


    await wait(500);

    addLine(
        "> DATABASE CONFIGURATION",
        "dim"
    );

    await wait(450);

    addLine(
        "ARCHIVE PATH ................ /DATABASE/ARCHIVE"
    );

    await wait(450);

    addLine(
        "INDEX PATH .................. /DATABASE/INDEX"
    );

    await wait(450);

    addLine(
        "CACHE ....................... INITIALIZED"
    );

    await wait(600);

    addLine(
        "CONFIGURATION ............... VALID",
        "bright"
    );

    await wait(900);


    await loading(
        "MOUNTING ARCHIVE",
        1900
    );


    await wait(500);

    addLine(
        "> ARCHIVE MOUNT",
        "dim"
    );

    await wait(500);

    addLine(
        "ARCHIVE VOLUME .............. CONNECTING"
    );

    await wait(700);

    addLine(
        "ARCHIVE VOLUME .............. CONNECTED"
    );

    await wait(600);

    addLine(
        "FILE SYSTEM ................. READABLE"
    );

    await wait(600);

    addLine(
        "INDEX DATABASE .............. LOADED",
        "bright"
    );

    await wait(1000);


    document.body.classList.add(
        "glitch"
    );

    addLine(
        "> INDEX VALIDATION",
        "dim"
    );

    await wait(500);

    addLine(
        "INDEX ENTRIES ............... SCANNING"
    );

    await wait(900);

    addLine(
        "INDEX CHECKSUM .............. INVALID",
        "warning"
    );

    await wait(600);

    addLine(
        "REBUILDING INDEX ............ STARTED"
    );

    await wait(1100);

    document.body.classList.remove(
        "glitch"
    );

    addLine(
        "INDEX CHECKSUM .............. ACCEPTED",
        "bright"
    );

    await wait(1000);


    await loading(
        "SEARCHING CASE INDEX",
        2000
    );


    await wait(500);

    addLine(
        "> CASE INDEX",
        "dim"
    );

    await wait(500);

    addLine(
        "TOTAL RECORDS ............... 101"
    );

    await wait(600);

    addLine(
        "ACTIVE RECORDS .............. 000"
    );

    await wait(600);

    addLine(
        "SEALED RECORDS .............. 101"
    );

    await wait(900);


    document.body.classList.add(
        "glitch"
    );

    addLine(
        "INDEX DESYNC ................. DETECTED",
        "alert"
    );

    await wait(700);

    addLine(
        "REINDEXING ................... PLEASE WAIT"
    );

    await wait(1000);

    document.body.classList.remove(
        "glitch"
    );


    addLine(
        "TOTAL RECORDS ............... 102",
        "warning"
    );

    await wait(800);

    addLine(
        "ACTIVE RECORDS .............. 001",
        "bright"
    );

    await wait(900);


    await loading(
        "OPENING RECORD",
        1700
    );


    await wait(500);

    addLine(
        "> RECORD ACCESS",
        "dim"
    );

    await wait(500);

    addLine(
        "REQUEST ..................... INTERNAL"
    );

    await wait(500);

    addLine(
        "AUTHORIZATION ............... SYSTEM"
    );

    await wait(500);

    addLine(
        "CASE IDENTIFIER ............. #102"
    );

    await wait(700);

    addLine(
        "RECORD STATUS ............... SEALED",
        "bright"
    );

    await wait(800);

    addLine(
        "LAST MODIFIED ............... 24 YEARS AGO"
    );

    await wait(1000);

    addLine(
        "LAST ACCESSED ............... 24 YEARS AGO"
    );

    await wait(1000);

    addLine(
        "CURRENT ACCESS .............. DETECTED",
        "warning"
    );

    await wait(1200);


    document.body.classList.add(
        "glitch"
    );

    addLine(
        "ACCESS TIMESTAMP ............ INVALID",
        "alert"
    );

    await wait(600);

    document.body.classList.remove(
        "glitch"
    );

    addLine(
        "TIMESTAMP ................... NOW",
        "bright"
    );

    await wait(1000);


    await loading(
        "VERIFYING RECORD",
        1600
    );


    await wait(500);

    addLine(
        "> RECORD VERIFICATION",
        "dim"
    );

    await wait(500);

    addLine(
        "HEADER ...................... VALID"
    );

    await wait(400);

    addLine(
        "METADATA .................... VALID"
    );

    await wait(400);

    addLine(
        "ARCHIVE SIGNATURE ........... VALID"
    );

    await wait(700);

    addLine(
        "RECORD INTEGRITY ............ FAILED",
        "warning"
    );

    await wait(900);

    addLine(
        "RECORD CONTENT .............. AVAILABLE",
        "bright"
    );

    await wait(1000);


    await loading(
        "FINALIZING",
        1400
    );


    await wait(600);

    addLine(
        "> DATABASE STATUS",
        "dim"
    );

    await wait(500);

    addLine(
        "DATABASE .................... ONLINE",
        "bright"
    );

    await wait(500);

    addLine(
        "ARCHIVE ..................... ONLINE",
        "bright"
    );

    await wait(500);

    addLine(
        "INDEX ....................... ONLINE",
        "bright"
    );

    await wait(700);

    addLine(
        "CASE #102 ................... OPEN",
        "bright"
    );

    await wait(1500);

    addLine("");

    addLine(
        "DATABASE READY.",
        "bright"
    );

    await wait(1800);


    loadingProgress.style.width =
        "100%";

    loadingPercent.textContent =
        "100%";

    await wait(1200);


    const continuePrompt =
        document.getElementById(
            "continue-prompt"
        );

    continuePrompt.classList.add(
        "ready"
    );


    await new Promise(resolve => {

        function continueGame(event) {

            if (event.key) {

                continuePrompt.classList.add(
                    "pressed"
                );

                document.removeEventListener(
                    "keydown",
                    continueGame
                );

                resolve();
            }
        }

        document.addEventListener(
            "keydown",
            continueGame
        );

    });


    await wait(500);

    document.body.classList.add(
        "fade"
    );

    await wait(1200);

    window.location.href =
        "home.html";
}


begin();