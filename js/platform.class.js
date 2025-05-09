class Platform{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        fill('#FFD700');
        rect(this.x, this.y, this.width, this.height);
    }

    checkCollision(player) {
        return (
            player.x + player.width / 2 >= this.x - this.width / 2 &&
            player.x - player.width / 2 <= this.x + this.width / 2 &&
            player.y + player.height / 2 >= this.y - this.height / 2 &&
            player.y + player.height / 2 <= this.y + this.height / 2
        );
    }
}