import { Router } from "express";

import { greet } from "../../controllers/v1/greetingController.js";

const router = Router();

router.get("/hi", greet);

export default router;
