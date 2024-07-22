const transactionData = [
    {
        "dateTime": "2024-06-16 06:27:23",
        "amount": "2122.55",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-07 02:52:46",
        "amount": "2654.26",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-17 09:30:41",
        "amount": "1565.53",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-08 14:54:28",
        "amount": "3219.42",
        "type": "Income",
        "category": "Investment",
        "title": "Rental Income",
        "currency": "USD",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2024-03-29 01:16:00",
        "amount": "24.56",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-12 20:52:47",
        "amount": "440.6",
        "type": "Expense",
        "category": "Food",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-07-11 12:02:27",
        "amount": "2424.58",
        "type": "Expense",
        "category": "Education",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-20 05:34:06",
        "amount": "593.15",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-07-17 22:56:43",
        "amount": "1366.7",
        "type": "Expense",
        "category": "Travel",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-01 11:05:28",
        "amount": "136.07",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-01 08:36:26",
        "amount": "4908.38",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-01 21:26:23",
        "amount": "1081.4",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-13 20:14:39",
        "amount": "3491.5",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-15 06:03:50",
        "amount": "1189.41",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-29 16:36:12",
        "amount": "3312.08",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-05 20:07:42",
        "amount": "2343.95",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-01-18 04:27:18",
        "amount": "32.67",
        "type": "Expense",
        "category": "Transportation",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-04 18:07:17",
        "amount": "4045.12",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-25 00:29:58",
        "amount": "4904.23",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-03 17:14:30",
        "amount": "2397.95",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-11-30 04:28:03",
        "amount": "2385.64",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-04 17:42:56",
        "amount": "4250.06",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-31 06:25:06",
        "amount": "43.12",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-13 20:12:08",
        "amount": "914.71",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-01 04:28:40",
        "amount": "3023.65",
        "type": "Income",
        "category": "Bonus",
        "title": "Dividends",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-06-04 18:25:53",
        "amount": "4373.61",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-03 04:19:10",
        "amount": "4341.64",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-07 22:31:48",
        "amount": "3762.05",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-05 00:22:40",
        "amount": "3301.59",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-05 08:22:41",
        "amount": "2938.13",
        "type": "Expense",
        "category": "Shopping",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-30 10:13:07",
        "amount": "194.04",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-22 07:31:55",
        "amount": "2279.45",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-09 17:04:49",
        "amount": "262.16",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-20 01:09:11",
        "amount": "1869.51",
        "type": "Expense",
        "category": "Travel",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-20 11:04:39",
        "amount": "74.8",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-27 15:25:22",
        "amount": "1488.37",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-07-23 17:33:21",
        "amount": "4072.89",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-20 05:10:47",
        "amount": "648.58",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-28 22:58:55",
        "amount": "718.22",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-02 03:45:24",
        "amount": "642.56",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-11 04:56:23",
        "amount": "4047.11",
        "type": "Expense",
        "category": "Food",
        "title": "Gifts",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-21 23:11:00",
        "amount": "733.93",
        "type": "Expense",
        "category": "Shopping",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-07-22 21:19:53",
        "amount": "993.59",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-15 01:14:22",
        "amount": "2812.2",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-03 10:24:02",
        "amount": "2132.41",
        "type": "Income",
        "category": "Salary",
        "title": "Freelance Income",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-05-02 10:55:20",
        "amount": "4337.78",
        "type": "Expense",
        "category": "Transportation",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-06 08:57:44",
        "amount": "1580",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-01 03:00:16",
        "amount": "1075.59",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-18 13:11:23",
        "amount": "2380.12",
        "type": "Expense",
        "category": "Travel",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-30 01:01:14",
        "amount": "549.96",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-27 19:05:50",
        "amount": "4968.97",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-22 18:11:33",
        "amount": "4934.46",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-24 15:55:02",
        "amount": "4108.03",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-06 10:57:46",
        "amount": "920.78",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-16 09:46:09",
        "amount": "594.5",
        "type": "Expense",
        "category": "Shopping",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-30 21:53:19",
        "amount": "4914.28",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-02 23:47:36",
        "amount": "1061.73",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-26 15:33:36",
        "amount": "325.91",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-24 08:54:26",
        "amount": "3178.76",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-09 21:40:41",
        "amount": "2097.39",
        "type": "Income",
        "category": "Investment",
        "title": "Business Income",
        "currency": "INR",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-10-11 20:13:06",
        "amount": "48.14",
        "type": "Income",
        "category": "Freelance",
        "title": "Business Income",
        "currency": "GBP",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-07-07 20:27:07",
        "amount": "1466.99",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-27 12:12:37",
        "amount": "3202.46",
        "type": "Expense",
        "category": "Food",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-12 15:26:49",
        "amount": "3116.93",
        "type": "Expense",
        "category": "Transportation",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-28 18:47:36",
        "amount": "1137.08",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-07-08 21:53:43",
        "amount": "1556.85",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-22 12:38:13",
        "amount": "4871.6",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-07 21:22:11",
        "amount": "3683.47",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-28 22:27:12",
        "amount": "3748.99",
        "type": "Income",
        "category": "Investment",
        "title": "Salary",
        "currency": "GBP",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-08-04 03:40:53",
        "amount": "809.19",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-15 09:53:32",
        "amount": "4900.21",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-25 11:39:37",
        "amount": "4021.62",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-07-29 17:41:45",
        "amount": "1989.89",
        "type": "Expense",
        "category": "Utilities",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-31 19:09:50",
        "amount": "2060.83",
        "type": "Expense",
        "category": "Education",
        "title": "Groceries",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-02 04:12:42",
        "amount": "1583.47",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-24 23:37:11",
        "amount": "3244.93",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-10 14:25:52",
        "amount": "3891.16",
        "type": "Income",
        "category": "Gift",
        "title": "Capital Gains",
        "currency": "JPY",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-09-17 02:45:20",
        "amount": "2839.91",
        "type": "Expense",
        "category": "Transportation",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-07-07 17:49:05",
        "amount": "4661.36",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-31 13:22:04",
        "amount": "1052.86",
        "type": "Expense",
        "category": "Shopping",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-17 01:26:38",
        "amount": "371.61",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-30 02:36:26",
        "amount": "3231.58",
        "type": "Expense",
        "category": "Food",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-31 06:10:41",
        "amount": "1949.02",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-05 17:49:43",
        "amount": "3753.24",
        "type": "Expense",
        "category": "Food",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-31 00:03:35",
        "amount": "2443.28",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-01 05:29:46",
        "amount": "674.35",
        "type": "Expense",
        "category": "Education",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-27 15:19:10",
        "amount": "1309.61",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-07-12 12:44:15",
        "amount": "1523.68",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Gifts",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-01-12 19:09:48",
        "amount": "1567.06",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-11 11:28:09",
        "amount": "3912.08",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-24 17:03:12",
        "amount": "1439.81",
        "type": "Expense",
        "category": "Shopping",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-22 08:57:19",
        "amount": "2448.89",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-02 00:02:49",
        "amount": "710.34",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-20 20:36:56",
        "amount": "3448.36",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-09-16 19:20:29",
        "amount": "4830.76",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-02 00:25:53",
        "amount": "3832.35",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-12 20:18:31",
        "amount": "3829.06",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-16 07:41:08",
        "amount": "3761.07",
        "type": "Income",
        "category": "Gift",
        "title": "Bonuses",
        "currency": "JPY",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-02-25 20:01:37",
        "amount": "3105.5",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-19 23:48:04",
        "amount": "635.11",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-06 10:51:37",
        "amount": "4726.32",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-23 15:24:02",
        "amount": "3583.69",
        "type": "Expense",
        "category": "Utilities",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-15 20:19:15",
        "amount": "3774.65",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-03 03:57:34",
        "amount": "4363.69",
        "type": "Expense",
        "category": "Rent",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-01-01 23:10:34",
        "amount": "3594.38",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-05 07:23:40",
        "amount": "4488.01",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-20 22:14:22",
        "amount": "3690.85",
        "type": "Expense",
        "category": "Food",
        "title": "Gifts",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-10 17:33:25",
        "amount": "3207.79",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-30 14:23:57",
        "amount": "2167.9",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-15 20:21:32",
        "amount": "713.6",
        "type": "Expense",
        "category": "Shopping",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-10 02:31:35",
        "amount": "3666.73",
        "type": "Income",
        "category": "Gift",
        "title": "Rental Income",
        "currency": "EUR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-01-11 18:58:04",
        "amount": "3444.88",
        "type": "Expense",
        "category": "Travel",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-10-31 15:30:09",
        "amount": "3593.35",
        "type": "Expense",
        "category": "Travel",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-16 04:28:34",
        "amount": "3634.22",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-16 04:18:54",
        "amount": "4049.62",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-06 16:31:15",
        "amount": "3555.23",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-17 22:59:03",
        "amount": "1547.97",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-13 04:15:42",
        "amount": "4422.84",
        "type": "Expense",
        "category": "Food",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-17 17:49:18",
        "amount": "680.56",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-04 22:12:09",
        "amount": "4329.41",
        "type": "Expense",
        "category": "Shopping",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-01 02:04:16",
        "amount": "3927.4",
        "type": "Expense",
        "category": "Rent",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-20 04:04:42",
        "amount": "4492.72",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-19 18:48:35",
        "amount": "527.69",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-08 06:09:57",
        "amount": "779.49",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-19 13:03:34",
        "amount": "3760.42",
        "type": "Income",
        "category": "Freelance",
        "title": "Business Income",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-06-02 03:59:21",
        "amount": "17.52",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-08 08:57:03",
        "amount": "1378.03",
        "type": "Expense",
        "category": "Rent",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-31 14:29:26",
        "amount": "3098.74",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-04-22 17:23:51",
        "amount": "2613",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-05 00:37:52",
        "amount": "457.79",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-22 20:00:18",
        "amount": "2094.11",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-21 11:26:02",
        "amount": "2131.24",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-15 20:44:04",
        "amount": "1871.3",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-17 19:12:28",
        "amount": "2700.01",
        "type": "Expense",
        "category": "Transportation",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-28 05:34:29",
        "amount": "717.51",
        "type": "Expense",
        "category": "Rent",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-01-29 06:40:49",
        "amount": "3403.01",
        "type": "Expense",
        "category": "Transportation",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-11 05:00:25",
        "amount": "4471.56",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-07 02:24:52",
        "amount": "897.67",
        "type": "Income",
        "category": "Salary",
        "title": "Freelance Income",
        "currency": "GBP",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-01-22 16:59:02",
        "amount": "1509.19",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-24 14:01:41",
        "amount": "1493.54",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-05 12:01:26",
        "amount": "3406.9",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-22 02:47:18",
        "amount": "3446.77",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-15 03:37:56",
        "amount": "1162.2",
        "type": "Expense",
        "category": "Education",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-19 22:30:10",
        "amount": "1102.96",
        "type": "Expense",
        "category": "Education",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-09-29 23:12:16",
        "amount": "2848.41",
        "type": "Expense",
        "category": "Travel",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-07-21 18:08:08",
        "amount": "562.14",
        "type": "Income",
        "category": "Bonus",
        "title": "Interest Income",
        "currency": "USD",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-09-23 00:13:06",
        "amount": "2327.89",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-20 11:23:45",
        "amount": "3780.67",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-09 15:20:46",
        "amount": "960.68",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-12 15:47:26",
        "amount": "1380.79",
        "type": "Expense",
        "category": "Shopping",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-19 11:12:01",
        "amount": "1189.84",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-04 02:50:30",
        "amount": "1175.24",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-26 16:45:10",
        "amount": "26.01",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-11 17:56:05",
        "amount": "1551.55",
        "type": "Expense",
        "category": "Travel",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-02 15:25:11",
        "amount": "4288.94",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-11 23:27:22",
        "amount": "2061.77",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-26 10:47:23",
        "amount": "2182.06",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-18 19:45:07",
        "amount": "4929.53",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-01 11:13:41",
        "amount": "823.27",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-05 11:29:47",
        "amount": "1929.51",
        "type": "Income",
        "category": "Gift",
        "title": "Salary",
        "currency": "EUR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-01-02 06:56:34",
        "amount": "4311.77",
        "type": "Expense",
        "category": "Shopping",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-29 08:48:41",
        "amount": "264.35",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-15 15:05:34",
        "amount": "2108.49",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-03 08:33:55",
        "amount": "4949.29",
        "type": "Expense",
        "category": "Transportation",
        "title": "Fitness",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-14 22:14:05",
        "amount": "1371.89",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-01 03:54:17",
        "amount": "3188.42",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-04 00:03:20",
        "amount": "2288.17",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-01 22:28:41",
        "amount": "4701.58",
        "type": "Expense",
        "category": "Education",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-16 19:51:43",
        "amount": "2421.55",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-18 12:45:51",
        "amount": "1468.62",
        "type": "Income",
        "category": "Gift",
        "title": "Business Income",
        "currency": "INR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-07-15 14:03:07",
        "amount": "3845.98",
        "type": "Expense",
        "category": "Transportation",
        "title": "Household Supplies",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-10 23:57:36",
        "amount": "1864.95",
        "type": "Expense",
        "category": "Education",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-02 08:23:43",
        "amount": "4820.4",
        "type": "Income",
        "category": "Gift",
        "title": "Interest Income",
        "currency": "INR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-01-08 16:39:31",
        "amount": "2354.46",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-29 11:25:49",
        "amount": "4458.56",
        "type": "Income",
        "category": "Bonus",
        "title": "Business Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-09-09 11:29:06",
        "amount": "370.41",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-07-11 21:42:42",
        "amount": "3585.12",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-01-20 12:46:14",
        "amount": "2218.15",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-03 15:08:56",
        "amount": "4459.8",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-19 19:41:34",
        "amount": "2337.11",
        "type": "Income",
        "category": "Freelance",
        "title": "Business Income",
        "currency": "GBP",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-04-30 09:07:56",
        "amount": "911.06",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-30 04:20:28",
        "amount": "361.58",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-22 23:56:43",
        "amount": "1724.98",
        "type": "Expense",
        "category": "Shopping",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-17 10:35:02",
        "amount": "2750.94",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-10 09:12:45",
        "amount": "1201.88",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-23 01:42:41",
        "amount": "65.95",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-20 08:05:57",
        "amount": "2068.77",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-12 22:23:13",
        "amount": "2458.72",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-22 19:07:39",
        "amount": "2150.89",
        "type": "Expense",
        "category": "Travel",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-12 03:15:52",
        "amount": "2624.99",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-30 10:15:21",
        "amount": "1680.64",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-04-11 17:39:54",
        "amount": "3817.21",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-07 19:48:22",
        "amount": "4621.57",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-19 03:01:59",
        "amount": "2461.59",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-12 02:38:34",
        "amount": "2319.6",
        "type": "Expense",
        "category": "Transportation",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-16 08:27:28",
        "amount": "2510.43",
        "type": "Expense",
        "category": "Utilities",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-10 18:10:32",
        "amount": "184.92",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-11 06:52:15",
        "amount": "2724.65",
        "type": "Expense",
        "category": "Travel",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-21 18:00:28",
        "amount": "113.94",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-07 00:41:27",
        "amount": "1195.96",
        "type": "Income",
        "category": "Freelance",
        "title": "Pension",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-07-05 15:57:21",
        "amount": "1609",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-25 02:20:57",
        "amount": "1505.81",
        "type": "Expense",
        "category": "Transportation",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-12 22:26:53",
        "amount": "821.53",
        "type": "Income",
        "category": "Investment",
        "title": "Pension",
        "currency": "GBP",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-12-29 16:28:35",
        "amount": "4931.58",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-18 07:41:07",
        "amount": "1034.16",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-30 21:12:28",
        "amount": "3252.01",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-03 13:19:26",
        "amount": "1716.37",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-01 17:17:36",
        "amount": "3403.53",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-14 07:20:41",
        "amount": "1590.99",
        "type": "Expense",
        "category": "Travel",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-23 05:11:22",
        "amount": "3357.06",
        "type": "Expense",
        "category": "Rent",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-08 10:51:05",
        "amount": "3137.97",
        "type": "Expense",
        "category": "Rent",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-18 00:01:27",
        "amount": "92.82",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-12 07:02:17",
        "amount": "3521.83",
        "type": "Expense",
        "category": "Utilities",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-07 06:02:10",
        "amount": "3929.57",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-17 10:55:04",
        "amount": "2644.83",
        "type": "Expense",
        "category": "Utilities",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-20 23:29:26",
        "amount": "1646.66",
        "type": "Expense",
        "category": "Education",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-28 17:58:53",
        "amount": "3580.18",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-16 08:37:41",
        "amount": "4740.57",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-09 06:57:09",
        "amount": "4661.96",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-27 20:36:58",
        "amount": "1521.85",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-06 16:28:27",
        "amount": "3216.56",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-16 17:56:48",
        "amount": "4063.89",
        "type": "Expense",
        "category": "Food",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-08 04:07:01",
        "amount": "3007.83",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-24 19:05:39",
        "amount": "3525.3",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-14 15:24:15",
        "amount": "3335.72",
        "type": "Expense",
        "category": "Transportation",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-09-17 03:31:05",
        "amount": "1113.01",
        "type": "Expense",
        "category": "Transportation",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-09-04 17:19:23",
        "amount": "4351.48",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-29 14:15:00",
        "amount": "4206.98",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-12 10:23:16",
        "amount": "525.59",
        "type": "Expense",
        "category": "Education",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-09 03:55:30",
        "amount": "1567.8",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-20 01:07:31",
        "amount": "3809.99",
        "type": "Expense",
        "category": "Education",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-23 21:36:46",
        "amount": "4020.44",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-03 17:27:48",
        "amount": "803.85",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-11-04 23:16:21",
        "amount": "4644.49",
        "type": "Expense",
        "category": "Travel",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-16 19:45:41",
        "amount": "4259.91",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-20 13:06:17",
        "amount": "1373.38",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-01-20 04:11:33",
        "amount": "159.19",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-29 08:38:01",
        "amount": "2802.69",
        "type": "Income",
        "category": "Freelance",
        "title": "Salary",
        "currency": "USD",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2023-11-27 19:43:07",
        "amount": "1789.71",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-19 13:42:45",
        "amount": "2106.74",
        "type": "Expense",
        "category": "Travel",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-10-06 02:22:32",
        "amount": "4152.57",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-27 03:00:34",
        "amount": "2745.76",
        "type": "Expense",
        "category": "Education",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-05 20:28:59",
        "amount": "3614.15",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-07 21:34:13",
        "amount": "4431.9",
        "type": "Expense",
        "category": "Transportation",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-12 13:36:54",
        "amount": "2309.52",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-23 04:29:27",
        "amount": "4626.41",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-09-03 01:04:28",
        "amount": "3362.52",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-07-29 00:47:19",
        "amount": "158.23",
        "type": "Expense",
        "category": "Education",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-26 12:14:35",
        "amount": "1854.51",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-03 18:40:40",
        "amount": "169.56",
        "type": "Expense",
        "category": "Shopping",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-10 11:17:09",
        "amount": "1528.42",
        "type": "Expense",
        "category": "Travel",
        "title": "Rent",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-13 20:46:17",
        "amount": "605.23",
        "type": "Expense",
        "category": "Utilities",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-10 05:00:41",
        "amount": "4954.27",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-22 01:07:30",
        "amount": "736.33",
        "type": "Expense",
        "category": "Transportation",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-17 21:35:21",
        "amount": "2533.47",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-21 17:06:25",
        "amount": "2459.73",
        "type": "Income",
        "category": "Gift",
        "title": "Bonuses",
        "currency": "USD",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-11-15 01:23:39",
        "amount": "2904.9",
        "type": "Income",
        "category": "Investment",
        "title": "Dividends",
        "currency": "INR",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-10-10 19:44:09",
        "amount": "4293.14",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-12 15:12:46",
        "amount": "4510.11",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-28 07:41:27",
        "amount": "1576.14",
        "type": "Expense",
        "category": "Shopping",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-16 21:28:11",
        "amount": "85.6",
        "type": "Expense",
        "category": "Food",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-16 19:43:21",
        "amount": "320.77",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-28 14:43:25",
        "amount": "3803.24",
        "type": "Expense",
        "category": "Education",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-09-22 13:35:15",
        "amount": "3585.93",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-22 21:15:43",
        "amount": "4446.38",
        "type": "Expense",
        "category": "Transportation",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-19 05:25:48",
        "amount": "3921.69",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-01 12:49:24",
        "amount": "163.01",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-29 08:09:13",
        "amount": "3788.41",
        "type": "Income",
        "category": "Gift",
        "title": "Bonuses",
        "currency": "JPY",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-07-20 03:59:40",
        "amount": "4612.89",
        "type": "Expense",
        "category": "Transportation",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-12-30 21:38:41",
        "amount": "557.68",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-23 10:20:13",
        "amount": "4517.19",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-09 14:08:17",
        "amount": "295.12",
        "type": "Expense",
        "category": "Utilities",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-26 11:07:39",
        "amount": "1124.51",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-17 16:44:01",
        "amount": "1245.75",
        "type": "Expense",
        "category": "Transportation",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-07 01:41:41",
        "amount": "1153.72",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-22 05:21:50",
        "amount": "4764.44",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-26 00:01:35",
        "amount": "2758.23",
        "type": "Expense",
        "category": "Rent",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-06 13:05:01",
        "amount": "1370.33",
        "type": "Expense",
        "category": "Shopping",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-25 14:10:13",
        "amount": "1922.72",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-15 13:44:42",
        "amount": "3011.33",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-10 14:28:51",
        "amount": "1408.43",
        "type": "Income",
        "category": "Salary",
        "title": "Pension",
        "currency": "EUR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-07-06 04:25:39",
        "amount": "3257.56",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-05 14:15:26",
        "amount": "2182.11",
        "type": "Expense",
        "category": "Utilities",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-01 06:44:26",
        "amount": "3933.08",
        "type": "Expense",
        "category": "Rent",
        "title": "Debt Payments",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-30 23:00:33",
        "amount": "610.27",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-07 16:48:03",
        "amount": "4320.56",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-30 14:06:02",
        "amount": "4827.38",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-25 19:46:42",
        "amount": "2304.59",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-14 23:09:54",
        "amount": "1165.96",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-04 14:42:33",
        "amount": "540.29",
        "type": "Expense",
        "category": "Transportation",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-02 10:47:22",
        "amount": "4281.91",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-06 17:48:55",
        "amount": "222.25",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-10 01:52:42",
        "amount": "1772.51",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-27 04:37:06",
        "amount": "839.04",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-07 23:12:27",
        "amount": "4184.06",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-26 12:06:38",
        "amount": "3553.78",
        "type": "Expense",
        "category": "Travel",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-19 17:02:28",
        "amount": "982.08",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-23 00:38:49",
        "amount": "1525.5",
        "type": "Expense",
        "category": "Rent",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-29 19:04:12",
        "amount": "322.12",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-10 10:51:14",
        "amount": "4693.92",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-11 21:30:53",
        "amount": "1791",
        "type": "Expense",
        "category": "Utilities",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-23 04:22:01",
        "amount": "122.14",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-18 03:55:38",
        "amount": "4435.04",
        "type": "Expense",
        "category": "Rent",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-10 04:02:03",
        "amount": "4751.13",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-02 14:41:37",
        "amount": "4137.33",
        "type": "Income",
        "category": "Salary",
        "title": "Pension",
        "currency": "GBP",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-03-07 04:22:51",
        "amount": "4720.35",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-28 03:40:28",
        "amount": "3005.24",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-07 10:40:26",
        "amount": "3516.68",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-30 04:14:22",
        "amount": "1624.74",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-06-06 14:05:39",
        "amount": "1239.35",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-13 04:22:03",
        "amount": "2017.08",
        "type": "Expense",
        "category": "Food",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-19 06:21:33",
        "amount": "2585.56",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-05 18:22:53",
        "amount": "3132.62",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-13 22:16:10",
        "amount": "898.15",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-31 23:21:50",
        "amount": "2681.38",
        "type": "Expense",
        "category": "Utilities",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-02-21 06:01:45",
        "amount": "3633.35",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-17 01:34:16",
        "amount": "3875.13",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-14 23:14:53",
        "amount": "2359.5",
        "type": "Expense",
        "category": "Travel",
        "title": "Education",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-25 09:51:51",
        "amount": "1942.17",
        "type": "Income",
        "category": "Salary",
        "title": "Business Income",
        "currency": "INR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-10-31 00:01:37",
        "amount": "3895.76",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-07-20 14:47:37",
        "amount": "3726.9",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-06 11:25:51",
        "amount": "3174.34",
        "type": "Income",
        "category": "Freelance",
        "title": "Freelance Income",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-01-02 16:29:47",
        "amount": "1326.19",
        "type": "Income",
        "category": "Bonus",
        "title": "Interest Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-05-22 07:36:28",
        "amount": "3567.68",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-25 06:51:05",
        "amount": "2807.61",
        "type": "Income",
        "category": "Bonus",
        "title": "Rental Income",
        "currency": "USD",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-08-30 13:23:51",
        "amount": "673.44",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-10 06:49:17",
        "amount": "3766.96",
        "type": "Expense",
        "category": "Education",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-19 16:38:53",
        "amount": "2373.79",
        "type": "Expense",
        "category": "Food",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-09 08:24:05",
        "amount": "3742.99",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-09 06:12:24",
        "amount": "4193.69",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-29 05:27:19",
        "amount": "2785.57",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-07 05:58:47",
        "amount": "3748.18",
        "type": "Expense",
        "category": "Rent",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-13 17:33:43",
        "amount": "1278.87",
        "type": "Expense",
        "category": "Rent",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-23 11:51:25",
        "amount": "969.52",
        "type": "Expense",
        "category": "Food",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-29 13:02:06",
        "amount": "3065.23",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-01 10:31:15",
        "amount": "4037.16",
        "type": "Expense",
        "category": "Education",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-13 08:16:33",
        "amount": "3409.16",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-06 09:49:40",
        "amount": "2011.07",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-21 15:52:59",
        "amount": "4126.33",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-11 14:41:24",
        "amount": "2217.22",
        "type": "Expense",
        "category": "Travel",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-22 14:13:19",
        "amount": "4640.95",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-29 20:32:00",
        "amount": "2361.26",
        "type": "Expense",
        "category": "Utilities",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-06 16:08:05",
        "amount": "2839.24",
        "type": "Expense",
        "category": "Food",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-14 05:34:43",
        "amount": "299.4",
        "type": "Expense",
        "category": "Utilities",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-24 08:40:22",
        "amount": "4572.92",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-28 21:58:06",
        "amount": "1723.61",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-10 10:15:02",
        "amount": "1875.11",
        "type": "Expense",
        "category": "Shopping",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-01 14:29:36",
        "amount": "3352.17",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-29 13:33:36",
        "amount": "4423.29",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-28 02:56:49",
        "amount": "3217.59",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-21 16:43:20",
        "amount": "3653.43",
        "type": "Income",
        "category": "Bonus",
        "title": "Rental Income",
        "currency": "USD",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-04-10 00:08:15",
        "amount": "2677.59",
        "type": "Expense",
        "category": "Travel",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-05 11:59:02",
        "amount": "2941.59",
        "type": "Income",
        "category": "Gift",
        "title": "Pension",
        "currency": "USD",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-10-04 14:37:01",
        "amount": "4684.53",
        "type": "Income",
        "category": "Freelance",
        "title": "Capital Gains",
        "currency": "USD",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2023-10-26 13:26:57",
        "amount": "1622.18",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-09-16 20:16:15",
        "amount": "4223.87",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-01 08:10:08",
        "amount": "1177.69",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-22 05:48:53",
        "amount": "722.68",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-15 18:56:34",
        "amount": "3940.55",
        "type": "Expense",
        "category": "Utilities",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-14 18:24:25",
        "amount": "3302.34",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-01 16:53:48",
        "amount": "769.54",
        "type": "Expense",
        "category": "Education",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-11 00:17:08",
        "amount": "1156.03",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-07-25 13:21:59",
        "amount": "75.63",
        "type": "Expense",
        "category": "Rent",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-07 05:44:10",
        "amount": "3262.77",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-27 18:52:11",
        "amount": "2003.17",
        "type": "Expense",
        "category": "Transportation",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-07-13 10:38:58",
        "amount": "1596.08",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-25 14:52:55",
        "amount": "3853.9",
        "type": "Expense",
        "category": "Food",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-13 00:29:54",
        "amount": "3564.06",
        "type": "Expense",
        "category": "Education",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-11-16 15:50:40",
        "amount": "1071.71",
        "type": "Expense",
        "category": "Transportation",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-25 09:20:48",
        "amount": "1126.68",
        "type": "Expense",
        "category": "Transportation",
        "title": "Fitness",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-11 16:24:27",
        "amount": "627.78",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-26 11:50:44",
        "amount": "1597.5",
        "type": "Expense",
        "category": "Food",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-26 18:16:34",
        "amount": "4322.18",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-29 14:14:02",
        "amount": "628.73",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-19 21:33:56",
        "amount": "2459.47",
        "type": "Expense",
        "category": "Travel",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-29 03:51:43",
        "amount": "4222.92",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-03 01:17:47",
        "amount": "1405.66",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-16 17:33:43",
        "amount": "2049.72",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-16 00:21:46",
        "amount": "2309.28",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-06 01:41:00",
        "amount": "3252.32",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-12 05:15:19",
        "amount": "568.32",
        "type": "Income",
        "category": "Freelance",
        "title": "Pension",
        "currency": "JPY",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2023-12-25 01:13:53",
        "amount": "4062.03",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-24 21:57:38",
        "amount": "4909.42",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-27 12:22:28",
        "amount": "4658.4",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-16 17:13:16",
        "amount": "1055.71",
        "type": "Expense",
        "category": "Transportation",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-09-15 00:07:49",
        "amount": "4063.24",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-26 01:51:59",
        "amount": "278.85",
        "type": "Expense",
        "category": "Education",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-29 22:46:22",
        "amount": "932.3",
        "type": "Income",
        "category": "Investment",
        "title": "Freelance Income",
        "currency": "USD",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-10-13 11:33:43",
        "amount": "2574.9",
        "type": "Income",
        "category": "Freelance",
        "title": "Interest Income",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-03-30 04:34:03",
        "amount": "3983.32",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-28 15:08:21",
        "amount": "4984.71",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-04 03:06:37",
        "amount": "1055.22",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-12-04 14:32:37",
        "amount": "2427.75",
        "type": "Expense",
        "category": "Transportation",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-06 04:28:41",
        "amount": "4860.46",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-11 15:30:53",
        "amount": "4441.35",
        "type": "Income",
        "category": "Investment",
        "title": "Pension",
        "currency": "USD",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2024-07-06 00:52:39",
        "amount": "4033.08",
        "type": "Expense",
        "category": "Transportation",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-02 22:45:27",
        "amount": "2522.52",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-23 08:48:42",
        "amount": "3084.68",
        "type": "Expense",
        "category": "Utilities",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-15 19:42:50",
        "amount": "4306.39",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-14 00:04:32",
        "amount": "4521.22",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-22 23:02:38",
        "amount": "306.64",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-22 20:52:54",
        "amount": "1095.89",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-09 00:04:24",
        "amount": "4833.2",
        "type": "Expense",
        "category": "Travel",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-20 08:13:18",
        "amount": "3275.38",
        "type": "Expense",
        "category": "Education",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-13 18:34:06",
        "amount": "896.79",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-27 12:10:51",
        "amount": "1806.9",
        "type": "Income",
        "category": "Bonus",
        "title": "Business Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-12-30 16:46:57",
        "amount": "1316.08",
        "type": "Expense",
        "category": "Transportation",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-27 23:06:44",
        "amount": "1405.59",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-17 21:21:01",
        "amount": "1324.8",
        "type": "Income",
        "category": "Gift",
        "title": "Social Security",
        "currency": "GBP",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-10-02 09:41:12",
        "amount": "292.59",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-01 02:11:04",
        "amount": "4484.45",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-13 00:04:06",
        "amount": "574.16",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-19 18:01:14",
        "amount": "3551.41",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-04 05:25:33",
        "amount": "3998.56",
        "type": "Expense",
        "category": "Transportation",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-07-30 06:14:37",
        "amount": "3480.61",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-08 04:32:14",
        "amount": "2834.06",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-07 11:48:23",
        "amount": "2822.5",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-05-13 14:20:36",
        "amount": "3174.78",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-19 23:35:50",
        "amount": "4155.17",
        "type": "Expense",
        "category": "Utilities",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-11 14:12:53",
        "amount": "4958.12",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-13 13:50:37",
        "amount": "4497.9",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-02 22:22:40",
        "amount": "97.12",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-25 23:23:43",
        "amount": "3550.93",
        "type": "Expense",
        "category": "Utilities",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-27 08:04:28",
        "amount": "710.75",
        "type": "Expense",
        "category": "Shopping",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-11-03 00:17:03",
        "amount": "2141.31",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-04 07:04:52",
        "amount": "1192.86",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-22 13:35:45",
        "amount": "2198.44",
        "type": "Expense",
        "category": "Education",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-10-29 06:59:03",
        "amount": "1472.38",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-27 04:57:16",
        "amount": "4359.29",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-26 11:40:09",
        "amount": "774.55",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-10 19:49:00",
        "amount": "4261.78",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-18 02:36:23",
        "amount": "1135.76",
        "type": "Income",
        "category": "Salary",
        "title": "Rental Income",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-05-25 08:05:40",
        "amount": "4494.73",
        "type": "Expense",
        "category": "Education",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-30 02:11:36",
        "amount": "1971.14",
        "type": "Expense",
        "category": "Utilities",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-29 02:07:50",
        "amount": "3468.52",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-11 16:59:04",
        "amount": "816.63",
        "type": "Expense",
        "category": "Shopping",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-05 13:28:21",
        "amount": "2613.18",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-11 07:24:59",
        "amount": "2662.02",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-22 18:02:31",
        "amount": "1368.18",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-20 23:45:28",
        "amount": "2307.85",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-06-30 17:34:51",
        "amount": "3277.78",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-23 08:58:41",
        "amount": "675.87",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-02 21:48:39",
        "amount": "4868.97",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-01 00:25:40",
        "amount": "4275.63",
        "type": "Expense",
        "category": "Education",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-16 19:46:28",
        "amount": "4787.98",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-30 23:05:25",
        "amount": "4590.91",
        "type": "Expense",
        "category": "Rent",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-14 03:52:02",
        "amount": "2101.45",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-23 13:02:34",
        "amount": "4823.03",
        "type": "Income",
        "category": "Salary",
        "title": "Capital Gains",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-12-22 21:23:22",
        "amount": "987.25",
        "type": "Expense",
        "category": "Shopping",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-08 15:24:41",
        "amount": "3209.55",
        "type": "Expense",
        "category": "Shopping",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-29 05:09:47",
        "amount": "1184.34",
        "type": "Expense",
        "category": "Education",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-19 03:03:56",
        "amount": "414.85",
        "type": "Expense",
        "category": "Education",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-13 16:50:53",
        "amount": "186.3",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-10 05:39:23",
        "amount": "4943.76",
        "type": "Expense",
        "category": "Shopping",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-08 20:11:08",
        "amount": "3947.6",
        "type": "Income",
        "category": "Investment",
        "title": "Social Security",
        "currency": "GBP",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-07-29 08:21:14",
        "amount": "1625.92",
        "type": "Expense",
        "category": "Shopping",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-20 19:25:13",
        "amount": "2779.69",
        "type": "Expense",
        "category": "Education",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-05 06:39:32",
        "amount": "4003.13",
        "type": "Expense",
        "category": "Utilities",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-30 10:39:52",
        "amount": "4983.39",
        "type": "Expense",
        "category": "Rent",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-06 21:25:17",
        "amount": "4699.54",
        "type": "Income",
        "category": "Salary",
        "title": "Freelance Income",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-11-10 03:20:54",
        "amount": "2992.03",
        "type": "Expense",
        "category": "Utilities",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-24 04:10:13",
        "amount": "2623.06",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-02 19:39:49",
        "amount": "1734.67",
        "type": "Expense",
        "category": "Food",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-22 05:00:09",
        "amount": "2132.44",
        "type": "Expense",
        "category": "Transportation",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-05 03:56:24",
        "amount": "4946.53",
        "type": "Income",
        "category": "Salary",
        "title": "Salary",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-06-23 10:08:31",
        "amount": "413.15",
        "type": "Expense",
        "category": "Transportation",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-12-15 02:46:47",
        "amount": "3521.8",
        "type": "Expense",
        "category": "Education",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-08 00:48:58",
        "amount": "3753.28",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-08 06:40:18",
        "amount": "2513.55",
        "type": "Expense",
        "category": "Food",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-01 05:31:35",
        "amount": "4794.28",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-17 10:59:48",
        "amount": "741.09",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-17 13:49:21",
        "amount": "518.14",
        "type": "Expense",
        "category": "Travel",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-15 23:15:00",
        "amount": "4006.12",
        "type": "Income",
        "category": "Freelance",
        "title": "Freelance Income",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-05-21 01:26:45",
        "amount": "2475.74",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-12 19:28:20",
        "amount": "4312.79",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-11 15:24:07",
        "amount": "275.66",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-01 04:39:24",
        "amount": "4448.65",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-18 01:24:09",
        "amount": "1346.99",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-26 13:17:19",
        "amount": "2279.25",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-02 19:39:49",
        "amount": "2965.99",
        "type": "Expense",
        "category": "Utilities",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-31 00:47:50",
        "amount": "1634.86",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-09 03:20:01",
        "amount": "3598.91",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-28 14:38:22",
        "amount": "1998.66",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-07 15:42:10",
        "amount": "311.1",
        "type": "Expense",
        "category": "Utilities",
        "title": "Healthcare",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-08 14:15:25",
        "amount": "1128.93",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-06-02 13:39:00",
        "amount": "2181.18",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-30 12:16:47",
        "amount": "1876.06",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-22 09:10:37",
        "amount": "804.44",
        "type": "Expense",
        "category": "Utilities",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-25 03:10:29",
        "amount": "2958.21",
        "type": "Expense",
        "category": "Shopping",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-22 19:52:23",
        "amount": "2408.26",
        "type": "Income",
        "category": "Investment",
        "title": "Bonuses",
        "currency": "INR",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2024-03-27 09:40:12",
        "amount": "3980.83",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-12 21:09:48",
        "amount": "3300.51",
        "type": "Expense",
        "category": "Shopping",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-07-17 05:18:59",
        "amount": "132.94",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-11 04:12:29",
        "amount": "687.9",
        "type": "Expense",
        "category": "Education",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-30 03:58:03",
        "amount": "1410.79",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-23 06:06:12",
        "amount": "2938.81",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-29 06:14:44",
        "amount": "1926.96",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-24 22:36:08",
        "amount": "4839.15",
        "type": "Expense",
        "category": "Utilities",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-16 23:45:26",
        "amount": "1271.74",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-31 07:44:58",
        "amount": "4408.22",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-11 11:54:50",
        "amount": "2052.76",
        "type": "Expense",
        "category": "Utilities",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-02 21:24:31",
        "amount": "547.41",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-22 13:13:46",
        "amount": "1158.82",
        "type": "Expense",
        "category": "Food",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-15 17:10:03",
        "amount": "2580.26",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-07 01:40:27",
        "amount": "1971.49",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-03 00:57:52",
        "amount": "4732.23",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-22 14:57:47",
        "amount": "3905",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-09 19:14:22",
        "amount": "4912.4",
        "type": "Expense",
        "category": "Education",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-10-12 16:04:49",
        "amount": "3034.45",
        "type": "Expense",
        "category": "Utilities",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-12 16:24:32",
        "amount": "3466.22",
        "type": "Expense",
        "category": "Education",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-10-15 04:05:25",
        "amount": "3875.79",
        "type": "Expense",
        "category": "Travel",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-12 01:06:35",
        "amount": "4123.92",
        "type": "Expense",
        "category": "Utilities",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-02-13 23:01:40",
        "amount": "1103.79",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-24 21:49:21",
        "amount": "3137.77",
        "type": "Expense",
        "category": "Utilities",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-04 22:08:02",
        "amount": "851.95",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-25 01:13:23",
        "amount": "1706.24",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-01 06:26:30",
        "amount": "1712.26",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Groceries",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-27 01:32:40",
        "amount": "4042.66",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-12 20:21:16",
        "amount": "2117.69",
        "type": "Expense",
        "category": "Food",
        "title": "Personal Care",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-25 08:44:44",
        "amount": "3143.96",
        "type": "Expense",
        "category": "Rent",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-26 06:57:39",
        "amount": "3710.76",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-10-03 03:48:38",
        "amount": "707.34",
        "type": "Expense",
        "category": "Education",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-11-27 06:46:40",
        "amount": "2600.79",
        "type": "Income",
        "category": "Salary",
        "title": "Dividends",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-07-06 18:22:07",
        "amount": "2159.63",
        "type": "Income",
        "category": "Gift",
        "title": "Social Security",
        "currency": "GBP",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-02-15 08:10:56",
        "amount": "1908.53",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-14 22:24:32",
        "amount": "3873.79",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-25 02:07:56",
        "amount": "1400.22",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-13 11:07:09",
        "amount": "2518.77",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-19 14:59:38",
        "amount": "1341.99",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-25 15:03:33",
        "amount": "302.91",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-24 13:29:57",
        "amount": "3866.42",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-30 13:00:28",
        "amount": "3880.59",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-28 02:52:19",
        "amount": "2803.71",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-13 11:10:55",
        "amount": "3290.04",
        "type": "Income",
        "category": "Salary",
        "title": "Bonuses",
        "currency": "GBP",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-03-31 18:34:05",
        "amount": "490.72",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-08 16:44:54",
        "amount": "1756.47",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-11 09:08:01",
        "amount": "539.46",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-07-17 08:40:20",
        "amount": "1028.17",
        "type": "Income",
        "category": "Investment",
        "title": "Pension",
        "currency": "GBP",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-11-02 04:23:22",
        "amount": "825.69",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-11 22:12:44",
        "amount": "650.83",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-05 05:16:29",
        "amount": "494.97",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-16 09:43:23",
        "amount": "4621.81",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-07-25 17:12:30",
        "amount": "2586.46",
        "type": "Income",
        "category": "Bonus",
        "title": "Interest Income",
        "currency": "GBP",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-12-27 12:56:12",
        "amount": "25.34",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-08 00:26:12",
        "amount": "711.75",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-02 09:50:09",
        "amount": "2442.12",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-18 04:44:23",
        "amount": "1791.48",
        "type": "Income",
        "category": "Freelance",
        "title": "Pension",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-03-08 23:28:39",
        "amount": "2242.27",
        "type": "Expense",
        "category": "Travel",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-30 23:10:35",
        "amount": "3211.98",
        "type": "Income",
        "category": "Salary",
        "title": "Bonuses",
        "currency": "INR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-12-05 12:06:54",
        "amount": "4124.04",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-11 03:31:01",
        "amount": "84.78",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-13 14:15:19",
        "amount": "3231.37",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-29 11:18:50",
        "amount": "2502.63",
        "type": "Expense",
        "category": "Shopping",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-12 11:42:23",
        "amount": "2335.54",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-26 08:49:00",
        "amount": "603.64",
        "type": "Expense",
        "category": "Education",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-06 17:24:30",
        "amount": "3495.23",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-12 07:27:25",
        "amount": "1634.45",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-08 17:30:45",
        "amount": "458.71",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-20 01:33:10",
        "amount": "1274.57",
        "type": "Income",
        "category": "Freelance",
        "title": "Freelance Income",
        "currency": "USD",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-03-15 01:42:27",
        "amount": "999.3",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-06 15:40:02",
        "amount": "458.75",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-02 07:45:16",
        "amount": "1877.48",
        "type": "Expense",
        "category": "Shopping",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-03 08:38:56",
        "amount": "655.62",
        "type": "Expense",
        "category": "Food",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-16 07:38:50",
        "amount": "3157.34",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-17 01:29:35",
        "amount": "3468.08",
        "type": "Expense",
        "category": "Food",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-30 08:27:08",
        "amount": "453.58",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-16 05:18:17",
        "amount": "183.54",
        "type": "Income",
        "category": "Investment",
        "title": "Bonuses",
        "currency": "USD",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2024-04-10 05:58:45",
        "amount": "2070.12",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-18 13:58:29",
        "amount": "3389.4",
        "type": "Expense",
        "category": "Utilities",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-09 09:08:09",
        "amount": "1407.8",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-04 04:44:15",
        "amount": "1268.58",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-15 08:07:04",
        "amount": "192.14",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-25 18:17:11",
        "amount": "3172.71",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-05-29 17:33:12",
        "amount": "535.53",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-06 13:00:14",
        "amount": "3859.57",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-06-04 09:22:49",
        "amount": "1536.51",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-27 17:17:24",
        "amount": "2429.46",
        "type": "Expense",
        "category": "Transportation",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-05 01:41:29",
        "amount": "1024.25",
        "type": "Expense",
        "category": "Shopping",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-28 12:54:14",
        "amount": "2891.26",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-07-03 11:35:48",
        "amount": "3169.75",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-01 23:31:45",
        "amount": "4196.81",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-25 12:39:58",
        "amount": "2841.74",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-19 23:14:37",
        "amount": "1861.39",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-10-07 09:16:54",
        "amount": "3243.25",
        "type": "Expense",
        "category": "Utilities",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-01 06:25:25",
        "amount": "1508.17",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-21 05:35:04",
        "amount": "849.03",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-10 20:42:57",
        "amount": "4703.08",
        "type": "Expense",
        "category": "Transportation",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-27 23:58:50",
        "amount": "1530.02",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-29 03:11:44",
        "amount": "1995.59",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-07 00:07:50",
        "amount": "2850.08",
        "type": "Expense",
        "category": "Shopping",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-25 14:33:06",
        "amount": "1311.83",
        "type": "Expense",
        "category": "Transportation",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-12 09:54:41",
        "amount": "3098.73",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-13 11:29:47",
        "amount": "3352.44",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-15 13:42:23",
        "amount": "103.51",
        "type": "Expense",
        "category": "Utilities",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-17 11:27:22",
        "amount": "599.06",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-15 07:48:00",
        "amount": "3430.84",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-04 10:28:18",
        "amount": "1111.98",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-23 00:49:28",
        "amount": "713.16",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-04 05:27:04",
        "amount": "2147.58",
        "type": "Expense",
        "category": "Food",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-08 09:55:06",
        "amount": "3005.87",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-21 14:29:07",
        "amount": "2589.89",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-03 18:31:05",
        "amount": "350.09",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-23 10:08:09",
        "amount": "4629.12",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-14 18:06:40",
        "amount": "2425.65",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-14 11:55:18",
        "amount": "4786.34",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-08 08:54:00",
        "amount": "1474.21",
        "type": "Expense",
        "category": "Transportation",
        "title": "Household Supplies",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-12-06 21:43:48",
        "amount": "578.13",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-29 06:25:58",
        "amount": "103.57",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-30 20:01:32",
        "amount": "260.32",
        "type": "Expense",
        "category": "Shopping",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-03 23:26:55",
        "amount": "4366.76",
        "type": "Expense",
        "category": "Rent",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-07-21 04:07:33",
        "amount": "4228.44",
        "type": "Expense",
        "category": "Utilities",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-25 19:24:08",
        "amount": "3798.74",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-02 07:37:48",
        "amount": "2506.01",
        "type": "Income",
        "category": "Bonus",
        "title": "Freelance Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-02-27 06:19:51",
        "amount": "588.57",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-14 18:15:30",
        "amount": "1737.28",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-30 15:16:22",
        "amount": "2916.42",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-23 22:35:31",
        "amount": "4803.85",
        "type": "Expense",
        "category": "Education",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-03 20:03:59",
        "amount": "368.48",
        "type": "Expense",
        "category": "Travel",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-27 14:00:40",
        "amount": "2490.33",
        "type": "Income",
        "category": "Freelance",
        "title": "Salary",
        "currency": "USD",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2023-07-31 15:48:31",
        "amount": "3669.41",
        "type": "Expense",
        "category": "Shopping",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-03 04:15:45",
        "amount": "157.79",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-08 22:43:01",
        "amount": "2996.85",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-05 18:43:30",
        "amount": "2665.28",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-20 02:33:49",
        "amount": "3838.01",
        "type": "Expense",
        "category": "Utilities",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-02 05:05:28",
        "amount": "3936.94",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-11-19 17:37:48",
        "amount": "2810.46",
        "type": "Expense",
        "category": "Food",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-19 13:10:35",
        "amount": "3039.68",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-27 18:32:35",
        "amount": "551.54",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-04 10:39:37",
        "amount": "3188.18",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-12 10:52:34",
        "amount": "1152.19",
        "type": "Expense",
        "category": "Shopping",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-06-08 11:57:45",
        "amount": "184.4",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-27 02:16:11",
        "amount": "4857.18",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-02 00:55:46",
        "amount": "4177.34",
        "type": "Expense",
        "category": "Food",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-20 06:59:31",
        "amount": "3149.56",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-13 19:45:10",
        "amount": "461.59",
        "type": "Income",
        "category": "Bonus",
        "title": "Dividends",
        "currency": "JPY",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-12-19 04:18:34",
        "amount": "942.26",
        "type": "Expense",
        "category": "Utilities",
        "title": "Childcare",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-24 15:27:04",
        "amount": "2933.19",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-15 11:15:53",
        "amount": "3201.16",
        "type": "Expense",
        "category": "Travel",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-27 10:13:42",
        "amount": "3859.76",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-31 10:41:35",
        "amount": "1134.48",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-04-29 15:20:23",
        "amount": "1550.88",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-09 15:34:28",
        "amount": "1497.31",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-10-30 21:38:28",
        "amount": "3368.24",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-01-28 18:20:43",
        "amount": "769.38",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-16 04:33:38",
        "amount": "1915.33",
        "type": "Expense",
        "category": "Rent",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-31 17:35:28",
        "amount": "3572.28",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-22 01:07:16",
        "amount": "2933.41",
        "type": "Income",
        "category": "Gift",
        "title": "Social Security",
        "currency": "INR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-12-10 11:28:09",
        "amount": "1560.51",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-07 08:31:25",
        "amount": "1210.36",
        "type": "Income",
        "category": "Freelance",
        "title": "Capital Gains",
        "currency": "JPY",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2023-08-01 21:47:08",
        "amount": "4629.82",
        "type": "Expense",
        "category": "Rent",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-07 01:40:29",
        "amount": "1019.96",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-11-02 20:03:53",
        "amount": "3038.9",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-05-06 15:49:37",
        "amount": "349.54",
        "type": "Expense",
        "category": "Transportation",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-03 16:15:02",
        "amount": "3582.59",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-22 07:44:55",
        "amount": "3988.55",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-02 21:57:22",
        "amount": "609.4",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-07-01 09:17:30",
        "amount": "2195.55",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-24 02:01:37",
        "amount": "3683.45",
        "type": "Expense",
        "category": "Utilities",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-09 06:26:08",
        "amount": "4019.19",
        "type": "Expense",
        "category": "Rent",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-28 02:15:13",
        "amount": "3456.12",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-15 17:46:45",
        "amount": "985.46",
        "type": "Expense",
        "category": "Utilities",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-07-16 22:15:11",
        "amount": "300.71",
        "type": "Income",
        "category": "Gift",
        "title": "Freelance Income",
        "currency": "JPY",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-02-21 16:28:02",
        "amount": "4754.66",
        "type": "Expense",
        "category": "Food",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-07 13:38:34",
        "amount": "4698.69",
        "type": "Expense",
        "category": "Education",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-28 04:05:13",
        "amount": "3016.03",
        "type": "Income",
        "category": "Salary",
        "title": "Salary",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-07-12 12:40:01",
        "amount": "2152.4",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-02 01:54:11",
        "amount": "843.73",
        "type": "Expense",
        "category": "Utilities",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-16 15:11:48",
        "amount": "3008.52",
        "type": "Expense",
        "category": "Education",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-30 11:27:58",
        "amount": "683.46",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-06 22:01:03",
        "amount": "427.29",
        "type": "Expense",
        "category": "Education",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-04 15:42:41",
        "amount": "2576.37",
        "type": "Expense",
        "category": "Rent",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-09 04:38:11",
        "amount": "247.11",
        "type": "Expense",
        "category": "Food",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-11 12:59:03",
        "amount": "3111.76",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-17 12:44:20",
        "amount": "1298.57",
        "type": "Expense",
        "category": "Education",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-26 12:12:18",
        "amount": "1856.77",
        "type": "Expense",
        "category": "Transportation",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-24 23:20:40",
        "amount": "1917.29",
        "type": "Expense",
        "category": "Shopping",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-19 05:36:29",
        "amount": "2886.4",
        "type": "Income",
        "category": "Freelance",
        "title": "Business Income",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-03-07 20:51:50",
        "amount": "3381.3",
        "type": "Expense",
        "category": "Transportation",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-20 18:44:41",
        "amount": "270.35",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-27 05:33:25",
        "amount": "1667.14",
        "type": "Expense",
        "category": "Rent",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-19 05:29:10",
        "amount": "4024.73",
        "type": "Income",
        "category": "Bonus",
        "title": "Freelance Income",
        "currency": "JPY",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-03-30 02:40:13",
        "amount": "3658.96",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-04 17:46:52",
        "amount": "73.63",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-31 08:52:48",
        "amount": "4609.92",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-07-21 00:04:50",
        "amount": "544.86",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-26 21:07:06",
        "amount": "308.86",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-24 22:12:47",
        "amount": "659.03",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-30 01:27:06",
        "amount": "1473.7",
        "type": "Expense",
        "category": "Transportation",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-26 00:43:29",
        "amount": "2266.43",
        "type": "Expense",
        "category": "Rent",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-01-31 06:14:47",
        "amount": "24.03",
        "type": "Expense",
        "category": "Shopping",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-02 23:41:11",
        "amount": "67.46",
        "type": "Expense",
        "category": "Travel",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-07 19:34:26",
        "amount": "1893.29",
        "type": "Expense",
        "category": "Food",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-16 13:31:06",
        "amount": "4137.26",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-04 05:03:28",
        "amount": "2748.88",
        "type": "Expense",
        "category": "Utilities",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-02 11:44:10",
        "amount": "3871.32",
        "type": "Expense",
        "category": "Utilities",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-02-09 21:00:29",
        "amount": "4715.87",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-27 16:46:27",
        "amount": "3567.23",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-22 14:33:19",
        "amount": "2617.18",
        "type": "Expense",
        "category": "Utilities",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-15 22:14:00",
        "amount": "4643.8",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-08 17:07:33",
        "amount": "910.3",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-29 04:12:49",
        "amount": "3565.76",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-23 09:48:51",
        "amount": "2042.42",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-28 19:51:27",
        "amount": "3982.32",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-24 21:22:43",
        "amount": "1341.8",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Education",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-18 04:58:57",
        "amount": "4484.2",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-04 16:09:33",
        "amount": "456.94",
        "type": "Expense",
        "category": "Food",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-29 09:31:23",
        "amount": "1737.77",
        "type": "Income",
        "category": "Freelance",
        "title": "Salary",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-02-29 00:52:28",
        "amount": "1485.25",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-06 14:25:55",
        "amount": "3451.7",
        "type": "Expense",
        "category": "Education",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-12 02:13:23",
        "amount": "2097.01",
        "type": "Expense",
        "category": "Shopping",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-27 07:57:04",
        "amount": "3957.83",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-14 23:33:36",
        "amount": "4486.35",
        "type": "Income",
        "category": "Salary",
        "title": "Bonuses",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-11-18 15:11:29",
        "amount": "2585.1",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-07-21 02:58:23",
        "amount": "1590.19",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-04-17 19:36:56",
        "amount": "2509.67",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-04 17:22:17",
        "amount": "1277.34",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-12-22 15:52:12",
        "amount": "2808.49",
        "type": "Expense",
        "category": "Rent",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-27 09:24:44",
        "amount": "1787.48",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-17 05:16:18",
        "amount": "2632.1",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-13 15:21:01",
        "amount": "2726.17",
        "type": "Expense",
        "category": "Shopping",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-21 02:13:03",
        "amount": "4692.17",
        "type": "Income",
        "category": "Freelance",
        "title": "Capital Gains",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-01-08 20:58:55",
        "amount": "307",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-01 10:37:55",
        "amount": "3609.79",
        "type": "Expense",
        "category": "Shopping",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-14 18:02:21",
        "amount": "891.94",
        "type": "Expense",
        "category": "Utilities",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-20 08:12:17",
        "amount": "4102.52",
        "type": "Income",
        "category": "Freelance",
        "title": "Freelance Income",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-04-25 04:24:57",
        "amount": "110.11",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-25 16:35:10",
        "amount": "673.15",
        "type": "Expense",
        "category": "Education",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-14 17:35:47",
        "amount": "2283.8",
        "type": "Income",
        "category": "Bonus",
        "title": "Business Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-07-12 02:06:24",
        "amount": "403",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-10 11:03:37",
        "amount": "2644.95",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-03-09 11:20:19",
        "amount": "4072.81",
        "type": "Expense",
        "category": "Utilities",
        "title": "Miscellaneous",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-08 02:46:59",
        "amount": "664.12",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-11 20:53:11",
        "amount": "4097.81",
        "type": "Expense",
        "category": "Transportation",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-23 07:22:56",
        "amount": "4890.14",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-02-23 00:03:27",
        "amount": "2807",
        "type": "Expense",
        "category": "Education",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-09-25 21:45:13",
        "amount": "2704.4",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-16 03:33:22",
        "amount": "906.95",
        "type": "Expense",
        "category": "Shopping",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-01 15:31:36",
        "amount": "2453.46",
        "type": "Expense",
        "category": "Utilities",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-05 03:33:44",
        "amount": "4269.22",
        "type": "Income",
        "category": "Bonus",
        "title": "Capital Gains",
        "currency": "JPY",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-02-15 19:19:26",
        "amount": "1267.54",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-16 02:07:34",
        "amount": "4056.5",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-06 15:14:54",
        "amount": "4754.48",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-20 16:28:00",
        "amount": "2311.59",
        "type": "Income",
        "category": "Salary",
        "title": "Social Security",
        "currency": "JPY",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-01-12 05:23:25",
        "amount": "2033.59",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-23 20:10:50",
        "amount": "1357.19",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-12 08:10:40",
        "amount": "273.06",
        "type": "Expense",
        "category": "Travel",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-07-25 04:32:39",
        "amount": "585.18",
        "type": "Expense",
        "category": "Education",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-27 22:01:25",
        "amount": "4093.75",
        "type": "Expense",
        "category": "Transportation",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-01 15:07:23",
        "amount": "2491.14",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-10 05:06:25",
        "amount": "4139.55",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-25 04:47:50",
        "amount": "1768.16",
        "type": "Income",
        "category": "Bonus",
        "title": "Rental Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-04-23 21:32:48",
        "amount": "3348.27",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-10 03:22:16",
        "amount": "1887.79",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-11-20 01:09:51",
        "amount": "732.19",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-23 05:44:42",
        "amount": "3196.74",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-23 12:50:25",
        "amount": "3196.42",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-30 02:48:48",
        "amount": "1216.35",
        "type": "Expense",
        "category": "Rent",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-08 23:27:55",
        "amount": "2363.47",
        "type": "Expense",
        "category": "Utilities",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-26 11:21:43",
        "amount": "2585.27",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-11-06 14:29:37",
        "amount": "1492.9",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-09 00:42:06",
        "amount": "1643.69",
        "type": "Expense",
        "category": "Transportation",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-07-25 16:14:57",
        "amount": "4594.68",
        "type": "Income",
        "category": "Salary",
        "title": "Social Security",
        "currency": "EUR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-03-15 04:44:02",
        "amount": "3212.9",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-25 16:07:41",
        "amount": "3959.92",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-11 01:09:42",
        "amount": "1343.71",
        "type": "Income",
        "category": "Gift",
        "title": "Social Security",
        "currency": "JPY",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-03-16 20:19:42",
        "amount": "3286.3",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-22 10:11:16",
        "amount": "4475.06",
        "type": "Expense",
        "category": "Education",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-30 03:06:37",
        "amount": "125.76",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Groceries",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-16 15:39:53",
        "amount": "4777.71",
        "type": "Income",
        "category": "Freelance",
        "title": "Freelance Income",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-05-26 10:30:29",
        "amount": "4058.11",
        "type": "Income",
        "category": "Salary",
        "title": "Bonuses",
        "currency": "INR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-12-08 15:05:25",
        "amount": "1252.83",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-01-05 21:35:23",
        "amount": "1849.98",
        "type": "Expense",
        "category": "Shopping",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-07-02 00:37:16",
        "amount": "1923.25",
        "type": "Expense",
        "category": "Shopping",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-07-08 21:43:22",
        "amount": "1173.03",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-10 20:32:35",
        "amount": "2727.49",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-24 21:03:03",
        "amount": "1728.91",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-17 17:23:14",
        "amount": "1230.95",
        "type": "Expense",
        "category": "Food",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-01 11:39:13",
        "amount": "4724.46",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-04 22:29:25",
        "amount": "1548.4",
        "type": "Expense",
        "category": "Travel",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-10 04:50:08",
        "amount": "4756.25",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-17 17:00:38",
        "amount": "4906.9",
        "type": "Expense",
        "category": "Shopping",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-07-09 22:38:23",
        "amount": "2851.68",
        "type": "Income",
        "category": "Investment",
        "title": "Bonuses",
        "currency": "JPY",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-09-30 01:44:25",
        "amount": "3229.25",
        "type": "Expense",
        "category": "Utilities",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-10-05 23:24:10",
        "amount": "2411.56",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-14 19:06:57",
        "amount": "3105.74",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-06-22 01:21:15",
        "amount": "2745.61",
        "type": "Expense",
        "category": "Utilities",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-06 12:14:20",
        "amount": "4758.5",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-19 15:59:56",
        "amount": "4660.55",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-17 04:21:58",
        "amount": "2286.12",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-31 09:27:22",
        "amount": "4288.37",
        "type": "Expense",
        "category": "Utilities",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-09 08:06:17",
        "amount": "4692.85",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-02 15:41:02",
        "amount": "4523.18",
        "type": "Income",
        "category": "Salary",
        "title": "Dividends",
        "currency": "USD",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-04-20 00:37:40",
        "amount": "3409.95",
        "type": "Expense",
        "category": "Food",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-04 01:41:31",
        "amount": "2805.39",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-01-17 18:16:26",
        "amount": "1184.21",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-17 19:49:52",
        "amount": "4436.64",
        "type": "Expense",
        "category": "Travel",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-20 15:53:45",
        "amount": "3802.59",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-29 17:16:52",
        "amount": "3220.81",
        "type": "Expense",
        "category": "Utilities",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-24 09:06:20",
        "amount": "2934.35",
        "type": "Income",
        "category": "Investment",
        "title": "Dividends",
        "currency": "JPY",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2024-01-06 23:31:24",
        "amount": "3765.07",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-04 08:27:55",
        "amount": "4469.5",
        "type": "Expense",
        "category": "Transportation",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-18 16:40:41",
        "amount": "1712.43",
        "type": "Expense",
        "category": "Shopping",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-26 23:00:22",
        "amount": "2987.1",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-29 09:05:44",
        "amount": "1291.96",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-17 15:16:34",
        "amount": "465.86",
        "type": "Expense",
        "category": "Rent",
        "title": "Healthcare",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-06 10:35:21",
        "amount": "2093.23",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-04 17:26:01",
        "amount": "2691.62",
        "type": "Expense",
        "category": "Utilities",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-29 05:08:30",
        "amount": "3625.16",
        "type": "Expense",
        "category": "Food",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-30 07:27:50",
        "amount": "3455.32",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-15 23:10:34",
        "amount": "4695.74",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-04 16:48:29",
        "amount": "4550.66",
        "type": "Expense",
        "category": "Travel",
        "title": "Fitness",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-06 07:53:41",
        "amount": "1342.6",
        "type": "Expense",
        "category": "Education",
        "title": "Childcare",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-05-10 18:25:17",
        "amount": "3747.59",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-23 22:35:44",
        "amount": "2218.88",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-10-15 10:35:19",
        "amount": "1417.46",
        "type": "Expense",
        "category": "Rent",
        "title": "Rent",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-25 02:18:24",
        "amount": "2460.99",
        "type": "Expense",
        "category": "Shopping",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-04-26 03:20:24",
        "amount": "1317.24",
        "type": "Expense",
        "category": "Education",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-14 04:34:12",
        "amount": "155.13",
        "type": "Expense",
        "category": "Transportation",
        "title": "Transportation",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-09-05 13:31:10",
        "amount": "992.87",
        "type": "Expense",
        "category": "Food",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-03 23:13:03",
        "amount": "4377.9",
        "type": "Income",
        "category": "Bonus",
        "title": "Capital Gains",
        "currency": "JPY",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-02-14 18:31:53",
        "amount": "4193.43",
        "type": "Expense",
        "category": "Utilities",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-31 20:55:25",
        "amount": "1669.41",
        "type": "Expense",
        "category": "Education",
        "title": "Debt Payments",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-04-09 15:43:56",
        "amount": "2802.32",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Fitness",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-10-23 06:56:44",
        "amount": "76.04",
        "type": "Expense",
        "category": "Utilities",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-23 00:14:43",
        "amount": "3895.69",
        "type": "Expense",
        "category": "Education",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-23 10:41:34",
        "amount": "31.61",
        "type": "Expense",
        "category": "Food",
        "title": "Household Supplies",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-22 21:26:30",
        "amount": "75.54",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-05 14:08:19",
        "amount": "2491.59",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-03-23 19:32:19",
        "amount": "4334.19",
        "type": "Expense",
        "category": "Travel",
        "title": "Miscellaneous",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-31 12:49:12",
        "amount": "4728.32",
        "type": "Expense",
        "category": "Utilities",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-28 11:00:44",
        "amount": "4783.87",
        "type": "Income",
        "category": "Bonus",
        "title": "Business Income",
        "currency": "EUR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-10-05 14:03:08",
        "amount": "1018.36",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-02-11 09:13:12",
        "amount": "1449",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-16 17:13:40",
        "amount": "3906.11",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-08 10:11:25",
        "amount": "4241.52",
        "type": "Expense",
        "category": "Food",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-07 07:31:32",
        "amount": "4173.73",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-04 18:19:00",
        "amount": "3776.38",
        "type": "Expense",
        "category": "Shopping",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-01-02 00:38:45",
        "amount": "1789.19",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-04-30 13:39:04",
        "amount": "1065.18",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-15 20:17:07",
        "amount": "1229.49",
        "type": "Expense",
        "category": "Transportation",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-05 00:29:20",
        "amount": "17.35",
        "type": "Income",
        "category": "Freelance",
        "title": "Salary",
        "currency": "EUR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-04-13 11:07:05",
        "amount": "4966.35",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-06-27 23:44:48",
        "amount": "4461.31",
        "type": "Expense",
        "category": "Travel",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-19 07:33:22",
        "amount": "2119.13",
        "type": "Expense",
        "category": "Travel",
        "title": "Groceries",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-18 16:23:15",
        "amount": "2548.28",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-30 03:07:10",
        "amount": "3305.51",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-10 21:49:56",
        "amount": "3685.98",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-06-16 17:34:25",
        "amount": "2752.63",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-07-18 09:09:47",
        "amount": "1749.13",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-08 09:12:54",
        "amount": "2394.9",
        "type": "Expense",
        "category": "Transportation",
        "title": "Insurance",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-20 19:54:04",
        "amount": "1591.54",
        "type": "Expense",
        "category": "Utilities",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-01 01:24:37",
        "amount": "64.87",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-05 04:13:00",
        "amount": "22.68",
        "type": "Expense",
        "category": "Transportation",
        "title": "Miscellaneous",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-24 05:07:44",
        "amount": "4423.83",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-01-06 13:51:30",
        "amount": "241.7",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-18 17:37:09",
        "amount": "4700.67",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-08-23 17:14:37",
        "amount": "1613.68",
        "type": "Income",
        "category": "Bonus",
        "title": "Interest Income",
        "currency": "GBP",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2024-06-05 10:11:45",
        "amount": "3502.62",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-10-17 10:55:42",
        "amount": "2723.95",
        "type": "Expense",
        "category": "Food",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-01 18:18:06",
        "amount": "3157.32",
        "type": "Income",
        "category": "Salary",
        "title": "Business Income",
        "currency": "GBP",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2023-09-22 04:30:58",
        "amount": "1480.32",
        "type": "Expense",
        "category": "Travel",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-09 10:29:45",
        "amount": "2601.36",
        "type": "Expense",
        "category": "Food",
        "title": "Rent",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-20 19:54:41",
        "amount": "2439.13",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-12 23:58:56",
        "amount": "3438.4",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-04 09:26:23",
        "amount": "1043.58",
        "type": "Expense",
        "category": "Utilities",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-13 04:02:12",
        "amount": "501.03",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-01 14:37:17",
        "amount": "1587.68",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-28 01:06:12",
        "amount": "3001.57",
        "type": "Expense",
        "category": "Shopping",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-11-29 07:05:27",
        "amount": "3042.6",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-01 09:28:33",
        "amount": "3778.86",
        "type": "Expense",
        "category": "Shopping",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-20 17:16:15",
        "amount": "1957.94",
        "type": "Income",
        "category": "Freelance",
        "title": "Dividends",
        "currency": "GBP",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-05-31 01:41:34",
        "amount": "2980.41",
        "type": "Expense",
        "category": "Food",
        "title": "Groceries",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-14 12:54:34",
        "amount": "1034.27",
        "type": "Expense",
        "category": "Shopping",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-19 02:45:50",
        "amount": "1760.89",
        "type": "Expense",
        "category": "Utilities",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-04-17 01:58:34",
        "amount": "3618.17",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-03-12 22:00:57",
        "amount": "1878.16",
        "type": "Expense",
        "category": "Utilities",
        "title": "Pet Care",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-09-11 08:16:51",
        "amount": "2268.17",
        "type": "Income",
        "category": "Gift",
        "title": "Pension",
        "currency": "EUR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2023-11-27 07:50:06",
        "amount": "2249.8",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-22 11:03:52",
        "amount": "4395.16",
        "type": "Expense",
        "category": "Travel",
        "title": "Personal Care",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-13 15:55:03",
        "amount": "320.84",
        "type": "Expense",
        "category": "Education",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-24 13:13:49",
        "amount": "1618.5",
        "type": "Expense",
        "category": "Education",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-07-25 04:14:26",
        "amount": "2257.53",
        "type": "Expense",
        "category": "Rent",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-04 20:56:24",
        "amount": "669.44",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-15 15:02:32",
        "amount": "2345.01",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-11-24 10:52:46",
        "amount": "2168.45",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-13 18:41:28",
        "amount": "549.37",
        "type": "Expense",
        "category": "Rent",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-11 14:34:13",
        "amount": "1080.38",
        "type": "Expense",
        "category": "Food",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-22 06:56:42",
        "amount": "3063.61",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-09-07 19:57:46",
        "amount": "1849.64",
        "type": "Expense",
        "category": "Transportation",
        "title": "Insurance",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-08 20:15:22",
        "amount": "1763.5",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-24 15:18:01",
        "amount": "3162.51",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-22 14:18:38",
        "amount": "3328.75",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-06-16 21:29:14",
        "amount": "1315.44",
        "type": "Income",
        "category": "Investment",
        "title": "Rental Income",
        "currency": "JPY",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-08-07 11:41:14",
        "amount": "4744.99",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-24 18:16:42",
        "amount": "4331.92",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-21 21:41:26",
        "amount": "541.76",
        "type": "Expense",
        "category": "Shopping",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-02-21 20:02:58",
        "amount": "4098.61",
        "type": "Expense",
        "category": "Transportation",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-15 16:38:04",
        "amount": "556.44",
        "type": "Expense",
        "category": "Food",
        "title": "Healthcare",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-07-07 20:28:11",
        "amount": "4075.52",
        "type": "Expense",
        "category": "Transportation",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-03-11 05:10:43",
        "amount": "4167.17",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-09-14 04:56:11",
        "amount": "2459.29",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-22 12:20:19",
        "amount": "2033.58",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-22 12:40:21",
        "amount": "547.26",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-07 02:39:00",
        "amount": "1306.23",
        "type": "Expense",
        "category": "Education",
        "title": "Education",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-06-12 05:44:46",
        "amount": "2263.25",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Household Supplies",
        "currency": "USD",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-29 06:27:58",
        "amount": "1911.99",
        "type": "Expense",
        "category": "Utilities",
        "title": "Transportation",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-03-15 16:16:16",
        "amount": "577.78",
        "type": "Expense",
        "category": "Education",
        "title": "Fitness",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-12-31 15:37:30",
        "amount": "3065.39",
        "type": "Expense",
        "category": "Education",
        "title": "Miscellaneous",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-02-25 17:16:16",
        "amount": "1658.81",
        "type": "Expense",
        "category": "Food",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-11 17:05:41",
        "amount": "3537.78",
        "type": "Expense",
        "category": "Transportation",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-08-24 05:46:50",
        "amount": "377.9",
        "type": "Expense",
        "category": "Education",
        "title": "Dining Out",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-10-04 03:04:55",
        "amount": "864.03",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-11 13:09:23",
        "amount": "781.8",
        "type": "Expense",
        "category": "Shopping",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-01 16:55:32",
        "amount": "1754.02",
        "type": "Expense",
        "category": "Rent",
        "title": "Fitness",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-03-05 19:15:45",
        "amount": "4532.69",
        "type": "Expense",
        "category": "Food",
        "title": "Utilities",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-11-23 19:20:03",
        "amount": "490.78",
        "type": "Expense",
        "category": "Utilities",
        "title": "Gifts",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-01-07 21:19:45",
        "amount": "674.45",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-25 21:15:27",
        "amount": "4941.83",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Childcare",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-09 05:37:12",
        "amount": "3359.14",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-06-28 07:49:58",
        "amount": "3419.47",
        "type": "Expense",
        "category": "Shopping",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-07-19 02:22:36",
        "amount": "4658.22",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-12-09 08:36:10",
        "amount": "2242.87",
        "type": "Income",
        "category": "Freelance",
        "title": "Rental Income",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-04-13 09:25:46",
        "amount": "4110.02",
        "type": "Expense",
        "category": "Transportation",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2023-10-10 11:29:34",
        "amount": "3059.71",
        "type": "Expense",
        "category": "Food",
        "title": "Dining Out",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-03 20:08:22",
        "amount": "2006.8",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-05-18 05:26:21",
        "amount": "2659.4",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Transportation",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-10-17 04:25:37",
        "amount": "3991.6",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-01-09 08:39:37",
        "amount": "2957.8",
        "type": "Expense",
        "category": "Travel",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-03-11 21:05:03",
        "amount": "1704.92",
        "type": "Expense",
        "category": "Education",
        "title": "Personal Care",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-31 21:32:02",
        "amount": "2584.12",
        "type": "Expense",
        "category": "Utilities",
        "title": "Travel",
        "currency": "EUR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-27 03:33:15",
        "amount": "4305.74",
        "type": "Expense",
        "category": "Rent",
        "title": "Household Supplies",
        "currency": "GBP",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-08 23:35:40",
        "amount": "3798.9",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "USD",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-09-13 14:09:02",
        "amount": "3944.02",
        "type": "Expense",
        "category": "Shopping",
        "title": "Gifts",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-21 17:42:07",
        "amount": "2688.04",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-21 14:45:51",
        "amount": "3268.4",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-08-09 23:29:17",
        "amount": "4001.56",
        "type": "Expense",
        "category": "Education",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-06 02:05:00",
        "amount": "705.04",
        "type": "Expense",
        "category": "Travel",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-05-14 09:20:30",
        "amount": "563.98",
        "type": "Expense",
        "category": "Transportation",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-09 07:08:28",
        "amount": "3354.84",
        "type": "Income",
        "category": "Gift",
        "title": "Interest Income",
        "currency": "USD",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-06-01 03:25:45",
        "amount": "1941.97",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-02-24 00:32:11",
        "amount": "565.29",
        "type": "Expense",
        "category": "Utilities",
        "title": "Fitness",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-24 13:55:34",
        "amount": "1264.78",
        "type": "Expense",
        "category": "Shopping",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-09-24 08:24:31",
        "amount": "1529.23",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-08-14 01:12:48",
        "amount": "3506.32",
        "type": "Expense",
        "category": "Rent",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-04-13 19:47:53",
        "amount": "4866.58",
        "type": "Expense",
        "category": "Travel",
        "title": "Gifts",
        "currency": "JPY",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-06-18 13:54:34",
        "amount": "4628.92",
        "type": "Expense",
        "category": "Shopping",
        "title": "Subscriptions",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2024-05-16 02:19:41",
        "amount": "2352.73",
        "type": "Income",
        "category": "Bonus",
        "title": "Interest Income",
        "currency": "INR",
        "note": "Transaction related to Bonus"
    },
    {
        "dateTime": "2023-12-12 06:26:26",
        "amount": "954.2",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Dining Out",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-16 17:03:16",
        "amount": "3819.49",
        "type": "Expense",
        "category": "Food",
        "title": "Entertainment",
        "currency": "INR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-02-07 03:03:03",
        "amount": "398.08",
        "type": "Income",
        "category": "Gift",
        "title": "Pension",
        "currency": "INR",
        "note": "Transaction related to Gift"
    },
    {
        "dateTime": "2024-03-28 18:08:41",
        "amount": "2465.46",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Utilities",
        "currency": "JPY",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2023-08-01 07:11:53",
        "amount": "4362.79",
        "type": "Expense",
        "category": "Transportation",
        "title": "Pet Care",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-04-15 08:42:56",
        "amount": "3982.53",
        "type": "Expense",
        "category": "Education",
        "title": "Healthcare",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-03-28 01:11:47",
        "amount": "3984.99",
        "type": "Expense",
        "category": "Rent",
        "title": "Pet Care",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-02-20 15:43:22",
        "amount": "3459.43",
        "type": "Expense",
        "category": "Utilities",
        "title": "Insurance",
        "currency": "GBP",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-06-21 04:17:20",
        "amount": "2969.49",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-07-29 10:17:54",
        "amount": "2925.16",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Debt Payments",
        "currency": "USD",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-04-27 00:05:31",
        "amount": "1216.8",
        "type": "Expense",
        "category": "Transportation",
        "title": "Healthcare",
        "currency": "GBP",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-01-27 07:35:50",
        "amount": "254.48",
        "type": "Expense",
        "category": "Travel",
        "title": "Insurance",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-02-14 11:47:40",
        "amount": "1903.46",
        "type": "Expense",
        "category": "Rent",
        "title": "Childcare",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-08-04 00:46:09",
        "amount": "1503.6",
        "type": "Income",
        "category": "Freelance",
        "title": "Pension",
        "currency": "INR",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-05-21 06:11:07",
        "amount": "4603.12",
        "type": "Expense",
        "category": "Shopping",
        "title": "Rent",
        "currency": "USD",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-08-15 01:04:18",
        "amount": "4924.95",
        "type": "Expense",
        "category": "Utilities",
        "title": "Subscriptions",
        "currency": "USD",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-11-07 22:58:32",
        "amount": "1907.34",
        "type": "Income",
        "category": "Salary",
        "title": "Capital Gains",
        "currency": "INR",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-03-27 11:54:42",
        "amount": "1055.76",
        "type": "Expense",
        "category": "Transportation",
        "title": "Transportation",
        "currency": "JPY",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-05-31 09:15:59",
        "amount": "876.95",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Clothing",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-26 06:52:06",
        "amount": "2078.45",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Groceries",
        "currency": "INR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-12-27 23:29:10",
        "amount": "2020.07",
        "type": "Expense",
        "category": "Rent",
        "title": "Dining Out",
        "currency": "JPY",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-16 09:33:21",
        "amount": "4982.23",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2024-05-10 09:31:13",
        "amount": "803.2",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Clothing",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2023-08-31 10:23:08",
        "amount": "852.5",
        "type": "Expense",
        "category": "Travel",
        "title": "Utilities",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-01-13 15:45:57",
        "amount": "4017.65",
        "type": "Expense",
        "category": "Rent",
        "title": "Education",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-11-01 19:56:21",
        "amount": "2139.1",
        "type": "Expense",
        "category": "Shopping",
        "title": "Subscriptions",
        "currency": "JPY",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-10-21 04:59:27",
        "amount": "4149.04",
        "type": "Expense",
        "category": "Transportation",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Transportation"
    },
    {
        "dateTime": "2024-06-30 08:12:10",
        "amount": "853.58",
        "type": "Expense",
        "category": "Utilities",
        "title": "Rent",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2023-12-12 07:50:27",
        "amount": "946.26",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Entertainment",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-05-19 06:31:04",
        "amount": "3286.24",
        "type": "Expense",
        "category": "Shopping",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-07-27 17:22:52",
        "amount": "3339.63",
        "type": "Expense",
        "category": "Food",
        "title": "Education",
        "currency": "EUR",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-01-04 12:57:07",
        "amount": "2838.73",
        "type": "Income",
        "category": "Salary",
        "title": "Freelance Income",
        "currency": "GBP",
        "note": "Transaction related to Salary"
    },
    {
        "dateTime": "2024-06-17 23:59:17",
        "amount": "4081.58",
        "type": "Expense",
        "category": "Rent",
        "title": "Clothing",
        "currency": "INR",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-12-02 08:01:35",
        "amount": "3528.82",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "INR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-07-11 18:59:17",
        "amount": "3328.33",
        "type": "Expense",
        "category": "Travel",
        "title": "Debt Payments",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-04-10 22:15:33",
        "amount": "1056.58",
        "type": "Expense",
        "category": "Utilities",
        "title": "Household Supplies",
        "currency": "INR",
        "note": "Transaction related to Utilities"
    },
    {
        "dateTime": "2024-05-10 18:35:12",
        "amount": "223.07",
        "type": "Income",
        "category": "Investment",
        "title": "Bonuses",
        "currency": "JPY",
        "note": "Transaction related to Investment"
    },
    {
        "dateTime": "2023-09-11 22:19:36",
        "amount": "4828.7",
        "type": "Expense",
        "category": "Food",
        "title": "Miscellaneous",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2024-06-04 21:39:41",
        "amount": "3299.99",
        "type": "Expense",
        "category": "Rent",
        "title": "Insurance",
        "currency": "USD",
        "note": "Transaction related to Rent"
    },
    {
        "dateTime": "2023-09-29 17:47:01",
        "amount": "3400.67",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Debt Payments",
        "currency": "EUR",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-03-30 22:25:18",
        "amount": "2054.63",
        "type": "Expense",
        "category": "Shopping",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-12-05 22:02:08",
        "amount": "1078.86",
        "type": "Expense",
        "category": "Food",
        "title": "Debt Payments",
        "currency": "GBP",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-08-07 03:42:16",
        "amount": "4719.02",
        "type": "Expense",
        "category": "Entertainment",
        "title": "Pet Care",
        "currency": "GBP",
        "note": "Transaction related to Entertainment"
    },
    {
        "dateTime": "2024-01-08 20:34:06",
        "amount": "169.52",
        "type": "Expense",
        "category": "Education",
        "title": "Utilities",
        "currency": "USD",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2024-01-05 22:48:54",
        "amount": "576.7",
        "type": "Expense",
        "category": "Travel",
        "title": "Subscriptions",
        "currency": "GBP",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2024-07-14 22:42:28",
        "amount": "3400.95",
        "type": "Expense",
        "category": "Healthcare",
        "title": "Personal Care",
        "currency": "GBP",
        "note": "Transaction related to Healthcare"
    },
    {
        "dateTime": "2024-04-23 19:09:58",
        "amount": "616.06",
        "type": "Expense",
        "category": "Education",
        "title": "Entertainment",
        "currency": "EUR",
        "note": "Transaction related to Education"
    },
    {
        "dateTime": "2023-10-24 21:08:15",
        "amount": "943.93",
        "type": "Expense",
        "category": "Food",
        "title": "Travel",
        "currency": "JPY",
        "note": "Transaction related to Food"
    },
    {
        "dateTime": "2023-12-09 21:35:57",
        "amount": "3394.39",
        "type": "Income",
        "category": "Freelance",
        "title": "Dividends",
        "currency": "USD",
        "note": "Transaction related to Freelance"
    },
    {
        "dateTime": "2024-03-14 22:03:20",
        "amount": "1222.97",
        "type": "Expense",
        "category": "Travel",
        "title": "Travel",
        "currency": "INR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-12-15 20:14:08",
        "amount": "60.09",
        "type": "Expense",
        "category": "Shopping",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Shopping"
    },
    {
        "dateTime": "2023-07-24 18:10:56",
        "amount": "1131.41",
        "type": "Expense",
        "category": "Travel",
        "title": "Dining Out",
        "currency": "EUR",
        "note": "Transaction related to Travel"
    },
    {
        "dateTime": "2023-09-27 18:44:41",
        "amount": "172.54",
        "type": "Expense",
        "category": "Transportation",
        "title": "Clothing",
        "currency": "USD",
        "note": "Transaction related to Transportation"
    }
]
  
export default transactionData;