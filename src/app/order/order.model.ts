class Order{
    constructor(public adress: string, 
        public number: string,
        public optional?: string,
        public payment?: string,
        public orderItens?: OrdemItem [],
    ){}
}

class OrdemItem {
    constructor(public quantidade: number, public menuId: string){}
}

export {Order,OrdemItem}