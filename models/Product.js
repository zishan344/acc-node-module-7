const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true, //cut the extra space between  input  box
      unique: [true, "name must be unique"],
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is to large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: "number",
      required: true,
      min: [0, "price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "liter", "pcs"],
        message: "unit value can't be {VALUE} kg/liter/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      messages: "quantity must be an integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    /*  createAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }, */
    /*  supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
      }, */
    /* catagories: [
        {
          name: { type: String, required: true },
          _id: mongoose.Schema.Types.ObjectId,
        },
      ], */
  }
  /* {
      timestamps: true,
    } */
);
// mongoose  middleware
productSchema.pre("save", function (next) {
  console.log("before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});
// productSchema.post("save", function (doc, next) {
//   console.log("after saving data");
//   next();
// });

productSchema.methods.logger = function () {
  console.log(`Data saved for ${this.name}`);
};

// mongoose patterns
//schema=> modal => query
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
