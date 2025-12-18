CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

CREATE TABLE student_tbl (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    rollno VARCHAR(20) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    course VARCHAR(100) NOT NULL,
    phone_no VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
);
