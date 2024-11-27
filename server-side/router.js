import { Router } from "express";
import * as rh from "./requestHandler.js"
const router = Router()

router.route('/add').post(rh.addData)
router.route('/display').get(rh.displayData)
router.route('/delete/:_id').delete(rh.deleteData)



export default router;