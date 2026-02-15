export default function Combined() {
    const items = [
        {id: 1, name: "Apple"},
        {id: 2, name: "Banana"},
        {id: 3, name: "Cherry"}
    ];

    return (
        <>
        <h2>Combined Fragment + List</h2>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <p>Total: {items.length} items </p>
        </>
    );
    
}