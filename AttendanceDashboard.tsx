import React, { useState } from "react";
import { Container, CssBaseline, Grid, Box, Button } from "@mui/material";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { Student } from "./types";
import axios from "axios";

const AttendanceDashboard: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "김민경",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 2,
      name: "정혜연",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 3,
      name: "김모연",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 4,
      name: "정수정",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 5,
      name: "박슨경",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 6,
      name: "박지원",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 7,
      name: "유하진",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 8,
      name: "박원빈",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 9,
      name: "이나연",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 10,
      name: "남희두",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 11,
      name: "이유정",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 12,
      name: "최창진",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 13,
      name: "윤하정",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 14,
      name: "김지영",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
    {
      id: 15,
      name: "오영주",
      isPresent: false,
      grade: undefined,
      attendance_rate: undefined,
    },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
  };

  const findStudent = (student_id: string) => {
    setScheduleData([]);
    axios
      .get(`http://localhost:8001/student_schedule?student_id=${student_id}`)
      .then((response: { data: React.SetStateAction<any[]> }) => {
        sessionStorage.setItem("student_id", student_id);
        setScheduleData(response.data);
      })
      .catch((error: any) => {
        console.error("학생 데이터를 가져오는 중 오류가 발생했습니다!", error);
      });
  };

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <MainContent
            students={students}
            toggleAttendance={toggleAttendance}
            findStudent={function (student_id: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AttendanceDashboard;
