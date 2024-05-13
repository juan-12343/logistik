// Fungsi untuk menghasilkan nomor resi baru
const generateTrackingNumber = () => {
  // Contoh format nomor resi: AWB123456789
  const prefix = "AWB";
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  return prefix + randomNumber;
};

module.exports = { generateTrackingNumber };
