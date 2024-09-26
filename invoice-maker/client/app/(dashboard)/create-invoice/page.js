import InvoiceForm from "@/components/Invoice-form";
import React from "react";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold my-10 text-center">Create Invoice</h1>
      <InvoiceForm />
    </div>
  );
}
