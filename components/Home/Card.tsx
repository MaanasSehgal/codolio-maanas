import React, { useState, useEffect, useRef } from "react";
import { Pencil, Trash2 } from "lucide-react";

interface Transaction {
    title: string;
    type: string;
    category: string;
    currency: string;
    dateTime: string;
    amount: string;
}

const categoryColors: { [key: string]: string } = {
    Salary: "bg-green-400",
    Gift: "bg-red-400",
    Education: "bg-blue-400",
    Healthcare: "bg-green-200",
    Shopping: "bg-blue-200",
    Travel: "bg-yellow-200",
    Entertainment: "bg-purple-200",
    Utilities: "bg-red-200",
    Rent: "bg-pink-200",
    Investment: "bg-cyan-200",
    Bonus: "bg-lime-200",
    Food: "bg-amber-200",
    Freelance: "bg-teal-200",
    Transportation: "bg-orange-200"
};

interface GroupedTransaction {
    date: string;
    transactions: Transaction[];
    totalIncome: number;
    totalExpense: number;
}

interface CardProps {
    transactions: GroupedTransaction[];
    setTransactions: React.Dispatch<React.SetStateAction<GroupedTransaction[]>>;
}

const Card: React.FC<CardProps> = ({ transactions, setTransactions }) => {
    const [deleteIndex, setDeleteIndex] = useState<{ groupIndex: number; transactionIndex: number } | null>(null);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [showTransaction, setShowTransaction] = useState<Transaction | null>(null);
    const [editingTransaction, setEditingTransaction] = useState<{ transaction: Transaction; groupIndex: number; transactionIndex: number } | null>(null);

    const popupRef = useRef<HTMLDivElement>(null);  // Ref for popup

    const getFormattedDate = (dateString: string): string => {
        const parts = dateString.split("/");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const date = new Date(year, month, day);

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const dayOfWeek = daysOfWeek[date.getDay()];
        const monthName = monthsOfYear[date.getMonth()];

        return `${dayOfWeek}, ${day} ${monthName} ${year}`;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowConfirm(false);
                setShowTransaction(null);
                setEditingTransaction(null);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setShowConfirm(false);
                setShowTransaction(null);
                setEditingTransaction(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatDate = (dateTime: string | number | Date) => {
        const date = new Date(dateTime);
        return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const handleDeleteClick = (groupIndex: number, transactionIndex: number) => {
        setDeleteIndex({ groupIndex, transactionIndex });
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        if (deleteIndex !== null) {
            const updatedTransactions = transactions.map((group, groupIndex) => {
                if (groupIndex === deleteIndex.groupIndex) {
                    const updatedGroupTransactions = group.transactions.filter(
                        (_, index) => index !== deleteIndex.transactionIndex
                    );

                    if (updatedGroupTransactions.length === 0) {
                        return null;
                    }

                    return { ...group, transactions: updatedGroupTransactions };
                }
                return group;
            }).filter(group => group !== null) as GroupedTransaction[];

            setTransactions(updatedTransactions);
            setShowConfirm(false);
        }
    };

    const saveTransaction = () => {
        if (editingTransaction) {
            const { groupIndex, transactionIndex, transaction } = editingTransaction;
            const updatedTransactions = transactions.map((group, gIndex) => {
                if (gIndex === groupIndex) {
                    const updatedGroupTransactions = group.transactions.map((t, tIndex) => {
                        if (tIndex === transactionIndex) {
                            return transaction;
                        }
                        return t;
                    });
                    return { ...group, transactions: updatedGroupTransactions };
                }
                return group;
            });

            setTransactions(updatedTransactions);
            setEditingTransaction(null);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                {transactions.map((group, groupIndex) => (
                    <div
                        className="bg-white dark:bg-slate-900 rounded-lg px-8 py-8"
                        key={groupIndex}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                                {getFormattedDate(group.date)}
                            </h3>
                            <div className="flex gap-4">
                                <span className="font-bold text-xl text-green-600 dark:text-green-600">
                                    +{group.totalIncome.toFixed(2)}
                                </span>
                                <span className="font-bold text-xl text-red-600 dark:text-pink-600">
                                    -{group.totalExpense.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {group.transactions.map((transaction, transactionIndex) => (
                                <div
                                    key={transactionIndex}
                                    className="cursor-pointer flex justify-between items-center bg-slate-100 dark:bg-slate-950 p-4 py-6 rounded-lg"
                                    onClick={() => setShowTransaction(transaction)}
                                >
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <span className={`font-bold text-sm bg-green-400 ${categoryColors[transaction.category]} text-gray-800  rounded-lg px-2 py-2`}>
                                            {transaction.category}
                                        </span>
                                        <h1 className="font-bold text-lg text-gray-800 dark:text-white">
                                            {transaction.title}
                                        </h1>
                                    </div>
                                    <div className="flex gap-2">
                                        <span
                                            className={`font-bold text-lg ${transaction.type === "Income"
                                                ? "text-green-600"
                                                : "text-pink-500"
                                                }`}
                                        >
                                            {transaction.amount}
                                        </span>
                                        <div className="flex gap-2 pl-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setEditingTransaction({ transaction, groupIndex, transactionIndex });
                                                }}
                                            >
                                                <Pencil className="text-blue-700 dark:text-white" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteClick(groupIndex, transactionIndex);
                                                }}
                                            >
                                                <Trash2 className="text-red-700 dark:text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* show */}
            {showTransaction && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={popupRef} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md mx-auto border border-gray-300 dark:border-gray-700">
                        <h2 className="text-3xl dark:text-white text-gray-900 font-bold mb-6">
                            Transaction Details
                        </h2>
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                                <span className="text-gray-800 dark:text-gray-300 font-semibold">Title:</span>
                                <span className="text-gray-800 dark:text-gray-300">{showTransaction.title}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                                <span className="text-gray-800 dark:text-gray-300 font-semibold">Type:</span>
                                <span className="text-gray-800 dark:text-gray-300">{showTransaction.type}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                                <span className="text-gray-800 dark:text-gray-300 font-semibold">Category:</span>
                                <span className="text-gray-800 dark:text-gray-300">{showTransaction.category}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                                <span className="text-gray-800 dark:text-gray-300 font-semibold">Date:</span>
                                <span className="text-gray-800 dark:text-gray-300">{formatDate(showTransaction.dateTime)}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                                <span className="text-gray-800 dark:text-gray-300 font-semibold">Amount:</span>
                                <span className={`font-bold text-lg ${showTransaction.type === "Income"
                                    ? "text-green-600"
                                    : "text-red-600"
                                    }`}
                                >
                                    {showTransaction.amount}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowTransaction(null)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition duration-300 w-full font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* edit */}
            {editingTransaction && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
                    <div ref={popupRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            Edit Transaction
                        </h2>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="title">Title:</label>
                                <input
                                    id="title"
                                    type="text"
                                    value={editingTransaction.transaction.title}
                                    onChange={(e) => setEditingTransaction({ ...editingTransaction, transaction: { ...editingTransaction.transaction, title: e.target.value } })}
                                    className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="type">Type:</label>
                                <select
                                    id="type"
                                    value={editingTransaction.transaction.type}
                                    onChange={(e) => setEditingTransaction({ ...editingTransaction, transaction: { ...editingTransaction.transaction, type: e.target.value } })}
                                    className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expense</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="category">Category:</label>
                                <input
                                    id="category"
                                    type="text"
                                    value={editingTransaction.transaction.category}
                                    onChange={(e) => setEditingTransaction({ ...editingTransaction, transaction: { ...editingTransaction.transaction, category: e.target.value } })}
                                    className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="date-time">Date:</label>
                                <input
                                    id="date-time"
                                    type="date"
                                    value={formatDate(editingTransaction.transaction.dateTime)}
                                    onChange={(e) => setEditingTransaction({ ...editingTransaction, transaction: { ...editingTransaction.transaction, dateTime: e.target.value } })}
                                    className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="amount">Amount:</label>
                                <input
                                    id="amount"
                                    type="number"
                                    value={editingTransaction.transaction.amount}
                                    onChange={(e) => setEditingTransaction({ ...editingTransaction, transaction: { ...editingTransaction.transaction, amount: e.target.value } })}
                                    className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <button
                                    onClick={() => setEditingTransaction(null)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={saveTransaction}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



            {/* delete */}
            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div ref={popupRef} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition-transform scale-100 hover:scale-105">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            Confirm Delete
                        </h2>
                        <p className="text-gray-800 dark:text-gray-300 mb-6">
                            Are you sure you want to delete this transaction?
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition duration-300 font-semibold w-full"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl transition duration-300 font-semibold w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
