import { ContractCondition } from './contract-condition.model';
import { DirectorProposal } from './director-proposal.model';
import { EstimatedBudgetPackage } from './estimated-budget-package.model';
export class Data {
  directorProposal: DirectorProposal;
  contractCondition: ContractCondition;
  estimatedBuget: EstimatedBudgetPackage;

  constructor() {
    this.estimatedBuget = new EstimatedBudgetPackage();
    this.contractCondition= new ContractCondition();
    this.directorProposal= new DirectorProposal();
  }
}
