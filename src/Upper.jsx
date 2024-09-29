
export default function Upper({ value }) {
    return (<span className={(value >= 0 ? "green" : "red")}>({value})</span>)
}

