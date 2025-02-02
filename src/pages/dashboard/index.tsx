import React from "react";
import { budgets } from "../../mock/budget";
import Header from "./header";
import BudgetCard from "./budget-card";

const Dashboard: React.FC = () => {
  return (
    <div className="flex relative">
      <main className="flex-1 p-6">
        <Header/>
        <div className="space-y-6">
          {budgets.map((budget, index) => (
            <BudgetCard key={index} budget={budget} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
