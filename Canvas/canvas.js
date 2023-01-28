const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const toolBtns = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");
const color = document.querySelector("#color");
const clearCanvas = document.querySelector(".clear-canvas");
const saveImg = document.querySelector(".save-canvas");

let isDrawing = false;
let snapshot;
let linewidth = document.getElementById("size");
let selectedTool = "brush";
let prevMouseX, prevMouseY;

const drawRect = (e) => {
    if (!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const drawCricle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = linewidth.value;
    ctx.strokeStyle = color.value;
    ctx.fillStyle = color.value;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log("startdraw");
}

const drawing = (e) => {
    if (!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);

    if (selectedTool === "brush" || selectedTool === "eraser") {
        ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : color;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    } else if (selectedTool === "rectangle") {
        drawRect(e);
    } else if (selectedTool === "circle") {
        drawCricle(e);
    } else {
        drawTriangle(e);
    }
}

toolBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
    })
})

clearCanvas.addEventListener("click", () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBg();
});

saveImg.addEventListener("click", () =>{
    const link = document.createElement("a");
    link.download = `${Date.now()}.jpg`;
    link.href = canvas.toDataURL(); 
    link.click();
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);

//Touching Events
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    [...e.changedTouches].forEach(touch => {
        const id = touch.identifier;
        isDrawing = true;
        prevTouchX = touch.pageX;
        prevTouchY = touch.pageY;
        ctx.beginPath();
        ctx.lineWidth = linewidth.value;
        ctx.strokeStyle = color.value;
        ctx.fillStyle = color.value;
        snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log("touchstart");
    })
});

canvas.addEventListener("touchmove", (e) => {
    [...e.changedTouches].forEach(touch => {
        if (!isDrawing) return;
        ctx.putImageData(snapshot, 0, 0);

        if (selectedTool === "brush" || selectedTool === "eraser") {
            ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : color;
            ctx.lineTo(touch.pageX, touch.pageY);
            ctx.stroke();
            console.log(selectedTool);
        }
    })
})

canvas.addEventListener("touchend",()=> isDrawing = false);
canvas.addEventListener("touchcancel",()=> isDrawing = false);

const setCanvasBg = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color.value;
}
/*
window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBg();
});*/


window.addEventListener("load", () => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    setCanvasBg();
});
