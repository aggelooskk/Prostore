"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CartItem, Cart } from "@/types";
import { addItemToCart, RemoveItemFromCart } from "@/lib/actions/cart.actions";
import { Plus, Minus } from "lucide-react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast(res.message, {
      action: {
        label: "Go To Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  const handleRemoveFromCart = async () => {
    const res = await RemoveItemFromCart(item.productId);

    if (res.success) {
      toast(res.message);
    } else {
      toast.error(res.message);
    }
    return;
  };

  // Check if item exist in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus /> Add To Cart
    </Button>
  );
};

export default AddToCart;
