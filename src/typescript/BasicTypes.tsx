
interface TiposBasicosProps {
    nameAlter: string,
}

const BasicTypes = (props: TiposBasicosProps) => {

    let name: string = 'Cristian';
    let age: number = 26;
    let isActive: boolean = false;

    let powers: string[] | number[] = ['Sleep', 'Procastination', 'Vladimir', 'React'];

    return (
        <>
            <h3>Tipos basicos</h3>
            {isActive ? name + ' ' + age : props.nameAlter}
            <br />
            {powers.join(', ')}
        </>
    )
}

export default BasicTypes