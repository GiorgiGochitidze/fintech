const API_URL = "https://fintech-server-sl9j.onrender.com";

export const getTotalIncome = async () => {
  const res = await fetch(`${API_URL}/transactions/total-income`, { cache: "no-store" });
  return res.json();
};

export const getTotalExpenses = async () => {
  const res = await fetch(`${API_URL}/transactions/total-expense`, { cache: "no-store" });
  return res.json();
};

export async function getNetAmount() {
  const res = await fetch(`${API_URL}/transactions/net-amount`, { cache: "no-store" });
  return res.json();
}

export async function getBudgetLeft() {
  const res = await fetch(`${API_URL}/transactions/budget-left`, { cache: "no-store" });
  return res.json();
}

export async function getAllTransactions() {
  const res = await fetch(`${API_URL}/`, { cache: "no-store" });
  return res.json();
}