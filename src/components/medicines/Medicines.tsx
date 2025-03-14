import styles from "./Medicines.module.css";
import Card from "@/components/card/Card";
import Image from "next/image";
import menueImage from "../../../public/menue.png"
import basketImage from "../../../public/basket.png"
import { useRouter } from "next/router";


interface Medicine {
  id: number;
  name: string;
  price: number;
}

interface MedicinesPageProps {
  medicines: Medicine[];
}

export default function Medicines({ medicines }: MedicinesPageProps) {
  const route=useRouter()
  const handleAddTobasket=(medicine:Medicine)=>{
    // دریافت داروهای موجود در localStorage (اگر موجود باشند)
    const existingMedicines = localStorage.getItem("medicinesList");

    let medicinesList: Medicine[] = [];

    // اگر داروهایی در localStorage موجود باشند، آن‌ها را به آرایه تبدیل می‌کنیم
    if (existingMedicines) {
      medicinesList = JSON.parse(existingMedicines);
    }

    // بررسی می‌کنیم که آیا دارو قبلاً در لیست وجود دارد یا نه
    const isMedicineExists = medicinesList.some((item) => item.id === medicine.id);

    if (!isMedicineExists) {
      // اگر دارو در لیست موجود نیست، آن را به لیست اضافه می‌کنیم
      medicinesList.push(medicine);
      localStorage.setItem("medicinesList", JSON.stringify(medicinesList));
      console.log("Medicine added to localStorage", medicine);
    } else {
      console.log("This medicine is already in the list");
    }
    }
    
  const handleGoToBasket=()=>{
    route.push("/checkout")
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Image alt="basket" src={basketImage} width={30} height={30} className={styles.images} onClick={handleGoToBasket}/>
        <Image alt="menue" src={menueImage} width={30} height={30} className={styles.images}/>
      </div>
      <h1>لیست داروها</h1>
      <div className={styles["mediciene-contaent"]}>
        {medicines.map((medicine) => (
          <Card
            key={medicine.id}
            name={medicine.name}
            price={medicine.price}
            onAddToCart={() => handleAddTobasket(medicine)}
            className={styles.customCard}
          />
        ))}
      </div>
    </div>
  );
}


