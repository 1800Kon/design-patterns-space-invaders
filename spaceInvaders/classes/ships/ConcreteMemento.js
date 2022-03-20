interface Memento{
    static getSavedState():state;
}

class ConcreteMemento implements Memento{
    state: State;

}