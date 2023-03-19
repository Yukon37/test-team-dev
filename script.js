'use strict';

// テスト用 TDD
// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}


// テストする対象のコード
function add(a, b) {
  return a + a;
}

expected = 3; // EXPRESSION（式）の期待値
actual = add(1, 2); // テストを行う EXPRESSION（式）
