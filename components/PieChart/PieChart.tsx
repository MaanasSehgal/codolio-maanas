import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Chart from 'react-google-charts';

interface Transaction {
    title: string;
    type: string;
    category: string;
    currency: string;
    dateTime: string;
    amount: string;
}

interface PieChartProps {
    transactions: Transaction[];
}

const PieChart: React.FC<PieChartProps> = ({ transactions }) => {
    const [incomeData, setIncomeData] = useState<any[]>([]);
    const [expenseData, setExpenseData] = useState<any[]>([]);
    const [showChangeNames, setShowChangeNames] = useState(false);

    const keys = ["Healthcare", "Shopping", "Travel", "Investment", "Entertainment", "Utilities", "Transportation", "Salary", "Freelance", "Rent", "Bonus"];

    useEffect(() => {
        const incomesMap = new Map<string, number>(keys.map(key => [key, 0]));
        const expenseMap = new Map<string, number>(keys.map(key => [key, 0]));

        let totalIncome = 0;
        let totalExpense = 0;

        for (const transaction of transactions) {
            const amount = parseFloat(transaction.amount);
            if (transaction.type === "Income") {
                totalIncome += amount;
                incomesMap.set(transaction.category, (incomesMap.get(transaction.category) || 0) + amount);
            } else {
                totalExpense += amount;
                expenseMap.set(transaction.category, (expenseMap.get(transaction.category) || 0) + amount);
            }
        }

        const updatedIncomeData = [["Category", "Amount"], ...keys.map(key => [key, incomesMap.get(key) || 0])];
        const updatedExpenseData = [["Category", "Amount"], ...keys.map(key => [key, expenseMap.get(key) || 0])];

        setIncomeData(updatedIncomeData);
        setExpenseData(updatedExpenseData);
        setShowChangeNames(updatedExpenseData.length > 6);
    }, [transactions]);

    const options = {
        backgroundColor: "transparent",
        legend: {
            textStyle: {
                color: "gray",
                fontSize: 12,
            },
            position: 'right',
            maxLines: 10,
        },
        titleTextStyle: {
            color: "white",
            fontSize: 18,
            fontName: 'Arial',
            bold: true,
        },
        pieSliceTextStyle: {
            color: 'white',
        },
        pieHole: 0.4,
        is3D: true,
        slices: {
            0: { color: '#FF6384' },
            1: { color: '#36A2EB' },
            2: { color: '#FFCE56' },
            3: { color: '#4BC0C0' },
            4: { color: '#9966FF' },
            5: { color: '#FF9F40' },
        },
    };

    const totalIncome = incomeData.slice(1).reduce((acc, [_, val]) => acc + val, 0);
    const totalExpense = expenseData.slice(1).reduce((acc, [_, val]) => acc + val, 0);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full mb-6 space-y-8 md:space-y-0 md:space-x-8">
            <div className="relative w-full max-w-xl bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-4 underline underline-offset-4">Income Distribution</h2>
                    <Chart
                        chartType="PieChart"
                        data={incomeData}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                    <div className="absolute top-4 right-4">
                        <div className="font-bold text-3xl text-green-400 glow-effect">
                            $<CountUp start={0} end={totalIncome} duration={2} decimals={2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full max-w-xl bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-4 underline underline-offset-4">Expense Distribution</h2>
                    <Chart
                        chartType="PieChart"
                        data={expenseData}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                    <div className="absolute top-4 right-4">
                        <div className="font-bold text-3xl text-red-400 glow-effect">
                            $<CountUp start={0} end={totalExpense} duration={2} decimals={2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;