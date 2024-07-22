import React, { useState, useEffect, ChangeEvent } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Card from '@/components/Home/Card';
import InputCard from '@/components/Home/InputCard';
import transactionData from '@/app/data/TransactionData';
import PieChart from '@/components/PieChart/PieChart';

interface Transaction {
    title: string;
    type: string;
    category: string;
    currency: string;
    dateTime: string;
    amount: string;
}

interface GroupedTransaction {
    date: string;
    transactions: Transaction[];
    totalIncome: number;
    totalExpense: number;
}

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<GroupedTransaction[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('');
    const [currencyFilter, setCurrencyFilter] = useState<string>('');
    const [showInputCard, setShowInputCard] = useState<boolean>(false);
    const [newTransactionData, setNewTransactionData] = useState<Transaction[]>(transactionData);
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;

    useEffect(() => {
        let filteredTransactions = newTransactionData;

        // Apply filters
        if (searchTerm) {
            filteredTransactions = filteredTransactions.filter(transaction =>
                transaction.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (typeFilter) {
            filteredTransactions = filteredTransactions.filter(transaction =>
                transaction.type === typeFilter
            );
        }
        if (categoryFilter) {
            filteredTransactions = filteredTransactions.filter(transaction =>
                transaction.category === categoryFilter
            );
        }
        if (currencyFilter) {
            filteredTransactions = filteredTransactions.filter(transaction =>
                transaction.currency === currencyFilter
            );
        }

        // Filter by month and year
        filteredTransactions = filteredTransactions.filter(transaction => {
            const date = new Date(transaction.dateTime);
            return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
        });

        // Sort filtered transactions
        filteredTransactions.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

        // Group transactions
        const groupedTransactions: { [key: string]: GroupedTransaction } = {};
        filteredTransactions.forEach(transaction => {
            const date = new Date(transaction.dateTime).toLocaleDateString();
            if (!groupedTransactions[date]) {
                groupedTransactions[date] = {
                    date,
                    transactions: [],
                    totalIncome: 0,
                    totalExpense: 0
                };
            }
            groupedTransactions[date].transactions.push(transaction);
            const amount = parseFloat(transaction.amount);
            if (transaction.type === 'Income') {
                groupedTransactions[date].totalIncome += amount;
            } else {
                groupedTransactions[date].totalExpense += amount;
            }
        });

        // Convert groupedTransactions to array
        const result = Object.keys(groupedTransactions).map(date => ({
            date,
            transactions: groupedTransactions[date].transactions,
            totalIncome: groupedTransactions[date].totalIncome,
            totalExpense: groupedTransactions[date].totalExpense
        }));

        setTransactions(result);
    }, [newTransactionData, searchTerm, typeFilter, categoryFilter, currencyFilter, currentMonth, currentYear]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowInputCard(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowInputCard]);

    const addTransaction = (transaction: any) => {
        setNewTransactionData(prevData => [...prevData, {
            ...transaction,
            amount: transaction.amount.toString()
        }]);
        setShowInputCard(false);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLSelectElement>) => {
        setter(e.target.value);
    };

    const changeMonth = (direction: number) => {
        const newDate = new Date(currentYear, currentMonth + direction);
        setCurrentYear(newDate.getFullYear());
        setCurrentMonth(newDate.getMonth());

        // Reset filters
        setCurrentPage(1);
        setSearchTerm('');
        setTypeFilter('');
        setCategoryFilter('');
        setCurrencyFilter('');
    };

    const noTransactions = transactions.length === 0;
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const paginatedTransactions = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='w-[90%] md:w-[80%] px-[5%] m-auto mt-24 bg-white dark:bg-black'>
            <div className='flex'>
                <PieChart transactions={transactionData} />
            </div>

            <div className="flex items-center justify-between mt-8 bg-gray-300 text-black dark:bg-gray-950 shadow-sm dark:text-white my-12">
                <button onClick={() => changeMonth(-1)} className="p-2 bg-gray-300 dark:bg-purple-500 rounded">{<ChevronLeft />}</button>
                <span className='text-2xl font-bold'>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</span>
                <button onClick={() => changeMonth(1)} className="p-2 bg-gray-300 rounded dark:bg-purple-500">{<ChevronRight />}</button>
            </div>

            <div className='flex flex-col items-center md:flex-row w-full h-full gap-4'>
                <input
                    type="search"
                    id="search"
                    className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 ${searchTerm !== "" ? "bg-green-500 dark:bg-green-900 text-white" : ""}`}
                    placeholder="Search by Title"
                    onChange={handleSearchChange}
                />

                <div className="flex gap-4">
                    <select
                        id="type"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${typeFilter !== "" ? "bg-green-500 dark:bg-green-900 text-white" : ""}`}
                        onChange={handleFilterChange(setTypeFilter)}
                    >
                        <option value="Type">Type</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>

                    <select
                        id="category"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${categoryFilter !== "" ? "bg-green-500 dark:bg-green-900 text-white" : ""}`}
                        onChange={handleFilterChange(setCategoryFilter)}
                    >
                        <option value="">Category</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Travel">Travel</option>
                        <option value="Investment">Investment</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Salary">Salary</option>
                        <option value="Freelance">Freelance</option>
                    </select>

                    <select
                        id="currency"
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${currencyFilter !== "" ? "bg-green-500 dark:bg-green-900 text-white" : ""}`}
                        onChange={handleFilterChange(setCurrencyFilter)}
                    >
                        <option value="">Currency</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`p-4 px-6 mx-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 dark:text-white'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>


            <div className='mt-4'>
                {noTransactions ? (
                    <h2 className='text-center text-2xl font-bold text-gray-600 dark:text-gray-300'>
                        No transactions found
                    </h2>
                ) : (
                    <Card transactions={paginatedTransactions} setTransactions={setTransactions} />
                )}
            </div>
            <Plus onClick={() => { setShowInputCard(true) }} className='fixed bottom-8 right-8 text-white bg-pink-600 rounded-full cursor-pointer' strokeWidth='2' size={40} />
            {showInputCard && <InputCard addTransaction={addTransaction} setShowInputCard={setShowInputCard} />}
        </div>
    );
};

export default Transactions;
