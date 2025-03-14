import { GetServerSideProps } from "next";
import api from "@/services/api";
import Medicines from "@/components/medicines/Medicines";
import Pagination from "@/components/ui/pagination/Pagination";
import { useRouter } from "next/router";

interface Medicine {
  id: number;
  name: string;
  price: number;
}

interface MedicinesPageProps {
  medicines: Medicine[];
  totalPages: number;
  currentPage: number;
}

export default function MedicinesPage({ medicines, totalPages, currentPage }: MedicinesPageProps) {
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`); 
  };

  return (
    <>
      <Medicines medicines={medicines} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number(query.page) || 1;
  const limit = 4;

  const response = await api.get(`/medicines?_page=${page}&_limit=${limit}`);
  const medicines = response.data;

  const totalResponse = await api.get(`/medicines`);
  const totalItems = totalResponse.data.length;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    props: { medicines, totalPages, currentPage: page },
  };
};

