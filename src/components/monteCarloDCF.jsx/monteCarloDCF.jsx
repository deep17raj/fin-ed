export function MonteCarloDCF({ numSimulations, cashFlows, discountRate, timeHorizon, terminalGrowth, terminalMultiple }) {
    let simulatedValues = [];

    for (let i = 0; i < numSimulations; i++) {
        let simulatedCashFlows = cashFlows.map(cf => 
            cf * (1 + (Math.random() * 0.1 - 0.05))
        );

        let discountedCashFlows = simulatedCashFlows.map((cf, t) => 
            cf / Math.pow(1 + discountRate, t + 1)
        );

        let terminalValue = terminalMultiple 
            ? simulatedCashFlows[simulatedCashFlows.length - 1] * terminalMultiple
            : simulatedCashFlows[simulatedCashFlows.length - 1] * (1 + terminalGrowth) / (discountRate - terminalGrowth);

        let terminalValueDiscounted = terminalValue / Math.pow(1 + discountRate, timeHorizon);
        let totalValue = discountedCashFlows.reduce((sum, val) => sum + val, 0) + terminalValueDiscounted;
        simulatedValues.push(totalValue);
    }

    const meanValue = simulatedValues.reduce((sum, val) => sum + val, 0) / simulatedValues.length;
    simulatedValues.sort((a, b) => a - b);
    const percentile = (p) => simulatedValues[Math.floor((p / 100) * simulatedValues.length)];

    return (
        <div>
            <h2>Monte Carlo DCF Simulation Results</h2>
            <p>Estimated Firm Value (Mean): ${meanValue.toFixed(2)}</p>
            <p>5th Percentile: ${percentile(5).toFixed(2)}</p>
            <p>Median (50th Percentile): ${percentile(50).toFixed(2)}</p>
            <p>95th Percentile: ${percentile(95).toFixed(2)}</p>
        </div>
    );
}

// Example usage
import React from "react";

export default function App() {
    const numSimulations = 10000;
    const timeHorizon = 5;
    const discountRate = 0.10;
    const terminalGrowth = 0.03;
    const cashFlows = [100, 120, 140, 160, 180];
    const terminalMultiple = null;

    return (
        <MonteCarloDCF 
            numSimulations={numSimulations} 
            cashFlows={cashFlows} 
            discountRate={discountRate} 
            timeHorizon={timeHorizon} 
            terminalGrowth={terminalGrowth} 
            terminalMultiple={terminalMultiple} 
        />
    );
}
