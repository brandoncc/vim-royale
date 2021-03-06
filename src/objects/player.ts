import {EntityItem} from '../entities';
import PositionComponent from './components/position';
import MovementComponent from './components/movement';
import {LocalContext} from '../context';
import ForcePositionComponent from './components/force-position';
import {MovementCommand} from '../types';

export default class Player {
    public entity: EntityItem;
    public context: LocalContext;
    public position: PositionComponent;
    public movement: MovementComponent;
    public forcePosition: ForcePositionComponent;

    public lastMovement: MovementCommand;

    constructor(x: number, y: number, char: string, context: LocalContext) {
        this.context = context;
        this.entity = context.store.createNewEntity();

        // TODO: HAHAH 100 hard coded Z? What is this css?
        this.position = new PositionComponent(char, x, y, 100);

        // TODO: Should movement be relative or absolute
        this.movement = new MovementComponent(0, 0);

        this.forcePosition = new ForcePositionComponent();

        context.store.attachComponent(this.entity, this.position);
        context.store.attachComponent(this.entity, this.movement);
        context.store.attachComponent(this.entity, this.forcePosition);
    }
}


