"use client"

import { productDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validators";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";



const ProductForm = ({ type, product, productId}: {
    type: "Create" | "Update",
    product?: Product,
    productId?: string
}) => {
const router = useRouter();

 const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver:
      type === 'Update'
        ? zodResolver(updateProductSchema)
        : zodResolver(insertProductSchema),
    defaultValues:
      product && type === 'Update' ? product : productDefaultValues,
  });

    return ( <Form {...form}>
        <form className="space-y-8">
            <div className="flex flex-col md:flex-row gap-5">
              
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              
            </div>
            <div className="upload-field flex flex-col md:flex-row gap-5">
              
            </div>
            <div className="upload-field">

            </div>
            <div className="">
                {/*subsription */}
            </div>
            <div className="">
                {/* submit */}
            </div>
        </form>
    </Form>);
}
 
export default ProductForm;