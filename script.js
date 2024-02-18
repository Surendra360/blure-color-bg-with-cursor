var p1 = document.querySelector(".page1")
var p2 = document.querySelector(".page1-in")

p2.addEventListener("mousemove",function(e) {
    p1.style.background = `conic-gradient(at ${e.x}px ${e.y}px ,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
})