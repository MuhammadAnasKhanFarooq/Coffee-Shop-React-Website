import "./App.css"; 
import Header from "./Header"; 
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import ProductCard from "./ProductCard";

function App() { 
  return ( 
    <div> 
      <Header /> 
      <Navbar /> 

      <main className="main"> 
        <h1>Welcome to Starbucks</h1> 

        {/* Coffee Section */}
        <section> 
          <h2>Discover our special coffee selection</h2> 
          <div className="product-grid">
            <ProductCard  
              name="Caramel Latte"  
              price="$5"  
              image="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Mocha Coffee" 
              price="$6"  
              image="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Espresso"  
              price="$4"  
              image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Matcha Latte"  
              price="$8"  
              image="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop" 
            /> 
          </div>
        </section> 

        {/* Drinks Section */}
        <section> 
          <h2>Discover our special Drinks selection</h2> 
          <div className="product-grid">
            <ProductCard  
              name="Iced Shaken Espresso"  
              price="$5"  
              image="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Caramel Macchiato"  
              price="$6"  
              image="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Cold Brew"  
              price="$4"  
              image="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Java Chip Frappuccino"  
              price="$5"  
              image="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop" 
            /> 
          </div>
        </section> 

        {/* Food Section */}
        <section> 
          <h2>Discover our special Food selection</h2> 
          <div className="product-grid">
            <ProductCard  
              name="Breakfast Sandwich"  
              price="$3"  
              image="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Egg Bites"  
              price="$2"  
              image="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Chive Bakes"  
              price="$3"  
              image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop" 
            /> 
            <ProductCard  
              name="Fruit & Yogurt Parfait"  
              price="$3"  
              image="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop" 
            /> 
          </div>
        </section> 
      </main> 

      <Footer /> 
    </div> 
  ); 
} 

export default App;