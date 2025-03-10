import { GetStaticProps } from "next";
import api from "@/services/api";
import Medicines from "@/components/medicines/Medicines";

interface Medicine {
  id: number;
  name: string;
  price: number;
}

interface MedicinesPageProps {
  medicines: Medicine[];
}

export default function MedicinesPage({ medicines }: MedicinesPageProps) {
  return (
   <Medicines medicines={medicines}/>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/medicines");
  const medicines = response.data;


  return {
    props: { medicines },
    revalidate: 10,
  };
};
