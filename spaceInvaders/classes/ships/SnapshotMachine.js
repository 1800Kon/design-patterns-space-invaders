class SnapshotMachine extends Memento{

    boss = new Boss();

    constructor(boss, state) {
        super();
        this.boss = boss
        this. state = state
    }

    addMemento() {

    }

    getMemento() {
        return new Memento()
    }
}