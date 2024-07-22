import React, { useState, FormEvent } from 'react';

interface Transaction {
    title: string;
    amount: number;
    category: string;
    currency: string;
    dateTime: string;
    type: string;
    note: string;
}

interface InputCardProps {
    addTransaction: (transaction: Transaction) => void;
    setShowInputCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputCard: React.FC<InputCardProps> = ({ addTransaction, setShowInputCard }) => {
    const [type, setType] = useState<string>('Income');
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [currency, setCurrency] = useState<string>('');
    const [dateTime, setDateTime] = useState<string>('');
    const [note, setNote] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && amount && category && dateTime && currency) {
            addTransaction({ title, amount: parseFloat(amount), category, currency, dateTime, type, note });
            setTitle('');
            setAmount('');
            setCategory('');
            setCurrency('');
            setDateTime('');
            setNote('');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Add Transaction</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex gap-2 mb-4">
                        <div
                            onClick={() => setType('Income')}
                            className={`flex-1 py-2 text-center rounded-lg cursor-pointer transition-colors duration-300 ${type === 'Income' ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600 dark:text-gray-200'}`}
                        >
                            Income
                        </div>
                        <div
                            onClick={() => setType('Expense')}
                            className={`flex-1 py-2 text-center rounded-lg cursor-pointer transition-colors duration-300 ${type === 'Expense' ? 'bg-red-500 text-white' : 'bg-gray-300 dark:bg-gray-600 dark:text-gray-200'}`}
                        >
                            Expense
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="date-time">Date:</label>
                        <input
                            id="date-time"
                            required
                            type="datetime-local"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="amount">Amount:</label>
                        <input
                            id="amount"
                            required
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="currencyInput">Currency:</label>
                        <select
                            id="currencyInput"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <option value="" disabled>Select Currency</option>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="categoryInput">Category:</label>
                        <select
                            id='categoryInput'
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <option value="" disabled>Select Category</option>
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
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="title">Title:</label>
                        <input
                            id="title"
                            required
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700 dark:text-gray-300' htmlFor="notes">Notes:</label>
                        <textarea
                            id="notes"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className='flex justify-end gap-4 mt-4'>
                        <button type="button" onClick={() => setShowInputCard(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputCard;
