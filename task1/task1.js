function solveQuiz(S) {
  const upperCaseCount = S.split("").filter(
    (char) => char >= "A" && char <= "Z"
  ).length;

  if (upperCaseCount !== 0) {
    return "You have to input lowercase letters!";
  }

  const num_blocks = 3;
  if (S.length <= num_blocks) {
    return S.length;
  }

  let M = new Array(num_blocks + 1).fill(0);
  let dp = new Array(num_blocks + 1).fill(0).map(() => new Array(26).fill(0));

  let ans = 3;
  for (let d of S) {
    let x = d.charCodeAt(0) - "a".charCodeAt(0);
    for (let i = num_blocks; i > 0; i--) {
      dp[i][x] = Math.max(dp[i][x] + 1, M[i - 1] + 1);
      M[i] = Math.max(M[i], dp[i][x]);
    }
    ans = Math.max(ans, M[num_blocks]);
  }
  return ans;
}

console.log(solveQuiz("aabacbba")); // Output: 6
console.log(solveQuiz("aabxbaba")); // Output: 6
console.log(solveQuiz("xxxyxxyyyxyyy")); // Output: 11
console.log(solveQuiz("atheaxbtheb")); // Output: 5
console.log(solveQuiz("Aabacbba")); // You have to input lowercase letters!
