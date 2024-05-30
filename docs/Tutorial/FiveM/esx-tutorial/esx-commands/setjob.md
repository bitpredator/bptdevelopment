---
sidebar_label: setjob
---

This command sets the users job and job grade.

## Arguments

| Argument  | Data Type | Optional | Default Value | Explanation                   |
| --------- | --------- | -------- | ------------- | ----------------------------- |
| ID        | number    | No       | -             | The ServerID of the user.     |
| Job Name  | string    | No       | -             | The name of the job.          |
| Job Grade | number    | No       | -             | The grade to set the user to. |

## Note

You can find the list of jobs and their grade in the jobs table in your database.

## Example

```
setjob [ID] [job-name] [job-grade]

setjob 1 police 4
```
