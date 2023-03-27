export class Category {
    constructor(id: number, name: string, description: string, color: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
    }
    id: number;
    name: string;
    description: string;
    color: string;
}