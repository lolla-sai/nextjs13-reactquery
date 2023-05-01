import React from "react";

const students = {
    1: {
        name: "John",
        age: 10,
        subjects: ["Math", "English"],
    },
};

export default function Page() {
    const student = students[1];

    return (
        <>
            <h1>Student profile</h1>
            <div>Name: {student.name}</div>
            <div>Age: {student.age}</div>
            <div>Studies: {student.subjects.join(", ")}</div>
        </>
    );
}
