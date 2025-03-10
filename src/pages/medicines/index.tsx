import { GetStaticProps } from "next";
import Link from "next/link";
import api from "@/services/api";

type Medicine= {
  id: number;
  name: string;
  price: number;
}

type MedicinesPageProps=  {
  medicines: Medicine[]
};


export default function MedicinesPage({ medicines }: MedicinesPageProps) {
  return (
    <div className="container">
      <h1>لیست داروها</h1>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - {medicine.price} تومان
            <button>افزودن به سبد</button>
          </li>
        ))}
      </ul>
      <Link href="/checkout"><button>تکمیل خرید</button></Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/medicines");
  return {
    props: {
      medicines: response.data,
    },
    revalidate: 10, 
  };
};
