import Link from "next/link";
import styles from "./Medicines.module.css";
import Card from "@/components/ui/card/Card";
import Button from "@/components/ui/button/Button";

interface Medicine {
  id: number;
  name: string;
  price: number;
}

interface MedicinesPageProps {
  medicines: Medicine[];
}

export default function Medicines({ medicines }: MedicinesPageProps) {
  return (
    <div className={styles.container}>
      <h1>لیست داروها</h1>
      <div className={styles.grid}>
        {medicines.map((medicine) => (
          <Card
            key={medicine.id}
            name={medicine.name}
            price={medicine.price}
            onAddToCart={() => alert(`${medicine.name} به سبد اضافه شد!`)}
            className={styles.customCard}
          />
        ))}
      </div>
      <Link href="/checkout">
        <Button variant="secondary" className={styles.customButton}>تکمیل خرید</Button>
      </Link>
    </div>
  );
}


