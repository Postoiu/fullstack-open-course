const Part = ({ part }) => {
    return (
        <p>
        {part.name} {part.exercises}
        </p>
    )
}

const Header = ({ course }) => {
    return <h1>{course}</h1>
}

const Content = ({ parts }) => {
    return (
        parts.map(part => (
        <Part key={part.id} part={part} />
        ))
    )
}

const Total = ({ parts }) => {
    const sum = parts.reduce((acc, cur) => (
        acc += cur.exercises
    ), 0)

    return <h4>total of {sum} exercises</h4>
}

const Course = ({ course }) => {
    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    )
}

export default Course;