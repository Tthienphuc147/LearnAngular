import { Currency } from './currency.model';

export class EstimatedBudgetPackage {
    draftBudgetOfPackage: number;
    draftBudgetOfPackageCheckbox: boolean;
    additionalNote: string;
    draftBudgetOfPackageDesc: string;
    draftBudgetOfPackageCurrency: Currency;
}