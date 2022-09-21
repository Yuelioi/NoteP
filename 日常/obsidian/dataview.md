https://github.com/blacksmithgu/obsidian-dataview

1 YAML



```yaml
---
alias: "document"
last-reviewed: 2021-08-17
thoughts:
  rating: 8
  reviewable: false
---
```



SEARCH

```dataview
table alias
from "Day Planners"
where contains(file.name,"W")

```