import express, { Request, Response, NextFunction } from "express";
import {
  GetAvailableOffers,
  GetFoodAvailability,
  GetFoodsIn30Min,
  GetTopRestaurants,
  RestaurantById,
  SearchFoods,
} from "../controllers";

const router = express.Router();

router.get("/:pincode", GetFoodAvailability);

router.get("/top-restaurant/:pincode", GetTopRestaurants);

router.get("/foods-in-30-min/:pincode", GetFoodsIn30Min);

router.get("/search/:pincode", SearchFoods);

router.get("/offers/:pincode", GetAvailableOffers);

router.get("/restaurant/:id", RestaurantById);

export { router as ShoppingRoute };
