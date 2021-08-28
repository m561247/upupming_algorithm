function longestPalindrome (s: string): string {
  const n = s.length
  const a = ['!', '#']
  for (const ch of s) {
    a.push(ch)
    a.push('#')
  }
  a.push('@')
  const t = a.join('')
  const m = 2 * n + 1
  let [rt, mid, ans] = [0, 0, '']
  const p: number[] = []
  for (let i = 1; i <= m; i++) {
    p[i] = i < rt ? Math.min(p[2 * mid - i], rt - i) : 1
    while (t[i + p[i]] === t[i - p[i]]) p[i]++
    if (i + p[i] > rt) {
      rt = i + p[i]
      mid = i
    }
    if (2 * p[i] - 1 > ans.length) { ans = t.slice(i - p[i] + 1, i + p[i])
    }
  }
  return [...ans].filter(ch => ch !== '#').join('')
};
