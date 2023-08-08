# Finance Calculator Objects

1. Account: Table
    - name -> Primary Key
      - varchar(25)
      - Unique
      - Not Null
    - type
      - Int
      - Not Null
    - balance
      - Double
      - Not Null
    - liability
      - boolean
      - Not Null

2. Transaction: Table
    - id -> Primary Key
      - Int
      - Unique
      - Not Null 
      - Auto Increment
    - name
      - varchar(50)
      - Not Null
    - date
      - DateOnly
      - Not Null
    - amount
      - Double
      - Not Null
    - note
      - Text
      - Allow Null
    - category
      - Int
       - Not Null
   - account -> Foreign Key
      - references Account(Name)
      - Not Null
   - account_recipient -> Foreign Key
      - references Account(Name)
       - Allow Null

3. User: Table
   - username -> Primary Key
     - varchar(50)
     - Not Null
     - Unique
   - password
      - varchar(50)
      - Not Null
   - first_name
      - varchar(50)
      - Not Null
   - last_name
      - varchar(50)
      - Not Null
   - profile_picture
      - LONGBLOB
       - Default: data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmVyc2lvbj0iMCAwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnP3hsPWluZGV4Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0OCIgZmlsbD0iI0UwRTBFMCIvPjxwYXRoIGQ9Ik83Ni42NjY3IDY1LjMzMzMiIDczLjU4MDIgODUuNjYzMyA1Ni4zMzMzIDMzLjk3NDMgMzYuNjI3MCA2NS41NTkgODYuMzMzMyAzNiA2NS4zMzMzIDEzLjIzODEgNzYuNjY2NiA3NS42NTgwIDEzLjA4NjIgNDAgNjUuMzMzIDMzLjIwNDAgNDEuNzk5IDgzLjAwNTYgMzUuNjgxNCA0NS44MTMgMTUuMzMzIDE3NS42ODAyIDUwIDMzLjk4NjQgNDYuODc3NiA2NS41NTUgMzEgNzIuODg1NiAzMi4zMzIgNjYgNzIuNTk0MyAzMi40OTA1IDY3LjA1NCAzMzIuNDkwNSAzNi41ODYxIDMxLjM5NjQgMzEuMDMzIDMyLjQ4MiA0Mi4wNTIgMzMyLjQ4MiAzMi4zMjIgMzYuNTM2MSA0Mi40OTA1IDM2LjUzNjEgMzIuNDg5MiA0Mi4zMjcyIDY2LjkyODcgMzIuMjkwNSA2Ny45MTMzIDMyLjQ5MDUgMzIuNDkyOSA2NzAuMTEgMzIuNTQ4MiA2NzAuMTEgMzIuNTQ4MiA2Njg3IDMyLjE5ODcgMzIuMzg0NSA2NjguODQ0IDMyLjE5ODcgMzIuNDkyOSA2NzAuMTEgMzIuNTQ4MiA2Ny4wNTUgMzIuMzI0IDY3LjA1MjggMzIuNDM4MiA2Ny43MzkgMzIuMzYzMSA2NzAuNDA2IDMyLjMyMzAgNjcuMTg4IDMyLjM0MTUgNjcuMDk4IDMyLjI5MDYgNjcuMjkwNSA2Ny45Mzg5IDMyLjI0OTA1IDY3Ljg3MzkgNjcyLjkzIDMyLjE5ODcgNzcyLjg1IDMyLjE5ODcgNjcuODczOSAzMi43ODU5IDY3Ljg3MzkgMzIuMjA2OCA2Ny44NjQ4IDMxLjE4MTUgNzEuMTExIDY3LjgxNCA3MS42MzYxIDE2LjgzMTEgMzUgMTIuODQxNiA2NzEuMTExIDM0LjYzNiAzMC45ODAyIDM0LjYzNiA1Ni4zMjg4IDQ4IDE2LjgzMTIgNTYuNTU3IDMzLjk4NjQgNTYuNTU3IDMxLjAwODZDNTY2LjEwODQgNTY1LjMzMzIgNjcuNTgwMiA1MC4wODYyIDY3LjU4MDIgNDguMzI4MSA1Ni4zMzMzIDE1LjMzMyA1Ni4zMzMzIDM0LjAwMSA1MC4wODYyIDQ2Ljg3NzYgNTAuMDg2MiA0Ni44NzYgNDcuNDMyOCA1MC4wODYyIDM0LjE5NDYgNDYuODc2IDM0LjE5NDYgNDYuODc2IDM0LjIzNTAgNTYuNTU3IDQ4LjEzNDMgNTYuNTU3IDMxLjAwIDczLjExMTAgMzEgLjU5MzM0IDMxLjM2MTAgNjYuOTI4IDMxLjc5NjYgNjYuOTI4IDMzLjIzMiA2NCA3MS4xMDgxIDczLjExMTAgMzEgLjkwNDE1IDczLjU4MDEgMzEgLjkwNDE1IDY2LjkyMzMgNzEuMTk3MzYgNzYgNzAuMTEgNzYuNjY2NyA3NCA3MS42MzYxIDc2LjY2NjcgNzUuNjU4MCAxMy4yMzgxIDc2LjY2NjcgNzQuMTQ4MiA3Ni42NjY3IDc0LjMzMzMgNzYuNjY2NyA3NS42NTgwIDE0LjAzMTMgNzQuMTQ4MiA3NS42NTgwIDEzLjIzODEgNzYuNjY2NyA3NS42NTgwIDE3NS42ODAyIDUwIDMzLjk3NDEgNDUuMzEzIDE4LjUuODc1OCAzMCAyOS44NDIgMzMgLjQ0NDIgLjQ0NDIgLjg0NzkgMzAgMzIuNDk2MyAzMiA0Mi4wNTIgMzIuMzQ0MyAzMi42OTggMzIuNjkyIDMyLjk0MzIgNDIuNDMzIDMyLjMxMTMgMzIuNDMxIDMzLjkyNCAzMjAgNjYuODk2IDMzLjIxNjMgMzEgNzEuMTExIDMzLjAwMjMgMzAuNTQ4NCAzMS4wNjYzIDMyLjIwNDMgMzEuMzkgNDEgMjQuMDg2IDE0IDcyLjY0MzAgMjggMzIuOTE2IDE0LjE5ODcgMTcuMzU2IDI1LjA1MzYgMzMuOTg4MiAzMC4wMzMyIDMzLjk4ODIgMzMuMzAzMiAzNiAzNi43OTc1IDE2IDM2Ljc5NzUgMzEgLjM1OTggNDIgLjAwNTU2IDQyIiAvPjwvc3ZnPgo=
