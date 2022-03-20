class Boss extends ShipDecorator {

    constructor(position, velocity, hitboxSize, sprite) {
        super(position, velocity, hitboxSize, sprite);
    }

    saveState() {
        if (condition) {

        }
        return new Memento(this.state)
    }

    restoreRandomState() {
        if (condition) {

        }
        this.state = Memento.getSavedState();
    }
}