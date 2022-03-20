import State from "./states/State"

class Boss extends ShipDecorator {
    private state: State;

    constructor(position, velocity, hitboxSize, sprite) {
        super(position, velocity, hitboxSize, sprite);
    }

    saveState() {
        if () {

        }
        return new Memento(this.state)
    }

    restoreRandomState() {
        if () {

        }
        this.state = Memento.getSavedState();
    }
}