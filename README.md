<h2 align="center">
    <a href="#" target="blank_">
        <img height="200" alt="Donut Logo" src=
        "https://github.com/Parrisu/EventTrackerProject/blob/main/images/donutimg.png"/>
    </a>
    <br>
    Love The Sweetness
</h2>

<div align="center">
    
![Static Badge](https://img.shields.io/badge/Donut-Java-green?)
![Static Badge](https://img.shields.io/badge/Parris-Creator-orange?link=https%3A%2F%2Fgithub.com%2FParrisu)

</div>


## Donut Tracker

#### Side project aiming to track sweet donuts in my local area.

### Overview
This donut tracker is designed to view the local donut options that I've tried.

### Description
<br>
On my move to Camarillo, I was introduced to a donut shop named <strong>Rolling Pin</strong>. However, it wasn't just any old donut shop, it was a hub for any age. During the day, a variety of people show up to grab a box for loved ones, friends, and coworkers. But at night, it becomes a meet up location for many youth and adults alike. This drew me in to it's culture, making me want to see what it had to offer. This led me on a path to try donuts from different shops in the local area. And may I just say, they are very good.
<br>
Through Get, Post, Pull, and Delete requests you can:
* `Update` or `Delete` donuts <br>
* `Search` any donut within the database <br>
* Filter through stores and see their donuts  <br>
* `Create` donuts and add them to the database <br>

I chose to remove Update, Delete, and Create for stores.

### Implementation


#### Database
The schema below shows the two tables. One for donuts and one for stores.

The `store_id` is a `FOREIGN KEY` linked to the `id` of the `store` table.<br>
The <a href="https://github.com/Parrisu/EventTrackerProject/blob/main/JPADonut/src/main/java/com/skilldistillery/donut/entities/Store.java">`donut`</a> is the owner of the relationship, which uses `@ManyToOne` bilateral relationship to
 the <a href="https://github.com/Parrisu/EventTrackerProject/blob/main/JPADonut/src/main/java/com/skilldistillery/donut/entities/Store.java">`store`</a> that uses `@OneToMany`.

 <img height="300" alt="Donut Logo" src=
        "https://github.com/Parrisu/EventTrackerProject/blob/main/images/donutSchema.png"/>


### Technologies and Methodologies Used
<br>

Languages: Java <br>
Web: Postman<br>
Database: SQL, Spring Data, JPA, JDBC, Hibernate, JpaRepository <br>
Methodologies: TDD <br>
Backend: Spring, Spring Boot <br>
Configuration Management: Git <br>
IDE: STS4, Eclipse <br>

### REST APIs
| HTTP Verb | URI               | Request Body | Response Body | Status Codes |
|-----------|-------------------|--------------|---------------|---------|
| GET       | `/api/donuts`     |              | List of all _donut_ entities | 200 |
| GET       | `/api/donuts/7`   |              | JSON of _donut_ `7` | 200,404 |
| GET       | `/api/stores`     |              | List of all _store_ entities | 200|
| GET       | `/api/stores/2`   |              | JSON of _store_ `2` | 200,404 |
| GET       | `/api/stores/2/donuts`   |       | List of all _donut_ entities of _store_ `2` | 200,404 |
| POST      | `/api/donuts`     | JSON of a new _donut_ entity  | JSON of created _donut_ | 201,400 |
| PUT       | `/api/donuts/7`   | JSON of a new version of _donut_ `7` | JSON of updated _donut_ | 200,404,400 |
| DELETE    | `/api/donuts/17`  |              |               | 204,404|



### Lessons Learned
<p>
    There were two big things I took away from the first half project. The first being HTTP Requests and how they are used. The second coming from the JpaRepository interface.
</p>
<p>
    HTTP Requests are made of four pieces. A request line, header, blank line, and optional body. The request lines are the standard methods such as GET, POST, UDATE, or DELETE. Next would be your request header that has the ability to pass information about that request. A blank line follows to indicate the end of the said header. Finally an optional body that is used to send data with it. 
</p>
 <p>
 The data sent with requests for this project are in the form of <strong>JSON</strong>. Spring uses the Jackson Library jar files convert the JSON(JavaScript Object Notation) to a POJO(Plain Old Java Object), which I can then use to interact with the database. This can also be done in reverse order to return a JSON of a POJO.</p>
 <p>
    The JpaRepository seemed like it would be the most difficult part, but ended up easier to use than a DAO. By extending the JpaRepository, I was able to construct methods in the form of a query. While it is limited to a single entity class, the separation of entities reduces the confusion. To access these methods, I used a Service class that implements the logic. 
 </p>
<br>
<p>
    For the second half, I implimented AJAX to have a working webpage auto-update with information from the database.
</p>
<p>
    This had me scratching my head a bit, thinking about the event que and how to order functions within the page. The main lesson from this part, was making sure I called upon the target of the element passed through an `eventListener`. Too many times I could not figure out why my data was showing up undefined. 
 ``` e.target.parentElement ``` 
    
</p>



### Stretch Goals
-- Filter Donuts by Store (completed)
-- JUnit Tests for Repository and Service

<br>
Thanks for checking it out!
  - Parris

