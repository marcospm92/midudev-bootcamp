export const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {
    return <h2>{props.course}</h2>
}

const Content = ({ parts }) => {
    return (
        parts.map((part) => {
            return <div key={part.id}>
                <p>{part.name} {part.exercises}</p>
            </div>
        })
    )
}

const Total = ({ parts }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
    let sumOfExercises = parts.reduce(reducer, 0);
    return <p><strong>total of {sumOfExercises} exercises</strong></p>
}
