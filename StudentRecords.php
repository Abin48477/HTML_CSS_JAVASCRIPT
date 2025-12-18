<?php
class StudentRecords {
    private $records = [];

    public function addRecord($studentId, $name, $grade) {
        $this->records[$studentId] = [
            'name' => $name,
            'grade' => $grade
        ];
    }

    public function getRecord($studentId) {
        return isset($this->records[$studentId]) ? $this->records[$studentId] : null;
    }

    public function getAllRecords() {
        return $this->records;
    }

    public function updateRecord($studentId, $name = null, $grade = null) {
        if (isset($this->records[$studentId])) {
            if ($name !== null) {
                $this->records[$studentId]['name'] = $name;
            }
            if ($grade !== null) {
                $this->records[$studentId]['grade'] = $grade;
            }
        }
    }

    public function deleteRecord($studentId) {
        if (isset($this->records[$studentId])) {
            unset($this->records[$studentId]);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<form action="">
    <input type="text" name="studentId" placeholder="Student ID">
    <input type="text" name="name" placeholder="Name">
    <input type="text" name="grade" placeholder="Grade">
    <button type="submit">Add Record</button>
</form>
</body>
</html>
