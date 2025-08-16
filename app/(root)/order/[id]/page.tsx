import { getOrderById } from "@/lib/actions/order.actions";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  return <>details</>;
};

export default OrderDetailsPage;
