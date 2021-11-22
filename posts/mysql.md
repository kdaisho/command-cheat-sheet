---
title: "MySql"
keywords: "database, mysql, sql"
date: "2021-11-21"
---

## Login to databawe

```sql
mysql -u root -p
```

Enter the password

```sql
SHOW DATABASES;
```

Command above prints this

| Database           |
| ------------------ |
| Information_schema |
| blog               |
| mysql              |
| Information_schema |
| sys                |

```sql
USE <database>;
```

Database changed

```sql
SHOW TABLES;
```

| Tables_in_blog  |
| --------------- |
| categories      |
| comments        |
| migrations      |
| password_resets |
| post_tag        |
| posts           |
| tags            |
| users           |

```sql
SHOW FIELDS FROM posts;
```

| Field       | Type             | Null | Key | Default | Extra          |
| ----------- | ---------------- | ---- | --- | ------- | -------------- |
| id          | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| title       | varchar(255)     | NO   |     | NULL    |                |
| body        | mediumtext       | YES  |     | NULL    |                |
| slug        | varchar(255)     | NO   |     | NULL    |                |
| image       | varchar(255)     | YES  |     | NULL    |                |
| category_id | int(10) unsigned | YES  |     | NULL    |                |
| is_online   | tinyint(1)       | NO   |     | NULL    |                |
| created_at  | timestamp        | YES  |     | NULL    |                |
| updated_at  | timestamp        | YES  |     | NULL    |                |

Show blog contents (body) corresponds to id `79` (latest post as of Nov 21, 2021)

```sql
SELECT body FROM posts WHERE id = 79;
```
