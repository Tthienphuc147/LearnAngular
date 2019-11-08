export class StakeHolder {
    id: number;
    groupName: string;
    groupDesc: string;
    customers: CustomerStakeHolder[];
    constructor(id,groupName,groupDesc,customers){
        this.id=id;
        this.groupName=groupName;
        this.groupDesc=groupDesc;
        this.customers=customers;
    }

}

export class CustomerStakeHolder {
    customerId: number;
    customerName: string;
    customerNo: string;
    customerDesc: string;
    contacts: ContactStakeHolder[];
    note?: string;
}

export class ContactStakeHolder {
    id: number;
    name: string;
}
