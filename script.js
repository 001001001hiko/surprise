* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    overflow: hidden;
}

/* MAIN PAGE */

.page {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        radial-gradient(circle at top left, #ffd6e8, transparent 35%),
        radial-gradient(circle at bottom right, #d9c2ff, transparent 35%),
        linear-gradient(135deg, #fff0f7, #f4efff);
}

/* CARD */

.card {
    width: 90%;
    max-width: 550px;

    padding: 60px 30px;

    text-align: center;

    background: rgba(255, 255, 255, 0.75);

    border-radius: 35px;

    box-shadow: 0 25px 70px rgba(100, 50, 100, 0.2);

    backdrop-filter: blur(20px);
}

.heart {
    font-size: 70px;
    margin-bottom: 15px;
}

h1 {
    font-family: Georgia, serif;

    font-size: 50px;

    color: #3f2747;

    margin-bottom: 15px;
}

.card p {
    color: #76566e;

    font-size: 18px;

    margin-bottom: 35px;
}

/* BUTTONS */

.buttons {
    display: flex;

    justify-content: center;

    gap: 20px;
}

button {
    border: none;

    padding: 16px 35px;

    border-radius: 50px;

    font-size: 18px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}

/* YES */

#yesBtn {
    background: linear-gradient(135deg, #ff4fa3, #ff78ba);

    color: white;

    box-shadow: 0 10px 25px rgba(255, 70, 150, 0.3);
}

#yesBtn:hover {
    transform: scale(1.1);
}

/* NO */

#noBtn {
    background: white;

    color: #76566e;

    border: 2px solid #efdce9;
}

#message {
    margin-top: 20px;

    color: #ff4fa3;

    font-weight: bold;
}


/* FLOWER PAGE */

.flowerPage {
    display: none;

    text-align: center;
}

.flowerContent {
    animation: appear 1s ease;
}

.bigHeart {
    font-size: 90px;

    animation: heartbeat 1.3s infinite;
}

.flowerPage h1 {
    color: #593254;
}

.flowerPage p {
    color: #76566e;

    font-size: 20px;

    margin: 15px;
}

/* FLOWERS */

.flowers {
    font-size: 65px;

    margin: 40px 0;

    animation: flowerFloat 2s infinite ease-in-out;
}

.loveMessage {
    line-height: 1.7;
}

/* AGAIN BUTTON */

.backBtn {
    background: #593254;

    color: white;

    margin-top: 20px;
}

.backBtn:hover {
    transform: scale(1.08);
}


/* ANIMATIONS */

@keyframes heartbeat {

    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

@keyframes flowerFloat {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes appear {

    from {
        opacity: 0;

        transform: translateY(30px);
    }

    to {
        opacity: 1;

        transform: translateY(0);
    }
}


/* PHONE */

@media (max-width: 600px) {

    .card {
        padding: 45px 20px;
    }

    h1 {
        font-size: 38px;
    }

    .buttons {
        gap: 10px;
    }

    button {
        padding: 14px 25px;
        font-size: 16px;
    }

    .flowers {
        font-size: 40px;
    }

}
