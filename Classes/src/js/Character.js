export default class Character {
    static agreeTypes = [
        'Boweman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
    ]

    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Недопустима длинна имени, должно быть строка, min - 2 символа, max - 10')
        }
        this.name = name;

        if (!Character.agreeTypes.includes(type)) {
            throw new Error('Тип должен быть один из типов (строка): Boweman, Swordsman, Magician, Daemon, Undead, Zombie')
        }
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
}