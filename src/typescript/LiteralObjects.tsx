
interface Person {
    name: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNo: number;
}

const LiteralObjects = () => {

    const person: Person = {
        name: 'Cristian',
        age: 26,
        address: {
            country: "CO",
            houseNo: 302,
        },
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default LiteralObjects