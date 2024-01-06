import { Router } from "express";
import rateLimiter from "express-rate-limit";
import {
  registerUser,
  loginUser,
  logout,
} from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
  validateUpdateUserInput,
} from "../middleware/validationMiddleware.js";
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});

const router = Router();

router.route("/register").post(apiLimiter, validateRegisterInput, registerUser);
router.route("/login").post(apiLimiter, validateLoginInput, loginUser);
router.route("/logout").get(logout);

router.use(authenticateUser);
router.get("/current-user", getCurrentUser);
router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch(
  "/update-user",
  upload.single("avatar"),
  checkForTestUser,
  validateUpdateUserInput,
  updateUser
);

export default router;
