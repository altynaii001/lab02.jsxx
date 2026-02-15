import FragmentLayout from "../Lab_02/task1/FragmentLayout";
import ItemList from "../Lab_02/task1/ItemList";
import Combined from "../Lab_02/task1/Combined";
import ProductList from "../Lab_02/taks2/ProductList";
import Section from "../Lab_02/taks2/Section";
export default function App() {
  return (
    <>
    <h1>Lab 02</h1>
    <FragmentLayout />
    <ItemList />
    <Combined />

    <h2 />
    <h2>Lab 2.2</h2>
    <Section title="Product">
      <ProductList/>
    </Section>

    </>
  );
}