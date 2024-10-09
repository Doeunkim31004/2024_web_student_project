import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import { Student as StudentType } from "./types";

interface StudentProps {
  student: StudentType;
  toggleAttendance: (id: number) => void;
}

const Student: React.FC<StudentProps> = ({ student, toggleAttendance }) => {
  return (
    <ListItem
      sx={{
        "&:hover": {
          backgroundColor: "#f0f0f0", // hover 시 배경색 변경
        },
        cursor: "pointer", // 커서를 포인터로 변경
      }}
    >
      <ListItemText
        primary={student.name}
        sx={{
          "&:hover": {
            color: "blue", // hover 시 텍스트 색상 변경
          },
        }}
      />
      <Button
        variant="contained"
        color={student.isPresent ? "primary" : "secondary"}
        onClick={() => toggleAttendance(student.id)}
      >
        {student.isPresent ? "출석" : "결석"}
      </Button>
    </ListItem>
  );
};

export default Student;
