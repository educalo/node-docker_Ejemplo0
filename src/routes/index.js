import { Router } from "express";
import generator from "./../utils/passwordGenerator.js";

//enrutador con metodo get
const router = Router();

router.get("/:quantity", (req, res) => {
    const { quantity } = req.params;

    let passwords = [];

    for (let x = 0; x < quantity; x++) {
        passwords.push({ randomPassword: generator() });
    }

    //retorno el resultado en formato json
    res.json(passwords);
});

export default router;
