// =======================================================
//  Crypto Finance Tracker — CORE MODULE
//  Author: NerSz + ChatGPT
//  Description: Core engine for the financial tracker
// =======================================================

/**
 * Хранилище имен листов — чтобы легко менять структуру.
 */
const SHEETS = {
  SETTINGS: "Settings",
  TRANSACTIONS: "Transactions",
  BUDGET: "Budget",
  SUMMARY: "Summary",
  DEBTS: "Debts",
  SAVINGS: "Savings",
  DASHBOARD: "Dashboard"
};

/**
 * Инициализация структуры (создание листов, если их нет)
 */
function initCryptoFinanceTracker() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const required = Object.values(SHEETS);

  required.forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) {
      sh = ss.insertSheet(name);
      sh.activate();
      sh.clearFormats().clearContents();
    }
  });

  SpreadsheetApp.getUi().alert("✔ Initial structure created!");
}

/**
 * Быстрый вывод в лог (красивый)
 */
function log(msg) {
  console.log("💰 CryptoTracker: " + msg);
}

/**
 * Получить лист по имени
 */
function SH(name) {
  return SpreadsheetApp.getActive().getSheetByName(name);
}

/**
 * Автоматическое обновление всех формул
 */
function refreshAll() {
  SpreadsheetApp.flush();
  log("All formulas updated.");
}

/**
 * Очистка всех данных (без удаления листов)
 */
function wipeData() {
  SH(SHEETS.TRANSACTIONS).getRange(2, 1, 5000, 5).clearContent();
  SH(SHEETS.BUDGET).getRange(2, 1, 5000, 5).clearContent();
  SH(SHEETS.DEBTS).getRange(2, 1, 5000, 5).clearContent();
  SH(SHEETS.SAVINGS).getRange(2, 1, 5000, 5).clearContent();

  log("All data wiped.");
}
