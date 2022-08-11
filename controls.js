class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyListener();
    }
    #addKeyListener() {
        const handleKey = (status) => (event) => {
            switch (event.key) {
                case "ArrowUp":
                    this.forward = status;
                    break;
                case "ArrowLeft":
                    this.left = status;
                    break;
                case "ArrowRight":
                    this.right = status;
                    break;
                case "ArrowDown":
                    this.reverse = status;
                    break;
            }
        }
        document.onkeydown = handleKey(true);
        document.onkeyup = handleKey(false);
    }
}