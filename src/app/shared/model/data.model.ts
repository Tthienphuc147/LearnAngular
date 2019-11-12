import { ContractCondition } from './contract-condition.model';
import { DirectorProposal } from './director-proposal.model';
import { EstimatedBudgetPackage } from './estimated-budget-package.model';
import { StakeHolder } from 'src/app/shared/model/stack-holder.model';
export class Data {
  directorProposal: DirectorProposal;
  contractCondition: ContractCondition;
  estimatedBuget: EstimatedBudgetPackage;
  stackHolder: StakeHolder;

  constructor() {
    this.estimatedBuget = new EstimatedBudgetPackage();
    this.contractCondition= new ContractCondition();
    this.directorProposal= new DirectorProposal();
    this.stackHolder=new StakeHolder();
  }
}
