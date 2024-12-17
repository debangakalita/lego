class LegoGame {
    constructor() {
        this.selectedColor = '#8B4513';
        this.gameBoard = document.getElementById('gameBoard');
        this.clearBtn = document.getElementById('clearBtn');
        this.colorBtns = document.querySelectorAll('.color-btn');
        this.init();
    }

    init() {
        this.createBoard();
        this.setupEventListeners();
        this.updateSelectedColorButton();
    }

    createBoard() {
        // Create 14x10 grid of blocks
        for (let i = 0; i < 140; i++) {
            const block = document.createElement('div');
            block.className = 'block';
            this.gameBoard.appendChild(block);
        }
    }

    setupEventListeners() {
        // Color selection
        this.colorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectedColor = e.target.dataset.color;
                this.updateSelectedColorButton();
            });
        });

        // Block placement
        this.gameBoard.addEventListener('click', (e) => {
            if (e.target.classList.contains('block')) {
                this.placeBlock(e.target);
            }
        });

        // Clear board
        this.clearBtn.addEventListener('click', () => this.clearBoard());
    }

    placeBlock(block) {
        block.style.backgroundColor = this.selectedColor;
        this.addBlockEffect(block);
    }

    addBlockEffect(block) {
        block.style.transform = 'scale(0.95)';
        setTimeout(() => {
            block.style.transform = 'scale(1)';
        }, 100);
    }

    clearBoard() {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.style.backgroundColor = 'white';
        });
    }

    updateSelectedColorButton() {
        this.colorBtns.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.color === this.selectedColor) {
                btn.classList.add('selected');
            }
        });
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LegoGame();
}); 