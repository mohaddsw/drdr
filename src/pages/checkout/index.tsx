import { useEffect, useState } from "react";
import Button from "@/components/ui/button/Button";
import styles from "./index.module.css";
import RemoveCard from "@/components/removeCard/RemoveCard";
import Image from "next/image";
import backImage from "../../../public/arrowpng.parspng.com_.webp"
import { useRouter } from "next/router";

interface Medicine {
  id: number;
  name: string;
  price: number;
}

export default function CheckoutPage() {
  const router=useRouter()
  const [cartItems, setCartItems] = useState<Medicine[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("medicinesList");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("medicinesList", JSON.stringify(updatedCart)); 
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
       <div className={styles.nav}>
        <Image alt="menue" src={backImage} width={30} height={30} className={styles.images} onClick={()=>router.push("/")}/>
      </div>
      <h1>جزئیات خرید</h1>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است!</p>
      ) : (
        <div className={styles.content}>
          {cartItems.map((medicine) => (
          <RemoveCard
            key={medicine.id}
            name={medicine.name}
            price={medicine.price}
            onDellToCart={() => handleRemoveFromCart(medicine.id)}
            className={styles.customCard}
          />
        ))}
          <div className={styles.total}>
            <span>جمع کل: {totalPrice} تومان</span>
            <span> تعداد: {cartItems.length} </span>
          </div>
            <Button variant="primary" className={styles.confirmButton} onClick={()=>{alert("تکمیل خرید")}}>تکمیل خرید</Button>
        </div>
      )}
    </div>
  );
}
