<h2 align="center">
    <a href="#" target="blank_">
        <img height="200" alt="Donut Logo" src=
        "https://github.com/Parrisu/EventTrackerProject/blob/main/images/donutimg.png"/>
    </a>
    <br>
    Love The Sweetness
</h2>

<div align="center">
    
![Static Badge](https://img.shields.io/badge/Donut-Java-green?link=http%3A%2F%2F52.86.229.80%3A8080%2FQuorum%2Flogin.do)
![Static Badge](https://img.shields.io/badge/Parris-Creator-orange?link=https%3A%2F%2Fgithub.com%2FParrisu)

</div>


## Donut Tracker

#### Side project aiming to track sweet donuts in my local area.

### Overview
This donut tracker is designed to view the local donut options that I've tried.

### Description
<br><br>
As a user, you can:
* `Update` or `Delete` donuts <br>
* `Search` any donut within the database <br>
* Filter through stores and see their ranges  <br>
* `Create` donuts and add them to the database <br>

### Implementation

#### Database
The database schema is simple with two tables. One for donuts and one for stores.

The `store_id` is a `FOREIGN KEY` linked to the `id` of the `store` table.<br>
The <a href="https://github.com/Parrisu/EventTrackerProject/blob/main/JPADonut/src/main/java/com/skilldistillery/donut/entities/Store.java">`store`</a>  is the owner of the relationship, using the 
`@OneToMany`
bilateral relationship to <a href="https://github.com/Parrisu/EventTrackerProject/blob/main/JPADonut/src/main/java/com/skilldistillery/donut/entities/Store.java">`donut`</a> which uses `@ManyToOne`.

 <img height="300" alt="Donut Logo" src=
        "https://github.com/Parrisu/EventTrackerProject/blob/main/images/donutSchema.png"/>


### Technologies and Methodologies Used
<br>

Languages: Java <br>
Web: HTML, CSS, Bootstrap 5.3 <br>
Database: SQL, Spring Data, JPA, JDBC, JPQL, Hibernate <br>
Methodologies: TDD <br>
Backend: Spring, Spring Boot <br>
Configuration Management: Git <br>
IDE: STS4, Eclipse, VSCode <br>
Additional Software: Postman <br>

### Overview
| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/donuts`     |              | List of all _donut_ entities | 200 |
| GET       | `/api/donuts/7`   |              | JSON of _donut_ `7` | 200,404 |
| POST      | `/api/donuts`     | JSON of a new _donut_ entity  | JSON of created _donut_ | 201,400 |
| PUT       | `/api/donuts/7`   | JSON of a new version of _donut_ `7` | JSON of updated _donut_ | 200,404,400 |
| DELETE    | `/api/donuts/17`  |              |               | 204,404,400|



### Lessons Learned
--


### Stretch Goals
--


### How to Download and Run

To set up this project to run on your own computer follow the steps below.

Otherwise just head to the deployed website above.

Thanks for checking it out!
  - Parris

