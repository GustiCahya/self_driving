const canvas = document.querySelector("#myCanvas");
canvas.width = 200;

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

function animate() {
    canvas.height = window.innerHeight;
    car.draw(ctx);
    car.update();
    requestAnimationFrame(animate)
}


