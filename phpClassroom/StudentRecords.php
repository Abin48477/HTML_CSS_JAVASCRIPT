<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="Student_table" method="POST">
        <label for="student_id">Student Name</label>
        <input type="text" id="student_id" name="student_id" required>
        <br><br>
        <label for="student_name">Roll no</label>
        <input type="text" id="rollno" name="rollno" required>
        <br><br>
        <label for="course">Gender</label>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" required>
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" required>
        <br><br>
        <label for="course">Course</label>
<select name="course" id="course" required>
    <option value="">Select Course</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Mathematics">Mathematics</option>
    <option value="Physics">Physics</option>
</select>
        <br><br>
        <label for="phone_no">Phone No:</label>
        <input type="text" id="phone_no" name="phone_no" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <input type="submit" value="Save">
        <input type="reset" value="Cancel">
    </form>
    <a href="display.php">Display Student</a>
</body>
</html>
