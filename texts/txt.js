/**
 * Start Text
 * @param {string} name
 * @returns string
 */
function start_txt(name) {
	return `<b>Hello! ${name}</b>

Bot Ini Dibuat Untuk Mempermudah Bayaran Kas Dan Bulanan Anda


Bot Ini Di Kelola Dan Di Maintain Oleh Tim Taekwondo Club Yt Indonesia

<i>Klik /help untuk detail selanjutnya</i>

Salam,
Tim Taekwondo Club Yt Indonesia
`;
}

/**
 * Limit Text
 * @returns string
 */
function limit_txt() {
	return `Maaf, Anda Sudah Melebihi Batas Interaksi, Silahkan Tunggu Selama 1 Menit
`;
}

/**
 * Wait Text
 * @returns string
 */
function wait_txt() {
	return `Mohon Tunggu Sebentar...
`;
}

/**
 * Help Text
 * @param {string} name
 * @returns string
 */
function help_txt(name) {
	return `<b>Hello! ${name}</b>

<i>Klik /kas untuk bayar uang kas</i>

<i>Klik /weekend untuk bayar uang kas hari minggu</i>

<i>Klik /bulanan untuk bayar bulanan</i>

Nb: Apabila butuh bantuan silahkan hubungi Sabeum Refaldy

Salam,
Tim Taekwondo Club Yt Indonesia
`;
}

/**
 * Template/Format Invoice
 * @param {string} orderid
 * @param {string} payment_type
 * @param {string} amount
 * @param {string} transaction_status
 * @param {string} transaction_id
 * @param {string} transaction_time
 * @returns string
 */
function invoice_txt(
	orderid,
	payment_type,
	amount,
	transaction_status,
	transaction_id,
	transaction_time,
) {
	return `Invoice Notification

Time: ${transaction_time}

Order Id: ${orderid}

Payment Type: ${payment_type}

Amount: ${amount}

Transaction Status: ${transaction_status}

Transaction Id: ${transaction_id}

Nb: Jika transaction status berisi settlement atau capture, silahkan screenshot pesan ini dan kirim lalu simpan untuk bukti pembayaran
`;
}

module.exports = {
	start_txt,
	help_txt,
	limit_txt,
	wait_txt,
	invoice_txt,
};
