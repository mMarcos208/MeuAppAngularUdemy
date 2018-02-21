class Order{
    constructor(public adress: string, public numero: string,
        public complemento?: string,
        public pagamento?: string,
        public orderItens?: OrdemItem [],
    ){}
}

class OrdemItem {
    constructor(public quantidade: number, public menuId: string){}
}

export {Order,OrdemItem}