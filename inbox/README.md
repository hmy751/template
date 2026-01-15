# Inbox

> 여기에 아무거나 던져놓고, 나중에 "inbox 정리해줘"

## 사용법

- 파일명, 형식 상관없이 자유롭게 메모
- 기술 분류 신경 쓸 필요 없음 (Claude가 분류해서 반영)
- 예: `memo.md`, `2024-01-20.md`, `react-query-뭔가.txt` 등

## 예시

```markdown
# 오늘 발견한 것

useMutation에서 onSuccess 안 됨. v5 문제인듯?

---

zustand에서 persist 쓸 때 partialize 빼먹으면 안 됨

---

date-fns isToday 쓸 때 useMemo 감싸면 좋음
```

## 정리 명령

```
"inbox 정리해줘"
→ Claude가 각 기술별로 분류해서 cheatsheet에 반영 + CHANGELOG 기록
```
