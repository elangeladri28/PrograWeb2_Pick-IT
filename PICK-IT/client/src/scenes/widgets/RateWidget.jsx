import { Rating } from "@mui/material";
import { useState } from "react";


const rateProduct = async (prod, calf = 1, token) => {
    const formData = new FormData();
    formData.append("productId", prod.product_id);
    formData.append("calif", calf);

    if (calf == null)
        return;

    const res = await fetch("http://localhost:8080/products/rate",
    {
      method: "PUT",
      headers: { xtkn: token },
      body: formData,
    }
  );
  const req = await res.json();
  if (req) {
    console.log("Producto: " + prod.product_id + " Rate: " + calf);
  }
  }

const RateWidget = (product_id, token) => {
    let rate = product_id.rate.product_rate;
    const [value, setValue] = useState(rate);

    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                rateProduct(product_id, newValue, token);
            }}
        />
    );

};

export default RateWidget;