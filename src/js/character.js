export default class Character {
    constructor(name, type) {
        const HEROES = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if ((typeof (name) === 'string' && typeof (type) === 'string')
            && (name.length >= 2 && name.length <= 10)
            && HEROES.includes(type)) {
            this.name = name;
            this.type = type;
            this.health = 100;
            this.level = 1;
        } else if (name instanceof TypeError) {
            throw new Error(
                `
                name - строка, min - 2 символа, max - 10\n
                `,
            );
        } else if (type instanceof TypeError) {
            throw new Error(
                `
                type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
                `,
            );
        }
    }
}
