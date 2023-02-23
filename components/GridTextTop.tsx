//Props
interface Props {
    title: string,
    subtitle: string,
}
//MAIN COMPONENT
const GridTextTop = ({title, subtitle} : Props) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    )
}
export default GridTextTop
