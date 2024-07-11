class ToggleButton {
    private buttonElement: HTMLElement | null;
    private toggleState: boolean;

    constructor(buttonId: string) {
        this.buttonElement = document.getElementById(buttonId);
        this.toggleState = false;

        if (this.buttonElement) {
            this.buttonElement.addEventListener('click', this.toggle.bind(this));
        } else {
            console.error(`Element with id '${buttonId}' not found.`);
        }
    }

    private toggle() {
        this.toggleState = !this.toggleState;
        this.updateButtonState();
    }

    private updateButtonState() {
        if (this.buttonElement) {
            if (this.toggleState) {
                this.buttonElement.classList.add('active');
            } else {
                this.buttonElement.classList.remove('active');
            }
        }
    }
}

// Kullanım
const myToggleButton = new ToggleButton('toggleButton');
