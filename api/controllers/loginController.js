const { Admin } = require("../models");
class loginController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const admin = await Admin.findOne({ where: { username: username } });

      if (!admin) {
        return res.status(404).json({ message: "Username tidak ditemukan" });
      }

      if (admin.password !== password) {
        return res.status(401).json({ message: "Password salah" });
      }

      // Jika semua valid, kirim respons berhasil
      res.status(200).json({ message: "Login berhasil" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getadmin(req, res) {
    try {
      let admin = await Admin.findAll();
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async create(req, res) {
    try {
      const { username, email, password } = req.body;
      let result = await Admin.create({ username, email, password });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static update(req, res) {}

  static delete(req, res) {}

  static getadminbyid(req, res) {}
}

module.exports = loginController;
