import { preprocess } from "react-native-web/dist/cjs/exports/StyleSheet/preprocess";
import Card from "./Card";
export default function ProductList() {
    const products = [
        {id: 101, name: "Widget", price: 9.99},
        {id: 102, name: "Gadget", price: 14.5},
        {id: 103, name: "Doodad", price: 5.25}
    ];
    return (
        <>
        {products.map((product) => (
            <Card key={product.id} title={product.name}>
                <p>Price: ${product.price}</p>
                <p>ID: {product.id}</p>
            </Card>
        ))}
        </>
    );
}